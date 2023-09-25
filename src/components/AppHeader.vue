<script>
export default {
    name: "AppHeader",
    data() {
        return {

        }
    }
};
</script>

<template>
    <div class="container">
        <header class="d-flex align-items-center justify-content-between px-2">
            <div class="logo">
                <a href="">
                    <img src="../../public/img/SMALL-CUTTED-DigiTales-Logo-Def-3.png" alt="logo">
                </a>
            </div>
            <div class="links text-decoration-none">
                <a href="#home">home</a>
                <a href="#competenze">competenze</a>
                <a href="#servizi">servizi</a>
                <a href="#contatti">contatti</a>
            </div>
            <div class="icons d-flex">
                <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                <a href="#"><i class="fa-solid fa-bars"></i></a>
            </div>
        </header>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
    height: 85px;

    a {
        color: $dark-blue;
        text-decoration: none;

        &:hover {
            color: $light-blue;
        }
    }

    .links a {
        font-size: 18px;
        padding: 0 20px;
    }

    .icons i {
        font-size: 18px;
        padding: 15px;
        color: $dark-blue;
    }
}
</style>