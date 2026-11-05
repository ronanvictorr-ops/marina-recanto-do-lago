import { Instagram, Phone } from "lucide-react";
import { CONTACT, useLang } from "@/lib/i18n";
import marinaLogo from "@/assets/marina-logo-oficial.jpg";
import { Reveal } from "./Reveal";

export function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact" className="bg-navy pt-20 pb-10 text-on-photo sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-normal text-primary uppercase">
              {t.contact.kicker}
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-3 text-on-photo/70">{t.contact.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <div className="rounded-lg border border-on-photo/10 bg-on-photo/5 p-7">
              <p className="text-xs font-bold tracking-normal text-on-photo/60 uppercase">
                {t.contact.phones}
              </p>
              <div className="mt-4 space-y-3">
                {CONTACT.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`https://wa.me/${p.wa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg font-semibold transition-colors hover:text-primary"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-lg border border-on-photo/10 bg-on-photo/5 p-7">
              <p className="text-xs font-bold tracking-normal text-on-photo/60 uppercase">
                Instagram
              </p>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-3 text-lg font-semibold transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5 text-primary" />
                @marinarecantodolago
              </a>
              <p className="mt-3 text-sm text-on-photo/60">
                {t.contact.instagram}
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-lg border border-on-photo/10 bg-on-photo/5 p-7">
              <p className="text-xs font-bold tracking-normal text-on-photo/60 uppercase">
                {t.location.addressLabel}
              </p>
              <div className="mt-4 space-y-1">
                {t.location.address.map((line) => (
                  <p key={line} className="text-on-photo/85">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-on-photo/10 pt-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="overflow-hidden rounded-lg bg-on-photo p-1">
              <img
                src={marinaLogo}
                alt="Marina Recanto do Lago"
                className="h-8 w-8 object-contain"
              />
            </span>
            <span className="font-display text-xs font-bold tracking-normal uppercase">
              Marina Recanto do Lago
            </span>
          </div>
          <p className="text-xs text-on-photo/50">
            © {new Date().getFullYear()} Marina Recanto do Lago.{" "}
            {t.contact.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
