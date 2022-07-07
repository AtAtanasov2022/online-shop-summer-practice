<template>
    <div>
        <option v-for="(option, index, key) in options" :value="option" :key="key"></option>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: ["Dog", "Cat", "Elephant"]
        };
    }
}
</script>

<style>

</style>