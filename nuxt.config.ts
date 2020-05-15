import 'dotenv/config'
import { Configuration } from '@nuxt/types'

export default {
  mode: 'universal',
  server: {
    port: 3001
  },
  head: {
    title: '이메일',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '이메일 인증 로그인'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/dotenv'],
  modules: [],
  build: {
    extend(config, ctx) {}
  }
} as Configuration
