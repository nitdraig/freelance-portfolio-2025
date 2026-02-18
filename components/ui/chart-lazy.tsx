"use client"

import dynamic from "next/dynamic"

/**
 * Lazy-loaded chart components for code-splitting recharts (~heavy bundle).
 * Use these instead of @/components/ui/chart when you want to avoid loading recharts on initial page load.
 */
export const ChartContainer = dynamic(
  () => import("./chart").then((m) => ({ default: m.ChartContainer })),
  { ssr: false }
)
export const ChartTooltip = dynamic(
  () => import("./chart").then((m) => ({ default: m.ChartTooltip })),
  { ssr: false }
)
export const ChartTooltipContent = dynamic(
  () => import("./chart").then((m) => ({ default: m.ChartTooltipContent })),
  { ssr: false }
)
export const ChartLegend = dynamic(
  () => import("./chart").then((m) => ({ default: m.ChartLegend })),
  { ssr: false }
)
export const ChartLegendContent = dynamic(
  () => import("./chart").then((m) => ({ default: m.ChartLegendContent })),
  { ssr: false }
)
export const ChartStyle = dynamic(
  () => import("./chart").then((m) => ({ default: m.ChartStyle })),
  { ssr: false }
)

export type { ChartConfig } from "./chart"
