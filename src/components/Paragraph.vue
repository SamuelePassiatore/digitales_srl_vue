<script>
import { store } from '../assets/data/store';

export default {
    name: "Paragraph",
    props: {
        index: Number
    },
    data() {
        return {
            paragraphs: store.paragraphs,
        };
    }
};
</script>

<template>
    <div class="container d-flex">
        <div class="d-flex flex-column justify-content-center">
            <p class="over_title">{{ paragraphs[index].over_title }}</p>
            <h2 class="title">{{ paragraphs[index].title }}</h2>
            <p class="subtitle">{{ paragraphs[index].subtitle }}</p>
            <p class="content">{{ paragraphs[index].content }}</p>
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.over_title {
    font-size: 25px;
}

.title {
    font-size: 65px;
    color: $dark-blue;
    font-weight: 700;
}

.subtitle {
    font-size: 20px;
}

.content {
    font-size: 16px;
}
</style>