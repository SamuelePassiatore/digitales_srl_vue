<script>
import Title from '../components/Title.vue';
import Card from '../components/Card.vue';
import Image from '../components/Image.vue';
import Paragraph from '../components/Paragraph.vue';
import Button from '../components/Button.vue';

export default {
    name: 'SkillsPage',
    components: { Title, Card, Image, Paragraph, Button },
};

</script>

<template>
    <div id="competenze" class="py-5 container d-flex align-items-center flex-column">
        <Title :index="0"></Title>
        <Card></Card>
        <div class="d-flex mt-5">
            <Image :index="1"></Image>
            <Paragraph :index="1">
                <Button></Button>
            </Paragraph>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>