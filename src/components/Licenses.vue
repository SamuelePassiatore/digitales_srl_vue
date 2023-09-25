<script>
import { store } from '../assets/data/store';

export default {
    name: "Licenses",
    data() {
        return {
            licenses: store.licenses,
            currentIndex: 0,
        };
    },
    methods: {
        setCurrentIndex(index) {
            this.currentIndex = index;
        },
    },
    computed: {
        visibleLicenses() {
            const slicedLicense = this.licenses.slice(this.currentIndex, this.currentIndex + 4);
            return slicedLicense;
        }
    },
};
</script>

<template>
    <div class="licenses-row mt-5">
        <div class="license-col" v-for="(license, index) in visibleLicenses" :key="index">
            <div class="card d-flex flex-column align-items-center border border-0">
                <img :src="license.image" alt="Card Image">
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center mt-2 mb-4">
        <span class="dot" v-for="(license, index) in visibleLicenses" :key="index"
            :class="{ 'current-dot': index === currentIndex }" @click="setCurrentIndex(index)"></span>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.licenses-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.license-col {
    width: 25%;
}

.card {
    img {
        width: 80%;
    }
}

.dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: $grey;
    margin: 0 5px;
    cursor: pointer;
}

.current-dot {
    background-color: $black;
}
</style>