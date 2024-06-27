// Because there is not "process" environment variable on GitHub Action.
/** @type {import('next').NextConfig} */
const nextConfig =
  typeof process !== "undefined"
    ? {}
    : {
        basePath: "/frontend-mentor",
        output: "export",
      };

export default nextConfig;
