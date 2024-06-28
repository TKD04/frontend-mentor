const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextCofnig = isProd
  ? {
      basePath: "/frontend-mentor",
      output: "export",
    }
  : {};

export default nextCofnig;
