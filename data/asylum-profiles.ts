import type { FAQ } from "@/lib/schema";

export type AsylumProfile = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  relatedCaseTypes: string[];
};

export const asylumProfiles: AsylumProfile[] = [
  {
    slug: "clan-minority-groups",
    title: "Clan Minority Groups",
    metaTitle: "Clan Minority Groups Expert Witness UK | Somalia Asylum",
    metaDescription:
      "Clan minority expert witness for Somalia asylum claims in UK tribunals. Benadiri, Gosha, Bantu, Gaboye/Madhiban vulnerability, lack of clan protection, and Al-Shabaab risk.",
    h1: "Clan Minority Groups Expert Witness UK | Somalia Asylum",
    content: [
      "Somalia's social protection system is organised around clan membership. Major clans including Hawiye, Darod, Dir, and Rahanweyn provide protection to their members through clan militias, political connections, and economic networks. Minority groups lack this protection and face severe discrimination, exploitation, and violence without recourse to effective state or non-state protection.",
      "Clan minority groups include the Benadiri (Reer Hamar) of Mogadishu and coastal towns, the Gosha and Bantu communities of the Jubba and Shabelle river valleys, occupational caste groups (Gaboye/Madhiban), the Bajuni of the southern coast, and the Galgala and other smaller communities. These groups are particularly vulnerable to Al-Shabaab taxation, forced labour, and violence from majority clan members.",
      "Expert witnesses assess the specific vulnerability of the appellant's minority group in their region of origin, including whether they can access clan protection on return, whether internal relocation provides viable protection, and how MOJ country guidance applies where minority clans lack diaspora support networks in Mogadishu.",
    ],
    faqs: [
      {
        question: "Why are clan minority groups particularly vulnerable in Somalia?",
        answer:
          "Somalia's social protection system is organised around clan membership. Major clans provide protection to their members through clan militias and political connections. Minority groups including the Benadiri, Gosha, Bantu, and occupational caste groups (Gaboye/Madhiban) lack this protection and are vulnerable to exploitation, violence, and discrimination from majority clan members without recourse to any effective protection. Expert witnesses assess the specific vulnerability of the appellant's clan group in their region of origin.",
      },
      {
        question: "How does a Somalia expert witness assess clan membership?",
        answer:
          "Clan membership is assessed through a combination of factors: the appellant's claimed clan and sub-clan affiliation; their geographic origin (different regions have different clan distributions); their dialect and language; cultural and genealogical knowledge; and consistency with known patterns of clan displacement and settlement. Experienced Somalia experts can assess the plausibility of claimed clan identity.",
      },
    ],
    relatedCaseTypes: ["clan-minority-asylum", "ftt-asylum-appeal-somalia", "deportation-removal-somalia"],
  },
  {
    slug: "al-shabaab-targeting",
    title: "Al-Shabaab Targeting",
    metaTitle: "Al-Shabaab Targeting Expert Witness UK | Somalia Asylum",
    metaDescription:
      "Al-Shabaab targeting expert witness for UK asylum tribunals. Risk to government opponents, tax refusers, community leaders, and those perceived as supporting the Federal Government.",
    h1: "Al-Shabaab Targeting Expert Witness UK | Somalia Asylum",
    content: [
      "Al-Shabaab operates as a parallel government across large parts of south-central Somalia, enforcing its ideology through taxation, forced recruitment, and targeted violence against those perceived as opponents. Only people seen as supportive of the government or opposed to Al-Shabaab may be at risk of persecution: peace activists, community leaders, clan elders, electoral delegates, cooperative businesspeople, or those refusing to pay Al-Shabaab taxes.",
      "The July 2025 Home Office CPIN on Mogadishu: Al-Shabaab and Security Situation confirms that the Federal Government of Somalia is willing but unable to provide effective protection from Al-Shabaab. Former government officials, security personnel, judges, and prosecutors face particular targeting risk on return.",
      "Al-Shabaab's renewed offensive through late 2025 into early 2026 has retaken territory previously considered liberated, expanding the areas where Al-Shabaab can identify, track, and target individuals with prior government association or opposition history. Expert witnesses must update their analysis to reflect this evolving territorial control.",
    ],
    faqs: [
      {
        question: "What profiles are at risk from Al-Shabaab in Somalia?",
        answer:
          "Al-Shabaab targets those perceived as supportive of the government or opposed to their rule, including peace activists, community leaders, clan elders, electoral delegates, cooperative businesspeople, and those refusing to pay Al-Shabaab taxes. The July 2025 CPIN confirms the state is willing but unable to provide effective protection from Al-Shabaab.",
      },
      {
        question: "Has the Al-Shabaab threat changed in 2025-2026?",
        answer:
          "Al-Shabaab's renewed offensive through late 2025 into early 2026 has retaken territory previously considered liberated, making internal relocation to government-controlled areas less viable than in previous years. Expert witnesses must update their analysis to reflect this evolving situation.",
      },
    ],
    relatedCaseTypes: ["article-15c-south-central", "ftt-asylum-appeal-somalia", "deportation-removal-somalia"],
  },
  {
    slug: "fgm-gender-based-violence",
    title: "FGM & Gender-Based Violence",
    metaTitle: "FGM & Gender-Based Violence Expert Witness UK | Somalia",
    metaDescription:
      "FGM and gender-based violence expert witness for Somalia asylum claims. AMM [2011] country guidance, prevalence rates exceeding 98%, daughter-at-risk claims, and state protection failures.",
    h1: "FGM & Gender-Based Violence Expert Witness UK | Somalia",
    content: [
      "Somalia has one of the highest rates of female genital mutilation in the world, with national surveys suggesting prevalence rates exceeding 98% in some communities. Despite formal legal prohibitions in some regions, enforcement is virtually non-existent and social pressure to undergo FGM remains overwhelming across all major clan groups.",
      "AMM and Others (conflict; humanitarian crisis; returnees; FGM) Somalia CG [2011] UKUT 445 (IAC) established country guidance on FGM in Somalia, recognising FGM as a form of persecution constituting a serious violation of fundamental rights. Expert witnesses address the current FGM situation, state and community protection availability, daughter-at-risk claims, and internal relocation viability.",
      "Gender-based violence more broadly includes forced marriage, domestic violence, and in Al-Shabaab controlled areas, severe restrictions on women's movement, dress, and behaviour enforced through violence. State protection for women is extremely limited across all regions of Somalia.",
    ],
    faqs: [
      {
        question: "What is the FGM situation in Somalia?",
        answer:
          "Somalia has one of the highest rates of female genital mutilation in the world, with national surveys suggesting prevalence rates exceeding 98% in some communities. Despite formal legal prohibitions in some regions, enforcement is virtually non-existent and social pressure to undergo FGM remains overwhelming. Expert witnesses assess the specific ethnic, regional, and family context of the appellant's FGM risk.",
      },
      {
        question: "How does the AMM country guidance apply to FGM claims?",
        answer:
          "AMM and Others (conflict; humanitarian crisis; returnees; FGM) Somalia CG [2011] UKUT 445 (IAC) established country guidance on FGM in Somalia, recognising FGM as a form of persecution constituting a serious violation of fundamental rights. Expert witnesses address the current FGM situation, state and community protection, and internal relocation viability in the context of this guidance.",
      },
    ],
    relatedCaseTypes: ["fgm-somalia-asylum", "ftt-asylum-appeal-somalia", "upper-tribunal-somalia"],
  },
  {
    slug: "failed-asylum-seekers-return",
    title: "Failed Asylum Seekers Return",
    metaTitle: "Failed Asylum Seekers Return Expert Witness UK | Somalia",
    metaDescription:
      "Failed asylum seeker return expert witness for Somalia. MOJ diaspora test, risk profile of Western returnees, UNHCR eligibility guidelines 2024, and Article 3 destitution analysis.",
    h1: "Failed Asylum Seekers Return Expert Witness UK | Somalia",
    content: [
      "Failed asylum seekers returned to Somalia face a distinct risk profile from those who have never left. MOJ and Others established that return to Mogadishu requires assessment of clan connections and diaspora financial support: without either, the individual may face conditions reaching the Article 3 threshold through destitution and inability to meet basic needs.",
      "The UK government has pursued returns to Somalia despite UNHCR Eligibility Guidelines (2024) cautioning against generalised return. Expert witnesses assess whether the specific appellant has realistic clan support or remittance networks, whether their profile creates additional targeting risk as a Western returnee, and whether return to Mogadishu or another location is viable given 2025-2026 security conditions.",
      "Hashi and Others considerations apply to long-absence cases where clan connections may have weakened. Expert reports address the appellant's specific circumstances against current country conditions, challenging generic Home Office positions that return is safe for all failed asylum seekers.",
    ],
    faqs: [
      {
        question: "What is the MOJ diaspora test for Somali returnees?",
        answer:
          "Under MOJ, the key question for those returning from the UK is whether they have clan connections in Mogadishu and financial support (remittances from diaspora). Without either, the individual may face conditions reaching the Article 3 threshold: destitution and inability to meet basic needs in a city with limited social welfare infrastructure.",
      },
      {
        question: "Is it safe to return someone to Somalia in 2026?",
        answer:
          "Somalia remains one of the most dangerous countries in the world. Al-Shabaab controls large areas, the government cannot protect its own citizens, and clan violence continues. Every Somali asylum claim must be assessed on its individual merits, but the baseline risk across the country remains extremely high.",
      },
    ],
    relatedCaseTypes: ["deportation-removal-somalia", "ftt-asylum-appeal-somalia", "fresh-claims-somalia"],
  },
  {
    slug: "diaspora-without-clan-support",
    title: "Diaspora Without Clan Support",
    metaTitle: "Somalia Diaspora Without Clan Support Expert Witness UK",
    metaDescription:
      "Expert witness for Somali diaspora without clan support in Mogadishu. MOJ remittances test, Article 3 destitution risk, and Hashi and Others long-absence analysis.",
    h1: "Somalia Diaspora Without Clan Support Expert Witness UK",
    content: [
      "In Mogadishu, clan membership provides access to housing, employment, security, and social networks. Those who have lost clan connections through long absence abroad, or who belong to minority clans without established networks in Mogadishu, face extreme difficulty on return: unable to find housing or employment, vulnerable to exploitation and violence, and potentially destitute.",
      "MOJ established that this level of difficulty can reach the Article 3 threshold. The diaspora remittances test examines whether financial support from family abroad can substitute for direct clan presence, providing the means to survive in Mogadishu even without immediate clan networks. Expert witnesses assess whether claimed diaspora support is realistic given the appellant's specific circumstances.",
      "Long-absence cases require careful analysis of whether clan connections have been maintained, whether the appellant's dialect and cultural knowledge remain consistent with claimed clan identity, and whether remittance networks are verifiable and sufficient for subsistence in Mogadishu's current economic conditions.",
    ],
    faqs: [
      {
        question: "Why does lack of clan support matter for return?",
        answer:
          "In Mogadishu, clan membership provides access to housing, employment, security, and social networks. Without clan support, returnees face extreme difficulty: unable to find housing or employment, vulnerable to exploitation and violence, and potentially destitute. MOJ established that this level of difficulty can reach the Article 3 threshold.",
      },
      {
        question: "Can diaspora remittances substitute for clan support?",
        answer:
          "MOJ recognised that diaspora financial support can partially substitute for direct clan presence, providing the financial means to survive in Mogadishu even without immediate clan networks. However, expert witnesses assess whether the claimed diaspora support is realistic given the appellant's specific circumstances.",
      },
    ],
    relatedCaseTypes: ["ftt-asylum-appeal-somalia", "deportation-removal-somalia", "fresh-claims-somalia"],
  },
  {
    slug: "former-government-officials",
    title: "Former Government Officials",
    metaTitle: "Former Government Officials Expert Witness UK | Somalia",
    metaDescription:
      "Former Somali government officials expert witness for UK tribunals. TFG, FGS, and regional administration risk, Al-Shabaab targeting, and security personnel vulnerability.",
    h1: "Former Government Officials Expert Witness UK | Somalia",
    content: [
      "Former officials of the Transitional Federal Government, Federal Government of Somalia, or regional administrations face targeted Al-Shabaab risk on return. Those with security, judicial, or political profiles that would mark them as opponents of Al-Shabaab ideology are at particular risk, regardless of MOJ's general finding that ordinary Mogadishu civilians face no real risk from Al-Shabaab forced recruitment.",
      "Expert witnesses assess the specific role held, its visibility to Al-Shabaab, whether the appellant worked in Al-Shabaab controlled areas, and whether there is evidence of specific targeting beyond the general risk to government employees. Lower-level government employees present a more nuanced risk profile requiring case-specific analysis.",
      "The July 2025 CPIN confirms state protection is unavailable against Al-Shabaab targeting of government-associated individuals. Al-Shabaab's 2025-2026 offensive has expanded areas where former officials can be identified and targeted, making internal relocation analysis critical for this profile.",
    ],
    faqs: [
      {
        question: "Are former Somali government officials at particular risk?",
        answer:
          "Former officials of the Transitional Federal Government, Federal Government of Somalia, or regional administrations face targeted Al-Shabaab risk, particularly those with security, judicial, or political profiles that would mark them as opponents of Al-Shabaab ideology. Expert witnesses assess the specific role held, its visibility to Al-Shabaab, and the risk on return given current conditions.",
      },
      {
        question: "What about lower-level government employees?",
        answer:
          "Lower-level government employees present a more nuanced risk profile. The expert assesses whether the specific role would have been visible to Al-Shabaab, whether the employee worked in Al-Shabaab controlled areas, and whether there is evidence of specific targeting beyond the general risk to government employees.",
      },
    ],
    relatedCaseTypes: ["ftt-asylum-appeal-somalia", "article-15c-south-central", "deportation-removal-somalia"],
  },
  {
    slug: "women-discriminatory-practices",
    title: "Women Facing Discriminatory Practices",
    metaTitle: "Women Facing Discriminatory Practices Expert Witness UK | Somalia",
    metaDescription:
      "Expert witness for Somali women facing discriminatory practices. Gender-based persecution, forced marriage, honour-based violence, and Al-Shabaab restrictions on women.",
    h1: "Women Facing Discriminatory Practices Expert Witness UK | Somalia",
    content: [
      "Women in Somalia face multiple forms of gender-based discrimination and persecution including FGM, forced marriage, domestic violence, and in Al-Shabaab controlled areas, severe restrictions on movement, dress, and behaviour enforced through violence. State protection for women is extremely limited across all regions.",
      "Expert witnesses assess the specific forms of discrimination relevant to the individual appellant's profile and region of origin. This includes clan-specific practices, the role of family and community enforcement, availability of NGO protection, and whether internal relocation provides viable protection for women without clan support at the destination.",
      "Internal relocation for women in Somalia is severely limited. Without clan protection in the relocation destination, women face acute vulnerability. Al-Shabaab's renewed offensive further restricts viable internal relocation options in south and central Somalia for 2025-2026 claims.",
    ],
    faqs: [
      {
        question: "What discrimination do women face in Somalia?",
        answer:
          "Women in Somalia face multiple forms of gender-based discrimination and persecution, including FGM, forced marriage, domestic violence, and in Al-Shabaab controlled areas, severe restrictions on movement, dress, and behaviour enforced through violence. State protection for women is extremely limited. Expert witnesses assess the specific forms of discrimination relevant to the individual appellant's profile and region of origin.",
      },
      {
        question: "Can Somali women internally relocate?",
        answer:
          "Internal relocation for women in Somalia is severely limited. Without clan protection in the relocation destination, women face acute vulnerability. Al-Shabaab's renewed offensive further restricts viable internal relocation options in south/central Somalia. Expert witnesses provide specific analysis of relocation viability for the individual profile.",
      },
    ],
    relatedCaseTypes: ["fgm-somalia-asylum", "ftt-asylum-appeal-somalia", "upper-tribunal-somalia"],
  },
  {
    slug: "forced-recruitment-conscription",
    title: "Al-Shabaab Forced Recruitment",
    metaTitle: "Al-Shabaab Forced Recruitment Expert Witness UK | Somalia",
    metaDescription:
      "Al-Shabaab forced recruitment and conscription expert witness for UK tribunals. Refugee Convention persecution, child soldiers, escape risk, and internal relocation analysis.",
    h1: "Al-Shabaab Forced Recruitment Expert Witness UK | Somalia",
    content: [
      "Al-Shabaab operates as a parallel government across large parts of south-central Somalia. Forced recruitment constitutes persecution under the 1951 Refugee Convention for those who refuse or escape conscription. Claims based on refusal of recruitment, escape from Al-Shabaab, or fear of forced conscription deserve serious and careful consideration.",
      "Al-Shabaab recruits both children and adults through coercion, clan pressure, and taxation-linked conscription demands. Those who have previously refused or escaped face ongoing risk of retribution. Expert witnesses assess whether the area of origin is under Al-Shabaab control or influence, recruitment practices in that area, and whether internal relocation provides viable protection from Al-Shabaab reach.",
      "MOJ's general finding that there is no real risk of Al-Shabaab forced recruitment for ordinary Mogadishu civilians is disputed for areas outside Mogadishu and for profiles with prior refusal or escape history. Expert reports address the tension between MOJ and current field conditions in 2025-2026.",
    ],
    faqs: [
      {
        question: "Does forced recruitment by Al-Shabaab constitute persecution?",
        answer:
          "Al-Shabaab forced recruitment constitutes persecution under the 1951 Refugee Convention. Claims based on refusal of recruitment, escape from Al-Shabaab, or fear of forced conscription deserve serious and careful consideration. Al-Shabaab is not just an armed group but operates as a parallel government across large parts of south-central Somalia.",
      },
      {
        question: "What is the expert's role in forced recruitment claims?",
        answer:
          "Somalia expert witnesses assess: whether the area of origin is under Al-Shabaab control or influence; Al-Shabaab's recruitment practices in that area; the risk to those who have previously refused or escaped; and whether internal relocation provides viable protection from Al-Shabaab reach.",
      },
    ],
    relatedCaseTypes: ["article-15c-south-central", "ftt-asylum-appeal-somalia", "fresh-claims-somalia"],
  },
];

export function getAsylumProfile(slug: string): AsylumProfile | undefined {
  return asylumProfiles.find((p) => p.slug === slug);
}
