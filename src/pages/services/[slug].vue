<script lang="ts" setup>
import { useServiceStore } from '@/store/service';

const { slug } = useRoute().params;

const { serviceState, serviceEffects } = useServiceStore();

await useAsyncData('service', async () => {
  await Promise.all([serviceState.value.slug !== slug && serviceEffects.fetchService(slug as string)]);
});

const service = serviceState.value;
const examplesGallery = serviceState.value.gallery_origin;
</script>

<template>
  <div>
    <ServiceSection :service="service" />
    <ServiceExamples v-if="examplesGallery?.length" :gallery-items="examplesGallery" />
    <PopularServices
      v-if="service.additional_services?.length"
      :title="service.additional_title"
      :additional-services="service.additional_services"
    />
    <ServiceForm />
  </div>
</template>
