import { useLang } from "@/lib/i18n";
import boatStorage from "@/assets/graded-boat-storage.jpg";
import boatStorageVideo from "@/assets/marina-guarda-barcos.mp4";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="rounded-xl border-2 border-primary p-3">
            <video
              className="block aspect-[4/3] w-full rounded-lg object-cover shadow-xl"
              poster={boatStorage}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Vídeo real do hangar e das embarcações guardadas na Marina Recanto do Lago"
            >
              <source src={boatStorageVideo} type="video/mp4" />
            </video>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-xs font-bold tracking-normal text-primary uppercase">
            {t.about.kicker}
          </p>
          <h2 className="font-display mt-3 text-3xl leading-tight font-extrabold text-foreground sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {t.about.p1}
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t.about.p2}
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {t.about.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-lg font-bold text-primary sm:text-xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs leading-snug font-medium tracking-wide text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
