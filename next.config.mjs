/** @type {import('next').NextConfig} */
const nextConfigDev = {};

/** @type {import('next').NextConfig} */
const nextCofnigProduction = {
  basePath: "/frontend-mentor",
  output: "export",
};

// Because there is not "process" environment variable on GitHub Action.
export default typeof process === "undefined"
  ? nextCofnigProduction
  : nextConfigDev;
