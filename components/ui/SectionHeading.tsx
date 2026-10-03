export function SectionHeading({ eyebrow, title, text, align = "left" }: { eyebrow?: string; title: string; text?: string; align?: "left" | "center" }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-balance text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-.04em] text-deep">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{text}</p>}
    </div>
  );
}
