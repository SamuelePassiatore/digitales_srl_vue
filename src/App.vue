<script>
import HomePage from './pages/HomePage.vue';
import SkillsPage from './pages/SkillsPage.vue';
import ServicePage from './pages/ServicePage.vue';
import ContactPage from './pages/ContactPage.vue';
import LicensePage from './pages/LicensePage.vue';
import FooterPage from './pages/FooterPage.vue';

export default {
  name: 'Boolfolio',
  components: { HomePage, SkillsPage, ServicePage, ContactPage, LicensePage, FooterPage },
};

</script>

<template>
  <HomePage></HomePage>
  <SkillsPage></SkillsPage>
  <ServicePage></ServicePage>
  <ContactPage></ContactPage>
  <LicensePage></LicensePage>
  <FooterPage></FooterPage>
</template>

<style>
body {
  font-family: 'Nunito Variable', sans-serif;
}
</style>
