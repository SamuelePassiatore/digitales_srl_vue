<script>
import AppHeader from '../components/AppHeader.vue';
import AppJumbotron from '../components/AppJumbotron.vue';

export default {
    name: 'HomePage',
    components: { AppHeader, AppJumbotron },
};

</script>

<template>
    <div id="home">
        <AppHeader></AppHeader>
        <AppJumbotron></AppJumbotron>
    </div>
</template>

<style scoped lang="scss"></style>