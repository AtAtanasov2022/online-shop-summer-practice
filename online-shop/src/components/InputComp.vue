<template>
    <div class="input">
        <slot class="label">Label</slot> 
        <br>
        <input class="inputField" :type="inputType" v-model="userInput" @input="sendInput" :placeholder="[[placehold]]" style="color=black;">
    </div>
</template>

<script>
    export default {
        props: {
            fieldRequired: {
                type: Boolean,
                required: true
            },

            placehold: {
                type: String,
                required: false,
                default: "Input"
            },

            inputType: { 
                type: String,
                required: false,
                default: "text"
            }
        },

        data() {
            return {
                userInput: '',
            }
        },

        methods: {
            sendInput() {
                console.log(this.userInput);
                return this.$emit('sended-input', this.userInput);
            }
        }
    }

</script>

<style scoped>
    .input {
        margin-left: 45%;
        width: 10%;
        margin-top: 5px;
        border-color: rgb(1, 0, 2);
        border-radius: 10px;
        border-width: 2px;
        background-color: rgb(81, 103, 245);
        color:rgb(128, 226, 16);
    }

    .inputField {
        width: 70%;
        margin-top: 1px;
        border-color: rgb(1, 0, 2);
        border-radius: 10px;
        border-width: 2px;
        background-color: rgb(81, 103, 245);
    }

    ::placeholder {
        color: black;
    }

    .label {
        margin-top: 50px;
        border-color: rgb(1, 0, 2);
        border-radius: 10px;
        border-width: 2px;
    }
</style>
