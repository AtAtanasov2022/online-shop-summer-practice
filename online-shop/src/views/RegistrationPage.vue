<template>
  <div class="registration">
    <img alt="Vue logo" src="../assets/logo.png">
    <PageRegistration></PageRegistration>
  </div>
</template>

<script>
// @ is an alias to /src
import PageRegistration from '@/components/PageRegistration.vue'

export default {
  name: 'RegistrationPage',
  components: {
    PageRegistration
  }
}
</script>