<template>
  <div class="registration">
    <PageRegistration></PageRegistration>
    <ButtonsComp>Registration</ButtonsComp>
    <InputComp
        :placehold=text 
    ></InputComp>
    <DropDown></DropDown>
    
  </div>
</template>

<script>
// @ is an alias to /src
import PageRegistration from '@/components/PageRegistration.vue'
import ButtonsComp from "../components/ButtonsComp.vue";
import InputComp from "../components/InputComp.vue";
import DropDown from "../components/DropDown.vue";

export default {
  name: 'RegistrationPage',
  components: {
    PageRegistration,
    ButtonsComp,
    InputComp,
    DropDown
  },

  data() {
    return {
        text: "Hello There!"
    }
  }
}
</script>