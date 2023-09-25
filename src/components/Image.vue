<script>
import { store } from '../assets/data/store';

export default {
    name: "Image",
    props: {
        index: Number
    },
    data() {
        return {
            images: store.images,
        };
    }
};
</script>

<template>
    <div class="container d-flex">
        <div>
            <img class="image w-100" :src="images[index].image">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>