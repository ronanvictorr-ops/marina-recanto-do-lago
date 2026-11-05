import { ExternalLink, MapPin } from "lucide-react";
import { CONTACT, useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function LocationSection() {
  const { t } = useLang();

  return (
    <section id="location" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs font-bold tracking-normal text-primary uppercase">
            {t.location.kicker}
          </p>
          <h2 className="font-display mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            {t.location.title}
          </h2>
          <div className="mt-8 flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md brand-gradient">
              <MapPin className="h-5 w-5 text-on-photo" />
            </span>
            <div>
              <p className="text-xs font-bold tracking-normal text-muted-foreground uppercase">
                {t.location.addressLabel}
              </p>
              {t.location.address.map((line) => (
                <p key={line} className="mt-1 text-foreground">
                  {line}
                </p>
              ))}
            </div>
          </div>
          <a
            href={CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md border-2 border-primary px-6 py-3 text-sm font-bold tracking-normal text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {t.location.mapsCta}
            <ExternalLink className="h-4 w-4" />
          </a>
        </Reveal>
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-lg shadow-xl">
            <iframe
              title="Mapa da Marina Recanto do Lago"
              src={CONTACT.mapsEmbed}
              className="h-[380px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
