<script setup lang="ts">
import { useServicesAllStore } from '@/store/servicesAll';
import { useHomeStore } from '@/store/home';
import { usePartnersStore } from '@/store/partners';
import { useWelcomeStore } from '@/store/welcome';
import { useCarsStore } from '@/store/cars';
import { useHomeAboutSliderStore } from '~/store/homeAboutSlider';

const { homeState, homeEffects } = useHomeStore();
const { carsState, carsEffects } = useCarsStore();
const { servicesAllEffects, servicesAllState } = useServicesAllStore();
const { partnersState, partnersEffects } = usePartnersStore();
const { welcomeState, welcomeEffects } = useWelcomeStore();
const { homeAboutSliderState, homeAboutSliderEffects } = useHomeAboutSliderStore();

await homeEffects.fetchHome();
await welcomeEffects.fetchWelcome();
await carsEffects.fetchCars();
await servicesAllEffects.fetchServicesAll();
await partnersEffects.fetchPartners();
await partnersEffects.fetchPartnersItems();
await homeAboutSliderEffects.fetchHomeAboutSlider();

const home = homeState.value;
const welcomeSlides = welcomeState.value;
const cars = carsState.value;
const services = servicesAllState.value.servicesAllItems;
const partners = partnersState.value;
const companySlider = homeAboutSliderState.value;
const chooseServices = ref(servicesAllState.value.chooseServices);

watchEffect(() => {
  chooseServices.value = servicesAllState.value.chooseServices;
});

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

const partnersData = {
  title: partners.content?.title,
  subtitle: partners.content?.subtitle,
  items: partners.items,
};
</script>

<template>
  <div>
    <WelcomeSlider v-if="Number(home.content?.is_active_welcome) === 1" :slides="welcomeSlides" />
    <RepairCalculation
      v-if="Number(home.content?.is_active_calculator) === 1"
      :cars="cars"
      :services="services"
      :choose-services="chooseServices"
    />
    <BonusProgram v-if="Number(home.content?.is_active_bonus_program) === 1" :bonus="bonusProgramData" />
    <AutoServices v-if="Number(home.content?.is_active_services) === 1" :services="services" />
    <OurPartners v-if="Number(partners.content?.is_active) === 1" :partners="partnersData" />
    <AboutCompany
      v-if="Number(home.content?.is_active_about_company) === 1"
      :company="aboutCompanyData"
      :company-slider="companySlider"
    />
    <ClientsReviews v-if="Number(home.content?.is_active_reviews) === 1" />
    <ServiceForm
      v-if="Number(home.content?.is_active_open_leadform) === 1"
      :services="services"
      :choose-services="chooseServices"
    />
    <AutoBrands v-if="Number(home.content?.is_active_marquee_brands) === 1" />
  </div>
</template>

<style lang="scss"></style>
