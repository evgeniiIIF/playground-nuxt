<script lang="ts" setup>
import { useServiceStore } from '~/store/service';
import { useServicesAllStore } from '~/store/servicesAll';

const { slug } = useRoute().params;

const { serviceState, serviceEffects } = useServiceStore();
const { servicesAllState, servicesAllEffects } = useServicesAllStore();

await serviceEffects.fetchService(slug as string);

if (!servicesAllState.value.servicesAllItems) {
  await servicesAllEffects.fetchServicesAll();
}

const service = serviceState.value;
const examplesGallery = serviceState.value.gallery_webp?.length
  ? serviceState.value.gallery_webp
  : serviceState.value.gallery_origin;

const services = servicesAllState.value.servicesAllItems;
const chooseServices = ref(servicesAllState.value.chooseServices);

watchEffect(() => {
  chooseServices.value = servicesAllState.value.chooseServices;
});

console.log(serviceState.value);
</script>

<template>
  <div>
    <ServiceSection :service="service" />
    <ServiceExamples :images="examplesGallery" />
    <PopularServices :title="service.additional_title" :additional-services="service.additional_services" />
    <ServiceForm :services="services" :choose-services="chooseServices" />
  </div>
</template>
