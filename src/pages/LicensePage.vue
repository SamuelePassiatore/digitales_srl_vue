<script>
import Licenses from '../components/Licenses.vue';
import { store } from '../assets/data/store';

export default {
    name: 'LicensePage',
    components: { Licenses },
    data() {
        return {
        }
    },
};

</script>

<template>
    <Licenses></Licenses>
    <div>

    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
</style>