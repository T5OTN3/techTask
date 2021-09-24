module.exports = {
  reactStrictMode: true,
  env: {
    JWT_SECRET: 'jwtsecretkey2021',
    JWT_EXPIRES_IN: '1h',
    GCLOUD_CREDENTIALS: process.env.GCLOUD_CREDENTIALS,
    GCLOUD_CREDENTIALS2: process.env.GCLOUD_CREDENTIALS2,
  },
  async rewrites() {
    return [
      {
        source: '/cloud/images/:path*',
        destination: 'https://storage.googleapis.com/secretimmo-static-bucket/:path*',
      },
    ]
  },
}
