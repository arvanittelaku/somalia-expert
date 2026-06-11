export type ProfileGeoBlock = {
  type: "note" | "highlight";
  title: string;
  content: string;
};

export function getProfileGeoContent(slug: string): ProfileGeoBlock[] {
  const blocks: Record<string, ProfileGeoBlock[]> = {
    "clan-minority-groups": [
      {
        type: "highlight",
        title: "Clan minority vulnerability (2025-2026)",
        content:
          "Benadiri, Gosha, Bantu, and Gaboye/Madhiban groups lack clan militia protection in Mogadishu and south-central Somalia. On return, they cannot rely on major clan networks for housing, security, or employment. Al-Shabaab's renewed offensive has increased exploitation of minority groups in retaken territories through taxation and forced labour.",
      },
    ],
    "al-shabaab-targeting": [
      {
        type: "highlight",
        title: "Al-Shabaab renewed offensive (2025-2026)",
        content:
          "Al-Shabaab (Harakat al-Shabaab al-Mujahideen) operates as a parallel government across large parts of south-central Somalia, targeting government supporters, tax refusers, and those who escape forced recruitment. The July 2025 Home Office CPIN confirms the Federal Government is willing but unable to provide effective protection from Al-Shabaab.",
      },
    ],
    "forced-recruitment-conscription": [
      {
        type: "highlight",
        title: "Forced recruitment risk",
        content:
          "MOJ [2014] held no real risk of Al-Shabaab forced recruitment for ordinary Mogadishu civilians, but this is disputed for areas outside Mogadishu where recruitment pressure remains high. Expert evidence must address current territorial control and the appellant's age, clan profile, and area of origin.",
      },
    ],
    "fgm-gender-based-violence": [
      {
        type: "highlight",
        title: "FGM prevalence and state enforcement",
        content:
          "Somalia has one of the highest FGM prevalence rates globally (exceeding 98% in some surveys). AMM and Others [2011] established FGM as persecution constituting a serious violation of fundamental rights. State enforcement of prohibitions is virtually non-existent, and daughters of FGM survivors may face a well-founded fear of FGM on return.",
      },
    ],
    "failed-asylum-seekers-return": [
      {
        type: "highlight",
        title: "Somalia return risk 2026: MOJ diaspora test",
        content:
          "Under MOJ, return to Mogadishu requires clan connections providing support or diaspora remittances from abroad. Failed asylum seekers who have lost clan ties through long absence face Article 3 destitution risk. Expert reports should assess remittance viability, cost of living in Mogadishu, and whether financial support alone suffices without clan presence.",
      },
    ],
    "diaspora-without-clan-support": [
      {
        type: "note",
        title: "MOJ diaspora test",
        content:
          "MOJ established that diaspora financial remittances can partially substitute for direct clan presence, but expert witnesses must assess whether claimed support is realistic given the appellant's circumstances, the reliability of remittance sources, and Mogadishu living costs in 2025-2026.",
      },
    ],
  };
  return blocks[slug] ?? [];
}
