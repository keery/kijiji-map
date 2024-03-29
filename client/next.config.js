const { i18n } = require('./next-i18next.config')

const env = process.env.NODE_ENV || 'development'

let envVars = {}

if (env !== 'development') {
  const { NEXTAUTH_URL, NEXT_PUBLIC_BACK_URL, JWT_TOKEN_SECRET } = process.env
  envVars = {
    NEXTAUTH_URL,
    NEXT_PUBLIC_BACK_URL,
    JWT_TOKEN_SECRET,
  }
}

module.exports = {
  i18n,
  async headers() {
    return [
      {
        // matching all API routes
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
            svgoConfig: {
              plugins: [{ removeViewBox: false }],
            },
          },
        },
      ],
    })

    return config
  },
  devtool: 'inline-source-map',
  env: envVars,
}
