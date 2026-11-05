import {
  Anchor,
  BedDouble,
  Forklift,
  ShieldCheck,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  waves: Waves,
  anchor: Anchor,
  forklift: Forklift,
  bed: BedDouble,
  shield: ShieldCheck,
  wrench: Wrench,
};

export function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="bg-navy py-20 text-on-photo sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-normal text-primary uppercase">
              {t.services.kicker}
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold sm:text-4xl">
              {t.services.title}
            </h2>
            <p className="mt-3 text-on-photo/70">{t.services.subtitle}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = icons[item.icon] ?? Anchor;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group h-full rounded-lg border border-on-photo/10 bg-on-photo/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-on-photo/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md brand-gradient">
                    <Icon className="h-6 w-6 text-on-photo" />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-photo/65">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
