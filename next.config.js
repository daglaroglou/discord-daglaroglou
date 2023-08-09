/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  cleanDistDir: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/daglaroglou",
        permanent: false
      },
      {
        source: "/spotify",
        destination: "https://open.spotify.com/user/k13b5fnpzdnhbmd7wkiq9u73w",
        permanent: false
      },
      {
        source: "/playlist",
        destination: "https://open.spotify.com/playlist/6q17eWz4tGzZjG2LVrdsxT",
        permanent: false
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/_daglaroglou_",
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
