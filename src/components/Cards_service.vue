<script>
import { store } from '../assets/data/store';

export default {
    name: "Cards_Service",
    props: {
        index: Number,
    },
    data() {
        return {
            cards_service: store.cards_service,
        };
    },
};
</script>

<template>
    <div class="row">
        <div class="col-4" v-for="(card, index) in cards_service" :key="index">
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
    height: 300px;
    background-color: transparent;
    border: 0;
    padding: 20px;

    img {
        width: 40%;
    }
}
</style>