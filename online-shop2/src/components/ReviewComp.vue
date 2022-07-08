<template>
    <div>
        <p>Userame: {{review.username}}</p>
        <p>Userame: {{review.title}}</p>
        <p>Userame: {{review.body}}</p>
        <p>Userame: {{review.rating}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            review: {
                Type: Object,
                required: true
            }
        }
    }
</script>

<style>

</style>