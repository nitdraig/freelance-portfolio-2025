import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = "1 h" as const;
const RATE_LIMIT_PREFIX = "contact-form";

/** In-memory fallback when Upstash is not configured (local dev). */
const memoryStore = new Map<string, number[]>();
const MEMORY_WINDOW_MS = 60 * 60 * 1000;

function checkMemoryRateLimit(key: string): boolean {
  const now = Date.now();
  let timestamps = memoryStore.get(key) ?? [];
  timestamps = timestamps.filter((t) => now - t < MEMORY_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_MAX) return false;
  timestamps.push(now);
  memoryStore.set(key, timestamps);
  return true;
}

function createUpstashRatelimit(): Ratelimit | null {
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (!url || !token) return null;

  const redis = new Redis({ url, token });
  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(RATE_LIMIT_MAX, RATE_LIMIT_WINDOW),
    prefix: RATE_LIMIT_PREFIX,
    analytics: true,
  });
}

let ratelimitInstance: Ratelimit | null | undefined;

function getRatelimit(): Ratelimit | null {
  if (ratelimitInstance === undefined) {
    ratelimitInstance = createUpstashRatelimit();
  }
  return ratelimitInstance;
}

/**
 * Returns true if the request is allowed, false if rate limited.
 * Checks both IP and email identifiers when email is provided.
 */
export async function checkContactRateLimit(
  ip: string,
  email?: string
): Promise<boolean> {
  const ratelimit = getRatelimit();

  if (!ratelimit) {
    if (process.env.NODE_ENV === "production") {
      console.warn(
        "[rate-limit] UPSTASH_REDIS_REST_URL/TOKEN not set; using in-memory fallback (not reliable on serverless)."
      );
    }
    const ipOk = checkMemoryRateLimit(`ip:${ip}`);
    const emailOk = email
      ? checkMemoryRateLimit(`email:${email.toLowerCase()}`)
      : true;
    return ipOk && emailOk;
  }

  const ipResult = await ratelimit.limit(`ip:${ip}`);
  if (!ipResult.success) return false;

  if (email) {
    const emailResult = await ratelimit.limit(`email:${email.toLowerCase()}`);
    if (!emailResult.success) return false;
  }

  return true;
}
