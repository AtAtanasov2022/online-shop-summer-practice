<template>
  <Loader v-if="!isLoaded"></Loader>
  <div class="form" v-else>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="Name"
          rules="required|max:100"
        >
          <v-text-field
            v-model="name"
            :counter="50"
            :error-messages="errors"
            label="Username"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="First name"
          rules="required|max:100"
        >
          <v-text-field
            v-if="registrationPage"
            v-model="firstName"
            :counter="100"
            :error-messages="errors"
            label="First name"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="Last name"
          rules="required|max:100"
        >
          <v-text-field
            v-if="registrationPage"
            v-model="lastName"
            :counter="100"
            :error-messages="errors"
            label="Last name"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-if="registrationPage"
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
          >
          </v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="Password"
          rules="required|max:100"
        >
          <v-text-field
            type="password"
            v-model="pass"
            :counter="100"
            :error-messages="errors"
            label="Password"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-if="registrationPage"
          v-slot="{ errors }"
          name="Repeat password"
          rules="required|max:100"
        >
          <v-text-field
            type="password"
            v-model="pass2"
            :counter="100"
            :error-messages="errors"
            label="Repeat password"
            required
          ></v-text-field>
        </validation-provider>

        <!--
      <validation-provider
        v-slot="{ errors }"
        name="select"
        rules="required"
      >
        <v-select
          v-model="select"
          :items="items"
          :error-messages="errors"
          label="Select"
          data-vv-name="select"
          required
        ></v-select>
      </validation-provider>
      -->
        <validation-provider v-slot="{ errors }" name="checkbox">
          <v-checkbox
            v-if="!registrationPage"
            v-model="checkbox"
            :error-messages="errors"
            value="1"
            label="Remember me"
            type="checkbox"
          ></v-checkbox>
        </validation-provider>

        <validation-provider v-slot="{ errors }" name="checkbox2">
          <v-checkbox
            v-if="registrationPage"
            v-model="checkbox2"
            :error-messages="errors"
            value="1"
            label="Accept T&C"
            type="checkbox"
          ></v-checkbox>
        </validation-provider>

        <v-btn v-if="!registrationPage" class="mr-4" type="submit">
          Login
        </v-btn>

        <v-btn
          v-if="registrationPage"
          class="mr-4"
          @click="registration"
          :disabled="invalid"
        >
          Register
        </v-btn>

        <v-btn @click="clear"> clear </v-btn>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import store from "@/store";
import Loader from "../components/LoaderComponent.vue";

setInteractionMode("eager");
extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});
extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});
extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});
extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});
extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    Loader
  },
  props: {
    registrationPage: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data: () => ({
    name: "",
    pass: "",
    pass2: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
    checkbox2: null,
    isLoaded: false
  }),

  mounted() {
    setTimeout(() => {  this.isLoaded = true; }, 800);
  },

  methods: {
    submit() {
      // this.$refs.observer.validate()
      const userInfo = {
        username: this.name,
        password: this.pass,
      };
      store.dispatch("authUser", userInfo);
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },

    registration() {
      if (this.pass === this.pass2 && this.pass != "") {
        const userInfo = {
          username: this.name,
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.pass,
        };
        store.dispatch("signUpUser", userInfo);
      } else console.log("WRONG PASS");
    },
  },
};
</script>

<style scoped>
.form {
  /* border-radius: 5%;
  margin-top: 7%;
  height: 70%;
  width: 30%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 5%; */
  margin: auto;
  width: 35%;
  margin-top: 50px;
}

@media (max-width: 360px) and (max-height: 740px) {
  .form {
    margin: auto;
    width: 60%;
    margin-top: 40px;
  }
}
</style>
