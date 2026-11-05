import { Check } from "lucide-react";
import { useLang, whatsappLink } from "@/lib/i18n";
import hotelRoom from "@/assets/graded-room-main.jpg";
import hotelPool from "@/assets/graded-pool-lake.jpg";
import lakeVeranda from "@/assets/graded-veranda-lake.jpg";
import { Reveal } from "./Reveal";

export function Lodging() {
  const { t } = useLang();

  return (
    <section id="lodging" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <p className="text-xs font-bold tracking-normal text-primary uppercase">
            {t.lodging.kicker}
          </p>
          <h2 className="font-display mt-3 text-3xl leading-tight font-extrabold text-foreground sm:text-4xl">
            {t.lodging.title}
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {t.lodging.p1}
          </p>
          <ul className="mt-8 space-y-3">
            {t.lodging.features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full brand-gradient">
                  <Check className="h-3.5 w-3.5 text-on-photo" />
                </span>
                <span className="text-sm font-medium text-foreground">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink(t.whatsapp.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-bold tracking-normal text-primary-foreground uppercase transition-transform hover:scale-[1.03]"
          >
            {t.lodging.cta}
          </a>
        </Reveal>
        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={hotelRoom}
              alt="Quarto real da Marina Recanto do Lago"
              loading="lazy"
              width={1024}
              height={768}
              className="col-span-2 aspect-[16/9] w-full rounded-lg object-cover shadow-lg"
            />
            <img
              src={hotelPool}
              alt="Piscina real com vista para o lago"
              loading="lazy"
              width={1024}
              height={768}
              className="col-span-2 aspect-[16/9] w-full rounded-lg object-cover shadow-lg sm:col-span-1"
            />
            <img
              src={lakeVeranda}
              alt="Varanda real com vista para o lago"
              loading="lazy"
              width={1280}
              height={720}
              className="col-span-2 aspect-[16/9] w-full rounded-lg object-cover shadow-lg sm:col-span-1"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
