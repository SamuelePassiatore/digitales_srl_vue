<script>
export default {
    name: "AppFooter",
    data() {
        return {

        }
    }
};
</script>

<template>
    <footer class="d-flex justify-content-between px-3 py-3">
        <div class="logo d-flex align-items-start">
            <a href="">
                <img src="../../public/img/SMALL-CUTTED-DigiTales-Logo-Def-3.png" alt="logo">
            </a>
        </div>
        <div class="links text-decoration-none d-flex">
            <a href="#">home</a>
            <a href="#">competenze</a>
            <a href="#">servizi</a>
            <a href="#">contatti</a>
        </div>
        <div class="d-flex flex-column">
            <div class="data_company mb-4">
                <p>DIGITALES SRL</p>
                <p>Piazza E.Bottini, 4</p>
                <p>20133 Milano</p>
                <p>P.IVA 12201490963</p>
            </div>
            <div class="other_data_company">
                <p>Tel. +39 02 99220001</p>
                <p>Mail. info@digitales.srl</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

footer {
    min-height: 250px;
    background-color: $light-grey;
    color: $dark-blue;
    padding: 10px 0;

    a {
        color: $dark-blue;
        text-decoration: none;

        &:hover {
            color: $light-blue;
        }
    }

    .links a {
        font-size: 20px;
        padding: 0 20px;
    }

    .data_company p,
    .other_data_company p {
        margin: 0;
        font-size: 16px;
    }
}
</style>