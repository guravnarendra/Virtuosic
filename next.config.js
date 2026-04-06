const { ROUTE_FILE_MAP } = require('./lib/routes');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return Object.entries(ROUTE_FILE_MAP).map(([route, fileName]) => ({
      source: `/${fileName}`,
      destination: route
    }));
  }
};

module.exports = nextConfig;
