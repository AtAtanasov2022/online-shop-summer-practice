<template>
    <div>
        <select class="dropdown" v-for="(dropDownOption, index, key) in dropDownOptions" v-model="dropDownOption.selectedOption" :key="key">
            <option v-for="(option, index, key) in options" :value="option" :key="key"></option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dropDownOptions: [
                {
                    options: ["Dog", "Cat", "Elephant"],
                    selectedOption: "Dog"
                }
            ]
        };
    }
}
</script>

<style>
    .dropdown{
        margin-top: 10px;
        width: 5%;
        border-color: rgb(1, 0, 2);
        border-radius: 10px;
        border-width: 2px;
    }
</style>