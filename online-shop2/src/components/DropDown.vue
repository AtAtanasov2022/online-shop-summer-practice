<template>
    <div>
        <select class="dropdown" v-for="dropdown in dropDownOptions" v-model="dropdown.selectedOption" :key="dropdown.index">
            <option v-for="(option, index) in dropdown.options" :value="option" :key="index">{{option}}</option>
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
        width: 15%;
        border-color: rgb(1, 0, 2);
        border-radius: 10px;
        border-width: 2px;
    }
</style>