<script>
import Title from '../components/Title.vue';
import Cards_Service from '../components/Cards_service.vue';

export default {
    name: "ServicePage",
    components: { Title, Cards_Service },
    data() {
        return {

        }
    }
};
</script>

<template>
    <div id="servizi" class="section-service pt-2 d-flex align-items-center flex-column">
        <Title :index="1"></Title>
        <div class="container">
            <Cards_Service></Cards_Service>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.section-service {
    min-height: 200px;
    background-color: $light-grey;
}
</style>