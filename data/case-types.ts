import type { FAQ } from "@/lib/schema";

export type CaseType = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
};

export const caseTypes: CaseType[] = [
  {
    slug: "ftt-asylum-appeal-somalia",
    title: "FTT Asylum Appeal (Somalia)",
    metaTitle: "Somalia FTT Asylum Appeal Expert Witness UK",
    metaDescription:
      "Somalia expert witness for First-tier Tribunal asylum appeals. MOJ country guidance, clan analysis, Al-Shabaab risk, and CPR Part 35 compliant country condition reports.",
    h1: "Somalia FTT Asylum Appeal Expert Witness UK",
    content: [
      "First-tier Tribunal asylum appeals involving Somali nationals require expert evidence addressing the appellant's specific profile against current country conditions. Somalia is one of the most legally complex asylum jurisdictions in the UK system, with MOJ country guidance, Article 15(c) analysis for south/central Somalia, and separate frameworks for Somaliland and Puntland.",
      "Expert reports for FTT proceedings must comply with CPR Part 35 and Immigration Tribunal Practice Direction paragraph 10. Reports address the matters raised in the letter of instruction, cite verifiable sources including July 2025 CPINs and EUAA October 2025 country guidance, and provide independent analysis beyond generic Home Office positions.",
      "Common FTT issues include clan membership assessment, MOJ diaspora test application, Al-Shabaab targeting risk, FGM and gender-based violence, and internal relocation viability. Expert witnesses with prior tribunal acceptance in Somalia cases provide evidential reliability that strengthens the appellant's case.",
    ],
    faqs: [
      {
        question: "When should a solicitor instruct a Somalia expert for an FTT appeal?",
        answer:
          "Instruct as early as possible once grounds of appeal are filed. Expert reports require time for research, drafting, and review. For listed hearings, allow at least 14 days for standard reports and 7 days for urgent instructions. Legal Aid cases require LAA prior authority before work begins.",
      },
      {
        question: "What should a letter of instruction cover for Somalia FTT cases?",
        answer:
          "The letter should set out the appellant's claimed clan, region of origin, specific fear, and the issues in dispute. Identify whether MOJ, Article 15(c), or Somaliland/Puntland analysis applies. Provide the Home Office refusal letter, witness statement, and any prior country guidance decisions relevant to the claim.",
      },
    ],
  },
  {
    slug: "upper-tribunal-somalia",
    title: "Upper Tribunal (Somalia)",
    metaTitle: "Somalia Upper Tribunal Expert Witness UK",
    metaDescription:
      "Somalia expert witness for Upper Tribunal appeals and country guidance cases. Updated analysis for MOJ framework, OA [2022], and 2025-2026 security developments.",
    h1: "Somalia Upper Tribunal Expert Witness UK",
    content: [
      "Upper Tribunal proceedings involving Somali nationals often raise complex questions of country guidance application, including MOJ and Others [2014], OA and Others [2022], and AMM and Others [2011]. Expert evidence at UT level requires particularly rigorous sourcing and analysis given the precedential significance of UT decisions.",
      "UT cases may challenge existing country guidance in light of changed country conditions, including Al-Shabaab's 2025-2026 offensive, ATMIS withdrawal, and updated CPINs. Expert witnesses must demonstrate that their analysis reflects current conditions and explain any divergence from established country guidance.",
      "Oral evidence at Upper Tribunal hearings is common in Somalia cases where clan membership, diaspora support, or Al-Shabaab targeting are in dispute. Experts must be prepared to defend their methodology and conclusions under cross-examination.",
    ],
    faqs: [
      {
        question: "How does expert evidence differ at Upper Tribunal level?",
        answer:
          "UT expert reports require greater methodological rigour and comprehensive sourcing. Experts must address how their analysis relates to existing country guidance and explain any updated assessment based on changed conditions. Oral evidence and cross-examination are more common at UT level.",
      },
      {
        question: "Can expert evidence support a country guidance challenge?",
        answer:
          "Yes. Where country conditions have changed materially since existing guidance (such as MOJ [2014]), expert evidence documenting those changes can support applications to modify or depart from country guidance. Al-Shabaab's 2025-2026 offensive and ATMIS withdrawal are relevant developments.",
      },
    ],
  },
  {
    slug: "article-15c-south-central",
    title: "Article 15(c) South/Central Somalia",
    metaTitle: "Article 15(c) South/Central Somalia Expert Witness UK",
    metaDescription:
      "Article 15(c) subsidiary protection expert witness for south and central Somalia. Indiscriminate violence analysis, Al-Shabaab territorial control, and 2025-2026 offensive impact.",
    h1: "Article 15(c) South/Central Somalia Expert Witness UK",
    content: [
      "Article 15(c) of the Qualification Directive provides subsidiary protection where a person faces a serious and individual threat by reason of indiscriminate violence in situations of international or internal armed conflict. South and central Somalia outside Mogadishu falls within this framework rather than the MOJ individual risk assessment.",
      "Al-Shabaab's renewed offensive through late 2025 has retaken territory in lower Juba, Bay, Bakool, Middle Shabelle, and Lower Shabelle, significantly affecting Article 15(c) analysis. Expert witnesses provide current data on civilian casualty rates, territorial control, and the level of indiscriminate violence in the appellant's specific area of origin.",
      "The tribunal applies a two-stage test: first, whether there is a situation of armed conflict; second, whether the level of indiscriminate violence is such that a civilian would face a real risk. Expert evidence on ACLED data, UN reports, and field conditions supports both stages of this analysis.",
    ],
    faqs: [
      {
        question: "When does Article 15(c) apply to Somali claims?",
        answer:
          "Article 15(c) applies to claims from south and central Somalia outside Mogadishu where the issue is indiscriminate violence rather than individual targeting. It requires assessment of the level of generalised violence in the appellant's specific area of origin against the Article 15(c) threshold.",
      },
      {
        question: "How has Al-Shabaab's 2025-2026 offensive affected Article 15(c) claims?",
        answer:
          "The renewed offensive has retaken previously liberated territory, increasing civilian casualty rates and expanding Al-Shabaab control. This strengthens Article 15(c) arguments for appellants from affected areas and undermines internal relocation to those areas.",
      },
    ],
  },
  {
    slug: "deportation-removal-somalia",
    title: "Deportation & Removal (Somalia)",
    metaTitle: "Somalia Deportation & Removal Expert Witness UK",
    metaDescription:
      "Somalia deportation and removal expert witness. MOJ diaspora test, failed asylum seeker return risk, and Article 3 challenges to removal to Somalia.",
    h1: "Somalia Deportation & Removal Expert Witness UK",
    content: [
      "Deportation and removal cases involving Somali nationals require expert evidence on return risk, particularly under the MOJ diaspora test for returns to Mogadishu. The Home Office may assert that return is safe based on MOJ's general finding for ordinary civilians, but expert evidence can demonstrate that the specific individual's profile creates Article 3 risk.",
      "Failed asylum seekers returned from the UK face distinct risks including destitution without clan support, targeting as Western returnees, and inability to integrate into Mogadishu's clan-based social structure. UNHCR Eligibility Guidelines (2024) caution against generalised return to Somalia.",
      "Expert reports for removal cases address the appellant's clan connections, remittance networks, personal profile, and current security conditions. Reports may also address whether return to Somaliland or Puntland is viable as an alternative to Mogadishu.",
    ],
    faqs: [
      {
        question: "Can expert evidence prevent removal to Somalia?",
        answer:
          "Expert evidence demonstrating that the specific individual faces Article 3 risk on return can support challenges to removal. This is particularly strong where the appellant lacks clan support in Mogadishu, belongs to a targeted profile, or originates from an area under Al-Shabaab control.",
      },
      {
        question: "What is the Home Office position on Somali returns?",
        answer:
          "The Home Office relies on MOJ country guidance and July 2025 CPINs to assert that return to Mogadishu is safe for ordinary civilians with clan support or diaspora remittances. Expert evidence challenges this by demonstrating individual risk factors and current security deterioration.",
      },
    ],
  },
  {
    slug: "fresh-claims-somalia",
    title: "Fresh Claims (Somalia)",
    metaTitle: "Somalia Fresh Claim Expert Witness UK",
    metaDescription:
      "Somalia fresh claim expert witness for new asylum applications. Changed country conditions, Al-Shabaab offensive 2025-2026, and updated country guidance analysis.",
    h1: "Somalia Fresh Claim Expert Witness UK",
    content: [
      "Fresh claims based on changed country conditions in Somalia may rely on Al-Shabaab's 2025-2026 offensive, ATMIS withdrawal, updated CPINs, and EUAA October 2025 country guidance. Expert evidence establishes that conditions have changed materially since the original decision, creating a realistic prospect of success.",
      "Fresh claims may also arise from new personal circumstances including changed clan dynamics, new Al-Shabaab targeting, or deterioration in the appellant's region of origin. Expert witnesses assess whether the new evidence, viewed with previously assessed evidence, creates a realistic prospect of success.",
      "The Home Office may accept some fresh claims without referral to the FTT where expert evidence clearly demonstrates changed conditions. Comprehensive expert reports strengthen both Home Office reconsideration requests and subsequent FTT proceedings.",
    ],
    faqs: [
      {
        question: "What country changes support a Somalia fresh claim?",
        answer:
          "Al-Shabaab's renewed offensive through late 2025, ATMIS withdrawal creating a security vacuum, updated July 2025 CPINs, and EUAA October 2025 country guidance on actors of protection all represent material changes since many original Somalia decisions were made.",
      },
      {
        question: "How does expert evidence support fresh claim submissions?",
        answer:
          "Expert reports document changed country conditions with verifiable sources, explain how changes affect the specific appellant's profile, and demonstrate a realistic prospect of success if the claim were heard afresh. This satisfies the TK (Zimbabwe) test for fresh claims.",
      },
    ],
  },
  {
    slug: "fgm-somalia-asylum",
    title: "FGM Asylum (Somalia)",
    metaTitle: "FGM Somalia Asylum Expert Witness UK",
    metaDescription:
      "FGM Somalia asylum expert witness. AMM [2011] country guidance, 98% prevalence rates, daughter-at-risk claims, and state protection failure analysis.",
    h1: "FGM Somalia Asylum Expert Witness UK",
    content: [
      "FGM claims from Somalia are governed by AMM and Others [2011] country guidance, which recognised FGM as persecution constituting a serious violation of fundamental rights. With prevalence rates exceeding 98% in some communities, the baseline risk for women and girls from Somalia is exceptionally high.",
      "Expert witnesses assess the specific ethnic, regional, and family context of the appellant's FGM risk. Daughter-at-risk claims require analysis of whether the appellant has daughters who would face FGM on return, and whether the appellant could protect them. State and community protection is virtually non-existent.",
      "Internal relocation analysis for FGM claims must address whether relocation within Somalia would reduce FGM risk, considering regional variations in prevalence and enforcement, clan and family pressure, and the appellant's ability to access protection at the relocation destination.",
    ],
    faqs: [
      {
        question: "Is FGM automatically persecution in Somalia cases?",
        answer:
          "AMM [2011] established that FGM in Somalia constitutes persecution. However, the tribunal still assesses the individual appellant's risk based on their specific family, clan, and regional context. Expert evidence addresses the particular circumstances of the appellant's FGM fear.",
      },
      {
        question: "How are daughter-at-risk claims assessed?",
        answer:
          "Expert witnesses assess whether the appellant has daughters who would face FGM on return, the family and community pressure to perform FGM, and whether the appellant could realistically protect their daughters given social norms and lack of state protection in Somalia.",
      },
    ],
  },
  {
    slug: "somaliland-asylum",
    title: "Somaliland Asylum",
    metaTitle: "Somaliland Asylum Expert Witness UK",
    metaDescription:
      "Somaliland asylum expert witness for UK tribunals. Separate legal framework, Isaaq clan dynamics, security analysis, and internal relocation from south Somalia.",
    h1: "Somaliland Asylum Expert Witness UK",
    content: [
      "Somaliland asylum claims require separate analysis from south and central Somalia. Somaliland has a more stable political environment and lower Al-Shabaab presence, but specific profiles including clan minorities, political opponents, and women face genuine risks that require expert assessment.",
      "Expert witnesses address Somaliland-specific country conditions including clan dynamics (particularly Isaaq and other Somaliland clans), state protection availability, and the viability of internal relocation to Somaliland from other parts of Somalia. Immigration controls and clan barriers make relocation from south Somalia generally unviable.",
      "Claims from appellants originating in Somaliland require analysis of regional security, clan protection availability, and individual risk factors. The legal framework differs from MOJ and Article 15(c) analysis applicable to other parts of Somalia.",
    ],
    faqs: [
      {
        question: "Is Somaliland safer than south Somalia for asylum analysis?",
        answer:
          "Somaliland is generally more stable with lower Al-Shabaab presence and a functioning government. However, it is not entirely safe, and specific profiles face genuine risks. Expert witnesses provide Somaliland-specific analysis rather than applying generalised Somalia conclusions.",
      },
      {
        question: "Can south Somali appellants relocate to Somaliland?",
        answer:
          "Internal relocation to Somaliland from south/central Somalia is generally not viable due to strict immigration controls, essential clan connections, and barriers for those without Isaaq or Somaliland clan backgrounds.",
      },
    ],
  },
  {
    slug: "clan-minority-asylum",
    title: "Clan Minority Asylum",
    metaTitle: "Clan Minority Asylum Expert Witness UK | Somalia",
    metaDescription:
      "Clan minority asylum expert witness for Somalia. Benadiri, Bantu, Gosha, Gaboye/Madhiban vulnerability, lack of clan protection, and MOJ diaspora test analysis.",
    h1: "Clan Minority Asylum Expert Witness UK | Somalia",
    content: [
      "Clan minority asylum claims require expert evidence on the specific vulnerability of the appellant's minority group, the absence of clan protection mechanisms, and the interaction with MOJ country guidance where minority clans lack diaspora support networks in Mogadishu.",
      "Minority groups including Benadiri, Gosha, Bantu, Gaboye/Madhiban, Bajuni, and Galgala face severe discrimination and violence from majority clans without recourse to effective protection. They are particularly vulnerable to Al-Shabaab exploitation and taxation.",
      "Expert witnesses assess clan membership plausibility, regional distribution of minority groups, protection availability on return, and internal relocation viability. Clan analysis methodology examines dialect, geographic origin, cultural knowledge, and genealogical consistency.",
    ],
    faqs: [
      {
        question: "How does MOJ apply to clan minority claims?",
        answer:
          "MOJ's diaspora test is particularly critical for clan minorities who may lack clan support networks in Mogadishu. Without clan connections or diaspora remittances, return may reach the Article 3 threshold through destitution and vulnerability to exploitation and violence.",
      },
      {
        question: "What evidence supports clan minority vulnerability?",
        answer:
          "Expert reports cite UN reports, human rights documentation, field research, and clan structure analysis demonstrating the absence of protection mechanisms for minority groups. Reports address the specific minority group, region, and individual appellant profile.",
      },
    ],
  },
];

export function getCaseType(slug: string): CaseType | undefined {
  return caseTypes.find((c) => c.slug === slug);
}
