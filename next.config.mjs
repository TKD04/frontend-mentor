const isProd =
  typeof process !== "undefined" && process.env.NODE_ENV === "production";

console.log(`isProd: ${isProd}`)
console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);

/** @type {import('next').NextConfig} */
const nextCofnig = isProd
  ? {
      basePath: "/frontend-mentor",
      output: "export",
    }
  : {};

export default nextCofnig;
