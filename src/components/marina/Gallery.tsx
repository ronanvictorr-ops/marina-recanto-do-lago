import { useLang } from "@/lib/i18n";
import marinaEntrance from "@/assets/graded-about-sign.jpg";
import marinaPier from "@/assets/graded-pier-hotelaria.jpg";
import boatStorage from "@/assets/graded-boat-storage.jpg";
import marinaHangar from "@/assets/graded-hangar-aerial.jpg";
import hotelRoom from "@/assets/graded-room-alt.jpg";
import hotelPool from "@/assets/graded-pool-lake.jpg";
import { Reveal } from "./Reveal";

export function Gallery() {
  const { t } = useLang();

  const images = [
    { src: marinaEntrance, alt: "Entrada da Marina Recanto do Lago" },
    { src: marinaPier, alt: "Píer e hotelaria da Marina Recanto do Lago" },
    { src: boatStorage, alt: "Embarcações reais no pátio seco coberto" },
    { src: marinaHangar, alt: "Vista aérea real do hangar da marina" },
    { src: hotelRoom, alt: "Quarto real da hotelaria" },
    { src: hotelPool, alt: "Piscina real com vista para o lago" },
  ];

  return (
    <section id="gallery" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-normal text-primary uppercase">
              {t.gallery.kicker}
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
              {t.gallery.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{t.gallery.subtitle}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <Reveal key={img.alt} delay={i * 60}>
              <div className="group overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
