<template>
  <div class="container">
    <div>
      <h1 class="title">이메일 링크 로그인</h1>
      <h2 class="subtitle">Email Authentication</h2>
      <h3 v-if="isLoggedIn">로그인에 성공했습니다.</h3>
      <h3 v-else>아직 로그인 상태가 아닙니다.</h3>
      <input v-if="!isLoggedIn" type="email" placeholder="email" autofocus v-model="email" />
      <button v-if="isLoggedIn" @click="logout">로그아웃</button>
      <button v-else @click="login">링크 전송</button>
      <div v-if="error" style="color: red; padding-top: 1rem">{{ error }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    isLoggedIn: false,
    email: '',
    error: ''
  }),
  methods: {
    async loginCheck() {
      console.log('login check!')
    },
    async logout() {},
    async login() {
      if (!this.email) return (this.error = '올바른 이메일을 입력해주세요.')
    }
  },
  mounted() {
    this.loginCheck()
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

input {
  font-size: 1rem;
}

button {
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
