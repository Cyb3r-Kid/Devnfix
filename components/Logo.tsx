import Image from "next/image";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${light ? "rounded-xl bg-white px-3 py-2" : ""}`}>
      <Image src="/brand/devnfix-mark.jpg" alt="" width={42} height={42} className="size-9 rounded-lg object-cover sm:size-10" priority />
      <span className="text-xl font-extrabold tracking-[-.04em] text-deep sm:text-2xl">Devnfix</span>
    </span>
  );
}
