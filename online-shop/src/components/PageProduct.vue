<template>
    <div>
        <p>Name: {{product.name}}</p>
        <p>Price: {{product.price}}</p>
        <p>Category: {{product.category}}</p>
        <p>Description: {{product.description}}</p>
        <p>Manufacturer: {{product.manufacturer}}</p>
        <!--<p>Image: {{product.image}}</p> Just a reminder--> 
        <p>Shipping info: {{product.shippingInfo}}</p>
        <p>Availability: {{product.availability}}</p>
        <p>Customer rating: {{product.rating}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            product: {
                Type: Object,
                required: true
            }
        }
    }
</script>

<style>

</style>