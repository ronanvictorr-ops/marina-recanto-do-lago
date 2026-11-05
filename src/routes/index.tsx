import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Header } from "@/components/marina/Header";
import { Hero } from "@/components/marina/Hero";
import { About } from "@/components/marina/About";
import { Services } from "@/components/marina/Services";
import { Gallery } from "@/components/marina/Gallery";
import { Lodging } from "@/components/marina/Lodging";
import { LocationSection } from "@/components/marina/LocationSection";
import { Footer } from "@/components/marina/Footer";
import { WhatsAppFloat } from "@/components/marina/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marina Recanto do Lago | Caldas Novas" },
      {
        name: "description",
        content:
          "Guarda de barcos em berços molhados e pátio seco, lançamento de embarcações e hotelaria à beira do lago em Caldas Novas – GO. Fale conosco pelo WhatsApp.",
      },
      { property: "og:title", content: "Marina Recanto do Lago | Guarda de Barcos e Hotelaria" },
      {
        property: "og:description",
        content:
          "Estrutura completa de guarda de embarcações e hospedagem à beira do lago em Caldas Novas – GO.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Lodging />
          <LocationSection />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LanguageProvider>
  );
}
