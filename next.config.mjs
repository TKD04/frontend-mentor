/** @type {import('next').NextConfig} */

// Because there is not "process" environment variable on GitHub Action.
const existsProcess = typeof process !== "undefined";
const nextConfig = existsProcess
  ? {}
  : {
      basePath: "/frontend-mentor",
      output: "export",
    };

export default nextConfig;
