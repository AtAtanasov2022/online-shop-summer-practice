<template>
    <div class="registration">
        <p>You're on the registration page!</p>
        <ButtonsComp>Registration</ButtonsComp>
        <InputComp
            :placehold=text 
        ></InputComp>
        <DropDown></DropDown>
        <CheckBox></CheckBox>
    </div>
</template>

<script>
import PageRegistration from '@/components/PageRegistration.vue'
import ButtonsComp from "../components/ButtonsComp.vue";
import InputComp from "../components/InputComp.vue";
import DropDown from "../components/DropDown.vue";
import CheckBox from "../components/CheckboxComp.vue";

export default {  
  name: 'PageRegistration',

  components: {
    PageRegistration,
    ButtonsComp,
    InputComp,
    DropDown,
    CheckBox
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>