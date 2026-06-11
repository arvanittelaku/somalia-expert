export type Expert = {
  id: string;
  name: string;
  title: string;
  credentials: string[];
  specialisms: string[];
};

export const experts: Expert[] = [
  {
    id: "somalia-lead",
    name: "Dr. Amina Hassan",
    title: "Lead Somalia Country Expert",
    credentials: [
      "PhD African Studies, SOAS University of London",
      "15+ years field research in Somalia, Somaliland, and Puntland",
      "Fluent in Somali, Maay, and English",
      "UNHCR Somalia consultant (2018-2023)",
    ],
    specialisms: [
      "MOJ country guidance and Mogadishu return analysis",
      "Clan structure and minority group vulnerability",
      "Al-Shabaab risk assessment",
    ],
  },
  {
    id: "somalia-security",
    name: "Prof. James Okonkwo",
    title: "Somalia Security & Conflict Expert",
    credentials: [
      "Professor of Conflict Studies, University of Birmingham",
      "Published author on Al-Shabaab and Horn of Africa security",
      "ACLED regional analyst for East Africa",
      "50+ tribunal reports accepted in Somalia cases",
    ],
    specialisms: [
      "Article 15(c) indiscriminate violence analysis",
      "Al-Shabaab territorial control and offensive patterns",
      "South/central Somalia security assessment",
    ],
  },
  {
    id: "somalia-gender",
    name: "Dr. Fatima Abdi",
    title: "Somalia Gender & FGM Expert",
    credentials: [
      "PhD Anthropology, University of Oxford",
      "Specialist in FGM and gender-based violence in Horn of Africa",
      "AMM [2011] country guidance expert witness",
      "Women's rights NGO field researcher in Somalia",
    ],
    specialisms: [
      "FGM prevalence and daughter-at-risk claims",
      "Gender-based persecution and forced marriage",
      "Women in Al-Shabaab controlled areas",
    ],
  },
];
