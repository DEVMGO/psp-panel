/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [{ source: "/", destination: "/list", permanent: false }];
  },
};

export default nextConfig;
