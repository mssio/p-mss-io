import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
            Secure Password Generator
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600 dark:text-gray-300">
            Make sure that you always generate strong and secure passwords to
            keep your accounts safe. Do not reuse passwords across multiple
            sites.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/generate"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
            >
              Generate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
