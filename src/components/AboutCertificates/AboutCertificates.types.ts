import type { AboutCertificate } from '@/store/about/about.types';

export type AboutCertificates = {
  aboutCertificates: {
    title: string;
    subtitle: string;
    certificates: AboutCertificate[];
  };
};
