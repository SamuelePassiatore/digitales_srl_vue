<script>
import { store } from '../assets/data/store';

export default {
    name: "Card",
    props: {
        index: Number,
    },
    data() {
        return {
            cards: store.cards,
        };
    },
};
</script>

<template>
    <div class="row">
        <div class="col-4" v-for="(card, index) in cards" :key="index">
            <div class="card d-flex flex-column align-items-center">
                <img :src="card.image" alt="Card Image">
                <h3>{{ card.title }}</h3>
                <p>{{ card.content }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.card {
    background-color: $grey;
    border-radius: 30px;
    min-height: 300px;
    padding: 60px;
    border: 0;
}
</style>