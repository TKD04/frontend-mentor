/** @type {import('next').NextConfig} */
const nextConfig =
  process.env.NODE_ENV === "production"
    ? {
        basePath: "/frontend-mentor",
        output: "export",
      }
    : {};

export default nextConfig;
