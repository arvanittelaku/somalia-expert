import type { ProfileGeoBlock } from "@/data/profile-geo";

export function ProfileGeoContent({ blocks }: { blocks: ProfileGeoBlock[] }) {
  if (blocks.length === 0) return null;

  return (
    <div className="my-8 space-y-6">
      {blocks.map((block) => (
        <div
          key={block.title}
          className={`rounded-[8px] border p-6 ${
            block.type === "highlight"
              ? "border-[#C8922A]/40 bg-[#C8922A]/5"
              : "border-[#C8D8E4] bg-[#F4F8FB]"
          }`}
        >
          <h2 className="break-words text-lg font-bold text-[#0B2D4E]">{block.title}</h2>
          <p className="prose-safe mt-3 text-sm text-[#374151] leading-relaxed sm:text-base">{block.content}</p>
        </div>
      ))}
    </div>
  );
}
