import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/configs/i18n.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH
}

export default withNextIntl(nextConfig)
