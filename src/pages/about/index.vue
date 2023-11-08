<script lang="ts" setup>
import { usePartnersStore } from '@/store/partners';
import type { Partners } from '@/store/partners/partners.types';

const { partnersState, partnersEffects } = usePartnersStore();

if (partnersState.value) {
  await partnersEffects.fetchPartners();
  await partnersEffects.fetchPartnersItems();
}

const partners = partnersState.value.partners as Partners;

const partnersData = {
  title: partners.content?.title,
  subtitle: partners.content?.subtitle,
  items: partnersState.value.items,
};
</script>

<template>
  <div>
    <AboutWelcome />
    <AboutInfo />
    <OurPartners v-if="Number(partners.content?.is_active) === 1" :partners="partnersData" />
    <AboutCertificates />
    <AboutGuarantee />
    <AboutPartner />
  </div>
</template>
