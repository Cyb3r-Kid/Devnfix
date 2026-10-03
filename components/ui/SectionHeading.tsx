export function SectionHeading({ eyebrow, title, text, align = "left", tone = "light" }: { eyebrow?: string; title: string; text?: string; align?: "left" | "center"; tone?: "light" | "dark" }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <p className={`eyebrow mb-4 ${tone === "dark" ? "!text-teal" : ""}`}>{eyebrow}</p>}
      <h2 className={`text-balance text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-.04em] ${tone === "dark" ? "text-white" : "text-deep"}`}>{title}</h2>
      {text && <p className={`mt-5 text-base leading-8 sm:text-lg ${tone === "dark" ? "text-white/60" : "text-muted"}`}>{text}</p>}
    </div>
  );
}
