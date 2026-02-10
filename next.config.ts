import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Make the app aware it's mounted under this subpath.
  // When deploying elsewhere, rebuild with the appropriate basePath.
  basePath: "/haroldbsmith/freegospelchurch",
};

export default nextConfig;
