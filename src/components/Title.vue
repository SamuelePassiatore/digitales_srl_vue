<script>
import { store } from '../assets/data/store';

export default {
    name: "Title",
    props: {
        index: Number,
    },
    data() {
        return {
            titles: store.titles,
        };
    },
};
</script>

<template>
    <div class="mb-5">
        <h5 class="text-uppercase text-center">{{ titles[index].over_title }}</h5>
        <h2>{{ titles[index].title }}</h2>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

h5 {
    font-size: 20px;
}

h2 {
    font-size: 46px;
    color: $dark-blue;
}
</style>