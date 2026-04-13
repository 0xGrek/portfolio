export interface Education {
  id: string;
  titleKey: string;
  schoolKey: string;
  periodKey: string;
  locationKey: string;
  descriptionKey: string;
  noteKey?: string;
  type: 'degree' | 'certificate';
  status: 'completed' | 'pending' | 'in-progress';
}

export const education: Education[] = [
  {
    id: 'lyceum',
    titleKey: 'edu_lyceum_title',
    schoolKey: 'edu_lyceum_school',
    periodKey: 'edu_lyceum_period',
    locationKey: 'edu_lyceum_location',
    descriptionKey: 'edu_lyceum_desc',
    type: 'degree',
    status: 'completed',
  },
  {
    id: 'law',
    titleKey: 'edu_law_title',
    schoolKey: 'edu_law_school',
    periodKey: 'edu_law_period',
    locationKey: 'edu_law_location',
    descriptionKey: 'edu_law_desc',
    type: 'degree',
    status: 'completed',
  },
  {
    id: 'econ',
    titleKey: 'edu_econ_title',
    schoolKey: 'edu_econ_school',
    periodKey: 'edu_econ_period',
    locationKey: 'edu_econ_location',
    descriptionKey: 'edu_econ_desc',
    type: 'degree',
    status: 'in-progress',
  },
  {
    id: 'cert',
    titleKey: 'edu_cert_title',
    schoolKey: 'edu_cert_school',
    periodKey: 'edu_cert_period',
    locationKey: 'edu_cert_location',
    descriptionKey: 'edu_cert_desc',
    type: 'certificate',
    status: 'completed',
  },
  {
    id: 'portuguese-a2',
    titleKey: 'edu_pt_a2_title',
    schoolKey: 'edu_pt_a2_institution',
    periodKey: 'edu_pt_a2_period',
    locationKey: 'edu_pt_a2_location',
    descriptionKey: 'edu_pt_a2_desc',
    type: 'certificate',
    status: 'completed',
  },
];
