<script setup lang="ts">
import { useServicesAllStore } from '@/store/servicesAll';
import { useHomeStore } from '~/store/home';

const { servicesAllEffects, servicesAllState } = useServicesAllStore();
const { homeState, homeEffects } = useHomeStore();

await servicesAllEffects.fetchServicesAll();
await homeEffects.fetchHome();

const services = servicesAllState.value.servicesAllItems;
const home = homeState.value;

const bonusProgramData = {
  title: home.content?.bonus_title,
  subtitle: home.content?.bonus_subtitle,
  description: home.content?.bonus_description,
  showBtn: home.content?.bonus_show_btn,
  titleLink: home.content?.bonus_title_link,
  urlLink: home.content?.bonus_url_link,
};

const aboutCompanyData = {
  title: home.content?.about_title,
  description: home.content?.about_dsc,
  titleLink: home.content?.about_title_link,
  urlLink: home.content?.about_link,
};
</script>

<template>
  <div>
    <WelcomeSlider />
    <RepairCalculation />
    <BonusProgram v-if="home.content?.is_active_bonus_program" :bonus="bonusProgramData" />
    <AutoServices :services="services" />
    <OurPartners />
    <AboutCompany v-if="home.content?.is_active_about_company" :about-company="aboutCompanyData" />
    <ClientsReviews />
    <ServiceForm />
    <AutoBrands />
  </div>
</template>

<style lang="scss"></style>
