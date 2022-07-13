<template>
  <div class="registration">
    <PageRegistration></PageRegistration>
    <ButtonsComp>Registration</ButtonsComp>
    <FormComponent
        :placehold=text 
    ></FormComponent>
    <DropDown></DropDown>
    <CheckBox></CheckBox>
  </div>
</template>

<script>
// @ is an alias to /src
import PageRegistration from '@/components/PageRegistration.vue'
import ButtonsComp from "../components/ButtonsComp.vue";
import FormComponent from "../components/FormComponent.vue";
import DropDown from "../components/DropDown.vue";
import CheckBox from "../components/CheckboxComp.vue";

export default {
  name: 'RegistrationPage',
  components: {
    PageRegistration,
    ButtonsComp,
    FormComponent,
    DropDown,
    CheckBox
  },

  data() {
    return {
        text: "Hello There!",
    }
  }
}
</script>