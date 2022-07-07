<template>
  <div class="registration">
    <PageRegistration></PageRegistration>
    <ButtonsComp>Registration</ButtonsComp>
    <InputComp></InputComp>
  </div>
</template>

<script>
// @ is an alias to /src
import PageRegistration from '@/components/PageRegistration.vue'
import ButtonsComp from "../components/ButtonsComp.vue";
import InputComp from "../components/InputComp.vue";

export default {
  name: 'RegistrationPage',
  components: {
    PageRegistration,
    ButtonsComp,
    InputComp
  }
}
</script>