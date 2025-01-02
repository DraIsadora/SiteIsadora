module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.google.com https://www.google.com.br https://www.googleadservices.com; connect-src 'self' ws://127.0.0.1:57069 https://www.google-analytics.com https://googleads.g.doubleclick.net https://google.com; frame-src 'self' https://www.google.com https://td.doubleclick.net; font-src 'self';",
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
    ]
  },
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    NEXT_PUBLIC_GOOGLE_ADS_ID: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
  },
}
