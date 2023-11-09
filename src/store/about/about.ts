import { ref } from 'vue';
import { defineStore } from 'pinia';
import { aboutHttp } from '@/api/http/aboutHttp/aboutHttp';
import type { About, AboutCertificate, AboutSlide, AboutStore } from '@/store/about/about.types';

const DEFAULT_STATE: AboutStore = {
  about: {},
  aboutSlider: [],
  aboutCertificates: [],
};

export const aboutStore = defineStore('aboutStore', () => {
  const state = ref(DEFAULT_STATE);

  const setAbout = (data: About | {}) => {
    state.value.about = data;
  };

  const setAboutSlider = (data: AboutSlide[] | []) => {
    state.value.aboutSlider = data;
  };

  const setAboutCertificates = (data: AboutCertificate[] | []) => {
    state.value.aboutCertificates = data;
  };

  const fetchAbout = async () => {
    try {
      const { data } = await aboutHttp.fetchAbout();

      setAbout(data.value?.data ?? {});
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAboutSlider = async () => {
    try {
      const { data } = await aboutHttp.fetchAboutSlider();

      setAboutSlider(data.value ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAboutCertificates = async () => {
    try {
      const { data } = await aboutHttp.fetchAboutCertificates();

      setAboutCertificates(data.value ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchAbout,
      fetchAboutSlider,
      fetchAboutCertificates,
    },
  };
});
