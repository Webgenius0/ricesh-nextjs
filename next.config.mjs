/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/all-courses',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
