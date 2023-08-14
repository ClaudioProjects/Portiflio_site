const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
    // prependData: `@import "~@styles/_variables.scss";`,
  },
  env: {
    STATIC_FORMS_ACCESS_KEY: process.env.BASE_URL,
  },
}

module.exports = nextConfig
