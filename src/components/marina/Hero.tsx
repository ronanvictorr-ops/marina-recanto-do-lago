import { ChevronDown } from "lucide-react";
import { useLang, whatsappLink } from "@/lib/i18n";
import heroImg from "@/assets/graded-hero-lake.jpg";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative flex h-[100svh] min-h-[660px] items-center sm:h-[84svh] sm:max-h-[850px]">
      <img
        src={heroImg}
        alt="Vista real do lago na Marina Recanto do Lago"
        className="hero-photo absolute inset-0 h-full w-full object-cover object-center"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-shade" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6">
        <div className="max-w-2xl border-l-4 border-brand-green pl-6 sm:pl-10">
          <p className="text-sm font-semibold tracking-normal text-primary-foreground/90 uppercase">
            {t.hero.kicker}
          </p>
          <h1 className="font-display mt-3 text-4xl leading-[1.05] font-black tracking-normal text-on-photo uppercase sm:text-6xl">
            Marina
            <br />
            Recanto
            <span className="text-brand-green">
              {" "}
              do Lago
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base text-on-photo/85 sm:text-lg">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink(t.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-bold tracking-normal text-primary-foreground uppercase transition-transform hover:scale-[1.03]"
            >
              {t.hero.ctaWhatsapp}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border-2 border-on-photo/70 px-6 py-3 text-sm font-bold tracking-normal text-on-photo uppercase transition-colors hover:bg-on-photo/10"
            >
              {t.hero.ctaServices}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-on-photo/70 transition-colors hover:text-on-photo"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}
