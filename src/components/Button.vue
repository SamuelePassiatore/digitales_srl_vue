<script>

export default {
    name: "Button",
    props: {
        color: String
    },
    data() {
        return {

        };
    },
};
</script>

<template>
    <div>
        <button :style="`background-color: ${color}`">Contattaci</button>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

button {
    font-size: 14px;
    color: $white;
    font-weight: 400;
    text-transform: capitalize;
    text-decoration: none;
    background-image: linear-gradient(100deg, $blue-dark-button 0%, $blue-light-button 100%);
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: $blue-light-button;
    border-radius: 100px 100px 100px 100px;
    padding: 15px 35px 15px 35px;
}
</style>