/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
      {
        protocol: "https",
        hostname: "i5.walmartimages.com",
      },
      {
        protocol: "https",
        hostname:
          "1d81e75c4337a6e2e3c2-4a69748413de5fcbd7a7a944817c2356.ssl.cf1.rackcdn.com",
      },
    ],
  },
};

export default nextConfig;
