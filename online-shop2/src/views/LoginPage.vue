<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <PageLogin></PageLogin>
  </div>
</template>

<script>
// @ is an alias to /src
import PageLogin from '@/components/PageLogin.vue'

export default {
  name: 'LoginPage',
  components: {
    PageLogin
  }
}
</script>