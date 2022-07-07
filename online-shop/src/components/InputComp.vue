<template>
    <div class="input">
        <slot class="label">Label</slot> 
        <br>
        <input class="inputField" v-model="userInput" @input="sendInput">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userInput: '',
            }
        },

        methods: {
            sendInput() {
                return this.$emit('sended-input', this.sendInput);
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
        color:rgb(128, 226, 16);
    }

    .label {
        margin-top: 50px;
        border-color: rgb(1, 0, 2);
        border-radius: 10px;
        border-width: 2px;
    }
</style>
