import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8"> Page not found</p>
      <Link
        href="/#"
        className="px-6 rounded-md py-2 bg-black text-white  hover:bg-gray-800 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}
