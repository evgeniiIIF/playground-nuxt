<script setup lang="ts">
import { useServicesAllStore } from '@/store/servicesAll';
import { useHomeStore } from '@/store/home';
import { usePartnersStore } from '@/store/partners';
import { useWelcomeStore } from '@/store/welcome';
import { useCarsStore } from '@/store/cars';
import { useHomeAboutSliderStore } from '@/store/homeAboutSlider';
import { useAdvantagesStore } from '@/store/advantages';
import type { Partners } from '@/store/partners/partners.types';

const { homeState, homeEffects } = useHomeStore();
const { carsState, carsEffects } = useCarsStore();
const { servicesAllEffects, servicesAllState } = useServicesAllStore();
const { partnersState, partnersEffects } = usePartnersStore();
const { welcomeState, welcomeEffects } = useWelcomeStore();
const { homeAboutSliderState, homeAboutSliderEffects } = useHomeAboutSliderStore();
const { advantagesState, advantagesEffects } = useAdvantagesStore();

await useAsyncData('home', async () => {
  await Promise.all([
    Object.keys(homeState.value).length === 0 && homeEffects.fetchHome(),
    welcomeState.value.length === 0 && welcomeEffects.fetchWelcome(),
    Object.keys(carsState.value).length === 0 && carsEffects.fetchCars(),
    servicesAllState.value.servicesAllItems.length === 0 && servicesAllEffects.fetchServicesAll(),
    Object.keys(partnersState.value.partners).length === 0 && partnersEffects.fetchPartners(),
    partnersState.value.items.length === 0 && partnersEffects.fetchPartnersItems(),
    homeAboutSliderState.value.length === 0 && homeAboutSliderEffects.fetchHomeAboutSlider(),
    advantagesState.value.length === 0 && advantagesEffects.fetchadvantagesItems(),
  ]);
});

const home = homeState.value;
const welcomeSlides = welcomeState.value;
const cars = carsState.value;
const services = servicesAllState.value.servicesAllItems;
const partners = partnersState.value.partners as Partners;
const partnersItems = partnersState.value.items;
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
  items: partnersItems,
};
</script>

<template>
  <div>
    <WelcomeSlider v-if="Number(home.content?.is_active_welcome) === 1" :slides="welcomeSlides" />
    <CarService />
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
    <ServiceForm v-if="Number(home.content?.is_active_open_leadform) === 1" />
    <AutoBrands v-if="Number(home.content?.is_active_marquee_brands) === 1" />
  </div>
</template>

<style lang="scss"></style>
