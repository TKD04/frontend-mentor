/** @type {import('next').NextConfig} */

let nextConfig = {};

if (typeof process === "undefined") {
  nextConfig = {
    basePath: "/frontend-mentor",
    output: "export",
  };
}

export default nextConfig;
