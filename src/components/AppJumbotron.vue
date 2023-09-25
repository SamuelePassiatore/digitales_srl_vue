<script>
import Paragraph from '../components/Paragraph.vue';
import Image from '../components/Image.vue';
import Button from '../components/Button.vue';


export default {
    name: "AppJumbotron",
    components: { Paragraph, Image, Button },
    data() {
        return {

        }
    }
};
</script>

<template>
    <div class="pt-5 container d-flex">
        <Paragraph :index="0">
            <Button></Button>
        </Paragraph>
        <Image :index="0"></Image>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>