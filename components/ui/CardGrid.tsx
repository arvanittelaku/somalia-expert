import Link from "next/link";

type CardItem = { title: string; description: string; href?: string };

function CardContent({ item }: { item: CardItem }) {
  return (
    <>
      <h3 className="break-words font-semibold text-[#0B2D4E] group-hover:text-[#C8922A]">{item.title}</h3>
      <p className="prose-safe mt-2 text-sm text-[#374151] leading-relaxed">{item.description}</p>
      {item.href && <span className="mt-4 inline-block text-sm font-medium text-[#C8922A]">Learn more →</span>}
    </>
  );
}

export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {items.map((item) =>
        item.href ? (
          <Link
            key={item.href}
            href={item.href}
            className="group min-h-[44px] min-w-0 rounded-[8px] border border-[#C8D8E4] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)] transition hover:border-[#0B2D4E] sm:p-6"
          >
            <CardContent item={item} />
          </Link>
        ) : (
          <div
            key={item.title}
            className="rounded-[8px] border border-[#C8D8E4] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)]"
          >
            <CardContent item={item} />
          </div>
        )
      )}
    </div>
  );
}
