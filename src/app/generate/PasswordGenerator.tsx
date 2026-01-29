"use client";

import { useEffect, useState } from "react";

type GenerateResponse = {
  password: string;
  type?: string;
};

export function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    try {
      setIsGenerating(true);
      setError(null);

      const res = await fetch("/api/generate/password");
      if (!res.ok) {
        throw new Error("Failed to generate password");
      }

      const data: GenerateResponse = await res.json();
      setPassword(data.password);
      setCopied(false);
    } catch (err) {
      console.error(err);
      setError("Unable to generate a password. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  }

  async function handleCopy() {
    if (!password) return;

    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setError(null);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      setError("Unable to copy to clipboard.");
    }
  }

  useEffect(() => {
    void generate();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            type="text"
            readOnly
            value={password}
            placeholder={isGenerating ? "Generating..." : ""}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
          />
        </div>
      </div>

      {error && (
        <p className="text-sm text-rose-600 dark:text-rose-400">{error}</p>
      )}

      <div className="space-y-3">
        <button
          type="button"
          onClick={handleCopy}
          disabled={!password}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-indigo-300 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 dark:disabled:bg-indigo-300"
        >
          {copied ? "Copied!" : "Copy to clipboard"}
        </button>
        <button
          type="button"
          onClick={() => void generate()}
          disabled={isGenerating}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-indigo-300 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 dark:disabled:bg-indigo-300"
        >
          {isGenerating ? "Generating..." : "Regenerate"}
        </button>
      </div>
    </div>
  );
}
