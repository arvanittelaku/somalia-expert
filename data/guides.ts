import type { FAQ } from "@/lib/schema";

export type Guide = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqs?: FAQ[];
};

export const guides: Guide[] = [
  {
    slug: "moj-framework-guide",
    metaTitle: "MOJ Framework for Somalia Returns | Solicitor's Guide 2025-2026",
    metaDescription:
      "Complete solicitor's guide to the MOJ framework for Somalia returns. MOJ [2014] findings, OA [2022] updates, diaspora test, clan analysis, and 2025-2026 security updates.",
    h1: "MOJ Framework for Somalia Returns: Complete Solicitor's Guide",
    sections: [
      {
        heading: "What MOJ Established",
        paragraphs: [
          "MOJ and Others (Return to Mogadishu) Somalia CG [2014] UKUT 004442 (IAC) remains the leading country guidance case for Somalia asylum appeals in the UK. The Upper Tribunal held that generally there is no Article 3 risk for ordinary civilians returning to Mogadishu with no particular profile, but that clan support or diaspora remittances are essential for viable return.",
          "The MOJ framework requires tribunals to assess: the appellant's clan background and connections in Mogadishu; economic means including diaspora financial support; personal profile (government officials, journalists, Al-Shabaab opponents); and current security conditions. Without clan support or remittances, return may breach Article 3 through destitution.",
        ],
      },
      {
        heading: "OA and Others [2022] Updates",
        paragraphs: [
          "OA and Others (Somalia) CG [2022] UKUT 00033 updated country guidance on return to Somalia, refining the application of MOJ to specific profiles and addressing changed conditions since 2014. Solicitors should cite both MOJ and OA in current appeals, with expert evidence addressing how 2025-2026 developments further affect the framework.",
        ],
      },
      {
        heading: "2025-2026 Security Updates",
        paragraphs: [
          "Al-Shabaab's renewed offensive through late 2025 into early 2026 has retaken territory previously considered liberated, making internal relocation to government-controlled areas in the south less viable. ATMIS withdrawal creates additional uncertainty about security capacity. The July 2025 CPINs confirm the state is willing but unable to protect from Al-Shabaab.",
          "EUAA Country Guidance Somalia, updated October 2025, revised the actors of protection chapter. Expert witnesses must incorporate these developments into MOJ framework analysis for current appeals.",
        ],
      },
    ],
    faqs: [
      {
        question: "When does MOJ apply to a Somali claim?",
        answer:
          "MOJ applies to claims involving return to Mogadishu where the issue is individual risk rather than generalised indiscriminate violence. It does not apply to Article 15(c) claims from south/central Somalia outside Mogadishu, or to Somaliland-specific analysis.",
      },
    ],
  },
  {
    slug: "clan-structure-somalia-guide",
    metaTitle: "Somali Clan Structure | Expert Evidence Guide for Solicitors",
    metaDescription:
      "Solicitor's guide to Somali clan structure for expert evidence. Major clans, minority groups, clan protection mechanisms, and expert assessment methodology.",
    h1: "Somali Clan Structure: Expert Evidence Guide for Solicitors",
    sections: [
      {
        heading: "Major Clan Families",
        paragraphs: [
          "Somali society is organised into four major clan families: Hawiye (dominant in Mogadishu and central regions), Darod (including sub-clans in Puntland and Somaliland), Dir (including Isaaq in Somaliland), and Rahanweyn/Digil-Mirifle (south-west Somalia). Each clan family contains numerous sub-clans with distinct territorial affiliations.",
          "Clan membership determines access to protection, housing, employment, and dispute resolution. Major clan members can call on clan militias and political connections for protection. Minority groups outside the four major families lack these protection mechanisms.",
        ],
      },
      {
        heading: "Minority Groups",
        paragraphs: [
          "Minority groups include Benadiri (Reer Hamar), Gosha, Bantu, Gaboye/Madhiban (occupational castes), Bajuni, and Galgala. These groups face severe discrimination and lack clan militia protection. Expert witnesses assess whether the appellant belongs to a minority group and the specific vulnerability this creates in their region of origin.",
        ],
      },
      {
        heading: "Expert Assessment Methodology",
        paragraphs: [
          "Somalia experts assess clan membership through claimed clan and sub-clan affiliation, geographic origin, dialect and language (Somali, Maay, af-Tunni), cultural and genealogical knowledge, and consistency with known displacement patterns. Reports address plausibility of claimed identity and protection availability on return.",
        ],
      },
    ],
  },
  {
    slug: "al-shabaab-asylum-guide",
    metaTitle: "Al-Shabaab Asylum Claims | Expert Evidence Guide 2025-2026",
    metaDescription:
      "Solicitor's guide to Al-Shabaab asylum claims. Renewed offensive impact, territory retaken, risk profiles, July 2025 CPIN analysis, and expert report structure.",
    h1: "Al-Shabaab Asylum Claims: Expert Evidence Guide 2025-2026",
    sections: [
      {
        heading: "Renewed Offensive Impact",
        paragraphs: [
          "Al-Shabaab's renewed offensive through late 2025 into early 2026 has reversed earlier government gains in south and central Somalia. Territory previously considered liberated has been retaken, expanding Al-Shabaab's capacity to identify, tax, recruit, and target individuals in previously government-controlled areas.",
          "This significantly affects both individual targeting claims and Article 15(c) indiscriminate violence analysis. Expert reports must cite current territorial control data from ACLED and UN sources.",
        ],
      },
      {
        heading: "Risk Profiles",
        paragraphs: [
          "Profiles at risk from Al-Shabaab include government officials and security personnel, community leaders and clan elders, peace activists, electoral delegates, cooperative businesspeople, and those refusing Al-Shabaab taxation or forced recruitment. The July 2025 CPIN confirms state protection is unavailable.",
        ],
      },
      {
        heading: "Expert Report Structure",
        paragraphs: [
          "Al-Shabaab risk assessment reports should address: the appellant's profile and visibility to Al-Shabaab; territorial control in the area of origin; Al-Shabaab recruitment and taxation practices; state protection availability; and internal relocation viability. Reports cite July 2025 CPIN, EUAA October 2025 guidance, and field research.",
        ],
      },
    ],
  },
  {
    slug: "somaliland-puntland-guide",
    metaTitle: "Somaliland and Puntland Asylum Claims | Expert Evidence Guide",
    metaDescription:
      "Expert evidence guide for Somaliland and Puntland asylum claims. Separate legal frameworks, clan requirements, security differences, and internal relocation analysis.",
    h1: "Somaliland and Puntland Asylum Claims: Expert Evidence Guide",
    sections: [
      {
        heading: "Separate Legal Frameworks",
        paragraphs: [
          "Somaliland and Puntland are assessed differently from south and central Somalia. Somaliland has a more stable government and lower Al-Shabaab presence. Puntland is semi-autonomous with its own security forces. Neither region is governed by the MOJ Mogadishu return framework or Article 15(c) south/central analysis.",
        ],
      },
      {
        heading: "Clan Requirements",
        paragraphs: [
          "Settlement in Somaliland requires Isaaq or Somaliland clan connections. Puntland requires Darood/Harti clan connections. Those without appropriate clan backgrounds face significant barriers to housing, employment, and protection in either region.",
        ],
      },
      {
        heading: "Internal Relocation to the North",
        paragraphs: [
          "Internal relocation from south/central Somalia to Somaliland or Puntland is generally not viable due to strict immigration controls, essential clan connections, and economic subsistence requirements. Expert witnesses assess whether relocation is realistic for the specific appellant profile.",
        ],
      },
    ],
  },
  {
    slug: "fgm-somalia-guide",
    metaTitle: "FGM Asylum Claims from Somalia | Expert Evidence Guide",
    metaDescription:
      "Solicitor's guide to FGM asylum claims from Somalia. AMM [2011] country guidance, prevalence rates, daughter-at-risk claims, and state protection failures.",
    h1: "FGM Asylum Claims from Somalia: Expert Evidence Guide",
    sections: [
      {
        heading: "AMM [2011] Country Guidance",
        paragraphs: [
          "AMM and Others (conflict; humanitarian crisis; returnees; FGM) Somalia CG [2011] UKUT 445 (IAC) established that FGM in Somalia constitutes persecution constituting a serious violation of fundamental rights. This remains the leading country guidance for FGM claims from Somalia.",
        ],
      },
      {
        heading: "Prevalence and Enforcement",
        paragraphs: [
          "Somalia has one of the highest FGM prevalence rates globally, exceeding 98% in some communities. Despite formal legal prohibitions in some regions, enforcement is virtually non-existent and social pressure remains overwhelming. Expert witnesses assess regional and clan-specific variations in prevalence and enforcement.",
        ],
      },
      {
        heading: "Daughter-at-Risk Claims",
        paragraphs: [
          "Where the appellant has daughters who would face FGM on return, expert evidence addresses family and community pressure, the appellant's ability to protect their daughters, and whether internal relocation would reduce FGM risk. State and community protection is virtually unavailable.",
        ],
      },
    ],
  },
  {
    slug: "instructing-somalia-expert",
    metaTitle: "Instructing a Somalia Expert Witness | Solicitor's Guide",
    metaDescription:
      "How to instruct a Somalia expert witness. Letter of instruction, documents needed, Legal Aid prior authority, and tribunal requirements for expert reports.",
    h1: "Instructing a Somalia Expert Witness: A Solicitor's Guide",
    sections: [
      {
        heading: "Letter of Instruction",
        paragraphs: [
          "The letter of instruction should set out the expert's duty to the tribunal, the specific questions to be addressed, the appellant's claimed clan and region of origin, and the issues in dispute. Identify whether MOJ, Article 15(c), or regional analysis applies. Provide the Home Office refusal letter, witness statement, and any relevant country guidance decisions.",
        ],
      },
      {
        heading: "Documents Needed",
        paragraphs: [
          "Provide: the appellant's witness statement; Home Office refusal letter and reasons; any previous expert reports; country guidance decisions (MOJ, OA, AMM); relevant CPINs; and any supporting documentary evidence on clan identity, Al-Shabaab targeting, or FGM risk.",
        ],
      },
      {
        heading: "Legal Aid and Tribunal Requirements",
        paragraphs: [
          "Legal Aid cases require LAA prior authority before expert work begins. Reports must comply with CPR Part 35 and Immigration Tribunal Practice Direction paragraph 10. Allow 14 days for standard reports and 7 days for urgent instructions. Confirm hearing dates and whether oral evidence is required.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
