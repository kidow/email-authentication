import * as firebase from 'firebase/app'
import 'firebase/auth'
import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $auth: firebase.auth.Auth
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $auth: firebase.auth.Auth
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $auth: firebase.auth.Auth
  }
}

const FirebasePlugin: Plugin = ({ env }, inject) => {
  if (!firebase.apps.length) {
    const config = {
      apiKey: env.FIREBASE_API_KEY,
      authDomain: env.FIREBASE_AUTH_DOMAIN,
      databaseURL: env.FIREBASE_DATABASE_URL,
      projectId: env.FIREBASE_PROJECT_ID,
      storageBucket: env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
      appId: env.FIREBASE_APP_ID,
      measurementId: env.FIREBASE_MEASUREMENT_ID
    }
    firebase.initializeApp(config)
  }
  inject('auth', firebase.auth)
}

export default FirebasePlugin
