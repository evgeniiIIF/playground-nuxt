<script lang="ts" setup>
  import { usePartnersStore } from "@/store/partners";

  const { partnersState, partnersEffects } = usePartnersStore();

  if (partnersState.value) {
    await partnersEffects.fetchPartners();
    await partnersEffects.fetchPartnersItems();
  }

  const partners = partnersState.value;

  const partnersData = {
    title: partners.content?.title,
    subtitle: partners.content?.subtitle,
    items: partners.items,
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
