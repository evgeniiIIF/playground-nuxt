<script lang="ts" setup>
import { usePartnersStore } from '@/store/partners';
import { useAboutStore } from '@/store/about';
import type { Partners } from '@/store/partners/partners.types';
import type { About } from '@/store/about/about.types';

const { aboutState, aboutEffects } = useAboutStore();
const { partnersState, partnersEffects } = usePartnersStore();

await useAsyncData('about', async () => {
  await Promise.all([
    Object.keys(aboutState.value.about).length === 0 && aboutEffects.fetchAbout(),
    aboutState.value.aboutSlider.length === 0 && aboutEffects.fetchAboutSlider(),
    aboutState.value.aboutCertificates.length === 0 && aboutEffects.fetchAboutCertificates(),
    Object.keys(partnersState.value.partners).length === 0 && partnersEffects.fetchPartners(),
    partnersState.value.items.length === 0 && partnersEffects.fetchPartnersItems(),
  ]);
});

const partners = partnersState.value.partners as Partners;
const about = aboutState.value.about as About;

const aboutWelcomeData = {
  title: about.title,
  subtitle: about.subtitle,
  slider: aboutState.value.aboutSlider,
};

const aboutInfoData = {
  title: about.title_text,
  description: about.text,
  linkText: about.link_text,
  linkUrl: about.link_url,
};

const partnersData = {
  title: partners.content?.title,
  subtitle: partners.content?.subtitle,
  items: partnersState.value.items,
};

const aboutCertificatesData = {
  title: about.certificates_title,
  subtitle: about.certificates_subtitle,
  certificates: aboutState.value.aboutCertificates,
};

const aboutGuaranteeData = {
  title: about.guarantee_title,
  description: about.guarantee_text,
};

const aboutPartnerData = {
  title: about.partnership_title,
  description: about.partnership_text,
  linkText: about.partnership_link_text,
  linkUrl: about.partnership_link_url,
  showBtn: about.show_btn,
  btnTitle: about.title_link,
};
</script>

<template>
  <div>
    <AboutWelcome v-if="about.is_active_slider" :about-welcome="aboutWelcomeData" />
    <AboutInfo v-if="about.is_active_text" :about-info="aboutInfoData" />
    <OurPartners v-if="about.is_active_partner" :partners="partnersData" />
    <AboutCertificates v-if="about.is_active_certificates" :about-certificates="aboutCertificatesData" />
    <AboutGuarantee v-if="about.is_active_guarantee" :about-guarantee="aboutGuaranteeData" />
    <AboutPartner v-if="about.is_active_partnership" :about-partner="aboutPartnerData" />
  </div>
</template>
