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
    status: 'completed',
  },
  {
    id: 'swat',
    titleKey: 'edu_swat_title',
    schoolKey: 'edu_swat_school',
    periodKey: 'edu_swat_period',
    locationKey: 'edu_swat_location',
    descriptionKey: 'edu_swat_desc',
    noteKey: 'edu_swat_note',
    type: 'certificate',
    status: 'completed',
  },
];
