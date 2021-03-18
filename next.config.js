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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [{ removeViewBox: false }],
            },
          },
        },
      ],
    })

    return config
  },
  env: envVars,
}
