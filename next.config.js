module.exports = {
  images: {
    domains: ["services.gehealthcare.com"],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: "/:path*",
        destination: "https://services.gehealthcare.com/:path*", // Proxy to Backend
      },
    ];
  },
};
