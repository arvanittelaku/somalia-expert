import type { FAQ } from "@/lib/schema";

export type Region = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  relatedProfiles: string[];
};

export const regions: Region[] = [
  {
    slug: "mogadishu-return",
    title: "Mogadishu Return",
    metaTitle: "Mogadishu Return Expert Witness UK | MOJ Framework",
    metaDescription:
      "Mogadishu return expert witness for UK asylum tribunals. MOJ country guidance, clan support requirement, diaspora test, Al-Shabaab security, and July 2025 CPIN analysis.",
    h1: "Mogadishu Return Expert Witness UK | MOJ Framework",
    content: [
      "Return to Mogadishu is governed by MOJ and Others (Return to Mogadishu) Somalia CG [2014] UKUT 004442, which remains the leading country guidance case for Somali asylum appeals in the UK. The tribunal assesses whether an individual with a particular profile faces a real risk of Article 3 ill-treatment on return to Mogadishu, taking account of clan connections, economic means, personal profile, and current security conditions.",
      "The July 2025 Home Office CPIN on Mogadishu: Al-Shabaab and Security Situation confirms that the Federal Government of Somalia is willing but unable to provide effective protection from Al-Shabaab. Car bomb attacks, assassinations, and clan militia violence remain common. Many parts of the city are effectively controlled by clan militias rather than the government, and ordinary civilians face generalised insecurity even where they are not individually targeted.",
      "Expert witnesses applying the MOJ framework assess clan background and whether the appellant has connections in Mogadishu providing housing, employment, and security. The diaspora remittances test examines whether financial support from abroad can substitute for direct clan presence. Personal profiles including former government officials, journalists, and Al-Shabaab opponents require individual risk assessment beyond the general MOJ finding for ordinary civilians.",
    ],
    faqs: [
      {
        question: "Is Mogadishu safe for return?",
        answer:
          "Al-Shabaab carries out regular attacks in Mogadishu: car bombs and assassinations are common, government officials travel with armed escorts, and many parts of the city are effectively controlled by clan militias rather than the government. The July 2025 CPIN confirmed the state is willing but unable to protect from Al-Shabaab.",
      },
      {
        question: "What does the MOJ test require for Mogadishu return?",
        answer:
          "Under MOJ, the tribunal assesses: the individual's clan background and whether they have connections in Mogadishu; their economic status and ability to receive diaspora remittances; their personal profile (former government official, journalist, etc.); and current security conditions.",
      },
    ],
    relatedProfiles: ["failed-asylum-seekers-return", "diaspora-without-clan-support", "former-government-officials"],
  },
  {
    slug: "somaliland",
    title: "Somaliland",
    metaTitle: "Somaliland Expert Witness UK | Asylum & Return Analysis",
    metaDescription:
      "Somaliland expert witness for UK asylum tribunals. Separate legal framework from south/central Somalia, clan dynamics, security analysis, and internal relocation viability.",
    h1: "Somaliland Expert Witness UK | Asylum & Return Analysis",
    content: [
      "Somaliland, the self-declared republic in north-west Somalia, is assessed differently from south and central Somalia in UK asylum claims. It has a more stable political environment, a functioning government, and significantly lower Al-Shabaab presence than Mogadishu or the south. However, Somaliland is not formally recognised internationally, and specific profiles including clan minorities and political opponents face genuine risks.",
      "Expert witnesses provide Somaliland-specific analysis addressing the appellant's clan background (particularly Isaaq and other Somaliland clans), regional security conditions, state protection availability, and the viability of internal relocation to Somaliland from other parts of Somalia. The legal framework differs from MOJ: Somaliland claims require separate country guidance analysis rather than automatic application of the Mogadishu return framework.",
      "Internal relocation to Somaliland from south or central Somalia is generally not viable. Somaliland's immigration controls are strict for non-Somalilanders, clan connections are essential for settlement, and those without Isaaq or Somaliland clan backgrounds face significant barriers to obtaining housing, employment, and social protection.",
    ],
    faqs: [
      {
        question: "Is Somaliland treated differently from Somalia in asylum claims?",
        answer:
          "Yes. Somaliland (the self-declared republic in north-west Somalia) is assessed differently from south/central Somalia. It has a more stable political environment, a functioning government, and lower Al-Shabaab presence. However, it is not formally recognised and specific profiles (clan minorities, political opponents) face genuine risks. Expert witnesses provide Somaliland-specific analysis.",
      },
      {
        question: "Can someone from south Somalia be expected to relocate to Somaliland?",
        answer:
          "Internal relocation to Somaliland from south/central Somalia is generally not viable. Somaliland's immigration controls are strict for non-Somalilanders, clan connections are essential, and those without Isaaq or Somaliland clan backgrounds face significant barriers to settlement.",
      },
    ],
    relatedProfiles: ["clan-minority-groups", "women-discriminatory-practices"],
  },
  {
    slug: "puntland",
    title: "Puntland",
    metaTitle: "Puntland Expert Witness UK | Asylum & Security Analysis",
    metaDescription:
      "Puntland expert witness for UK asylum tribunals. Semi-autonomous status, Al-Shabaab and ISWAP-Somalia presence, Darood/Harti clan dynamics, and 2025-2026 security analysis.",
    h1: "Puntland Expert Witness UK | Asylum & Security Analysis",
    content: [
      "Puntland is a semi-autonomous region in north-east Somalia with its own government, security forces, and legal framework. It is generally more stable than south and central Somalia, but faces significant security challenges including increased Al-Shabaab and ISWAP-Somalia presence in recent years, ongoing clan violence, and piracy-related instability along the coast.",
      "Clan dynamics in Puntland are dominated by Darood/Harti sub-clans including Majerteen, Dhulbahante, and Warsangeli. Expert witnesses assess whether the appellant has clan connections in Puntland providing protection and economic subsistence, and whether their specific profile creates individual risk beyond generalised insecurity.",
      "Puntland may be a viable internal relocation alternative for some profiles, but requires clan connections in Puntland and economic means of subsistence. Those without Darood/Harti clan connections face particular difficulties, and the increasing Al-Shabaab presence must be addressed in any relocation analysis for 2025-2026 claims.",
    ],
    faqs: [
      {
        question: "What is the security situation in Puntland?",
        answer:
          "Puntland is semi-autonomous and generally more stable than south/central Somalia. However, Al-Shabaab and ISWAP-Somalia have increased their presence in Puntland in recent years, and clan violence remains a significant security challenge. Expert witnesses assess the current security situation and its implications for specific profiles.",
      },
      {
        question: "Is Puntland a viable internal relocation alternative?",
        answer:
          "Puntland may be a viable internal relocation alternative for some profiles, but requires clan connections in Puntland and economic means of subsistence. Those without Darood/Harti clan connections face particular difficulties and the increasing Al-Shabaab presence must be addressed in any relocation analysis.",
      },
    ],
    relatedProfiles: ["al-shabaab-targeting", "former-government-officials"],
  },
  {
    slug: "south-central-somalia",
    title: "South/Central Somalia",
    metaTitle: "South/Central Somalia Expert Witness UK | Asylum Analysis",
    metaDescription:
      "South and central Somalia expert witness for UK tribunals. Article 15(c) indiscriminate violence, Al-Shabaab territorial control 2025-2026, and internal displacement analysis.",
    h1: "South/Central Somalia Expert Witness UK | Asylum Analysis",
    content: [
      "South and central Somalia outside Mogadishu is governed by a different legal analysis from MOJ return claims: the Article 15(c) indiscriminate violence framework under the Qualification Directive. Al-Shabaab controls or contests large areas including lower Juba, Bay, Bakool, Middle Shabelle, and Lower Shabelle, with civilian casualty levels among the highest in the world.",
      "Al-Shabaab's renewed offensive through late 2025 into early 2026 has retaken territory previously considered liberated, significantly affecting Article 15(c) analysis for appellants from affected areas. Internal relocation to government-controlled areas in the south is less viable than in previous years, and expert witnesses must update their analysis to reflect current territorial control.",
      "Expert witnesses address both the general security situation under Article 15(c) and any individual risk factors specific to the appellant's profile and area of origin. This includes forced recruitment risk, clan minority vulnerability, gender-based persecution, and targeting by Al-Shabaab for perceived government association.",
    ],
    faqs: [
      {
        question: "Is there Article 15(c) risk in south/central Somalia?",
        answer:
          "Al-Shabaab's renewed offensive in southern Somalia through late 2025 has reversed earlier government gains, retaking territory previously considered liberated. This significantly affects Article 15(c) analysis for those from affected areas of south/central Somalia and undermines internal relocation arguments.",
      },
      {
        question: "How does south/central Somalia differ from Mogadishu in the asylum analysis?",
        answer:
          "South/central Somalia outside Mogadishu is governed by a different legal analysis: the Article 15(c) indiscriminate violence framework rather than the MOJ individual risk assessment. Expert witnesses address both the general security situation and any individual risk factors specific to the appellant's profile and area of origin.",
      },
    ],
    relatedProfiles: ["al-shabaab-targeting", "forced-recruitment-conscription", "clan-minority-groups"],
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
