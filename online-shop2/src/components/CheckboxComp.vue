<template>
    <div class="checkbox">
        <slot>Checkbox here</slot> 
        <br>
        <input type="checkbox" id="rememberme">
        <label for="rememberme">{{labelText}}</label>
    </div>
</template>

<script>
export default {
    props: {
        labelText: {
            type: String,
            required: false,
            default: "Remember me"
        }
    },

    data() {
        return {
        };
    }
}
</script>

<style scoped>
    .checkbox{
        margin-left: 40%;
        width: 20%;
        margin-top: 5px;
        border-color: rgb(1, 0, 2);
        border-radius: 10px;
        border-width: 2px;
        background-color: rgb(81, 103, 245);
        color:rgb(128, 226, 16);
    }
    
</style>