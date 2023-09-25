<script>
import Image from '../components/Image.vue';
import Paragraph from '../components/Paragraph.vue';
import Button from '../components/Button.vue';

export default {
    name: 'ContactPage',
    components: { Image, Paragraph, Button },
};

</script>

<template>
    <div id="contatti" class="d-flex container py-5 section-contact">
        <Paragraph :index="2">
            <div class="d-flex inputs">
                <input type="text" placeholder="Nome">
                <input type="email" placeholder="Email">
                <input type="phone" placeholder="Phone">
            </div>
            <textarea name="" id="" cols="15" rows="5" placeholder="Messaggio"></textarea>
            <Button class="mt-4" :color="$dark - blue"></Button>
        </Paragraph>
        <Image :index="2"></Image>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

.section-contact {

    input,
    textarea {
        padding: 7px 20px;
        border: 0;
        border-bottom: 1px solid $dark-blue;
        border-width: 0px 0px 1px 0px;
        border-radius: 10px 10px 10px 10px;
        margin: 10px 10px 0 0;

        &:focus {
            outline: none;
        }
    }

}
</style>

