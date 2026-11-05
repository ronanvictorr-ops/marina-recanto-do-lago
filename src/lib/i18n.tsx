import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "pt" | "en";

const pt = {
  nav: {
    about: "A Marina",
    services: "Serviços",
    lodging: "Hotelaria",
    gallery: "Galeria",
    location: "Localização",
    contact: "Contato",
  },
  hero: {
    kicker: "Bem-vindo à",
    title: "MARINA RECANTO DO LAGO",
    subtitle:
      "Guarda de barcos e hotelaria à beira do lago, em Caldas Novas – GO.",
    ctaWhatsapp: "Fale no WhatsApp",
    ctaServices: "Nossos serviços",
  },
  about: {
    kicker: "A Marina",
    title: "O porto seguro do seu barco e o seu refúgio à beira do lago",
    p1: "A Marina Recanto do Lago nasceu da paixão pela vida náutica e pela beleza única do lago de Caldas Novas. Unimos infraestrutura completa de guarda de embarcações a uma hotelaria acolhedora, para que você e sua família vivam o lago com tranquilidade, segurança e conforto.",
    p2: "Nossa equipe cuida de cada detalhe: da retirada e lançamento do seu barco à sua estadia. Aqui, o seu único compromisso é aproveitar a água.",
    stats: [
      { value: "Náutica", label: "guarda de barcos" },
      { value: "Hotelaria", label: "sua estadia" },
      { value: "Caldas Novas", label: "Goiás" },
    ],
  },
  services: {
    kicker: "O que oferecemos",
    title: "Nossos Serviços",
    subtitle: "Estrutura completa para você e sua embarcação",
    items: [
      {
        icon: "waves",
        title: "Berços molhados",
        desc: "Vagas de atracação seguras em píer estruturado, com fácil acesso e apoio da nossa equipe.",
      },
      {
        icon: "anchor",
        title: "Guarda em pátio seco",
        desc: "Hangaragem coberta e organizada que protege sua embarcação do sol e da chuva o ano todo.",
      },
      {
        icon: "forklift",
        title: "Lançamento e retirada",
        desc: "Descida e subida de embarcações com equipamentos adequados e equipe experiente.",
      },
      {
        icon: "bed",
        title: "Hotelaria",
        desc: "Hospedagem confortável à beira do lago, para viver dias inesquecíveis com a família.",
      },
      {
        icon: "shield",
        title: "Segurança 24h",
        desc: "Vigilância e monitoramento ininterruptos para a sua total tranquilidade.",
      },
      {
        icon: "wrench",
        title: "Apoio náutico",
        desc: "Suporte e manutenção básica para deixar sua embarcação sempre pronta para navegar.",
      },
    ],
  },
  gallery: {
    kicker: "Conheça",
    title: "Galeria",
    subtitle: "Um pouco do nosso paraíso à beira do lago",
  },
  lodging: {
    kicker: "Hotelaria",
    title: "Hospede-se à beira do lago",
    p1: "Acordar com a vista do lago não tem preço. Nossa hotelaria oferece acomodações aconchegantes, piscina com vista panorâmica e acesso direto ao píer — perfeito para quem quer unir descanso e náutica no mesmo lugar.",
    features: [
      "Acomodações com vista para o lago",
      "Piscina e área de lazer",
      "Acesso direto ao píer",
      "Café da manhã",
    ],
    cta: "Reserve pelo WhatsApp",
  },
  location: {
    kicker: "Como chegar",
    title: "Localização",
    addressLabel: "Endereço",
    address: [
      "Av. das Garças, Qd. D, Lt. 10",
      "Recanto das Garças",
      "Caldas Novas – GO, 75690-000",
    ],
    mapsCta: "Abrir no Google Maps",
  },
  contact: {
    kicker: "Fale conosco",
    title: "Contato",
    subtitle:
      "Tire suas dúvidas, solicite um orçamento de guarda ou reserve sua hospedagem.",
    phones: "Telefones / WhatsApp",
    instagram: "Siga no Instagram",
    rights: "Todos os direitos reservados.",
  },
  whatsapp: {
    ariaLabel: "Falar no WhatsApp",
    message: "Olá! Vim pelo site da Marina Recanto do Lago e gostaria de mais informações.",
  },
};

export type Dict = typeof pt;

const en: Dict = {
  nav: {
    about: "The Marina",
    services: "Services",
    lodging: "Lodging",
    gallery: "Gallery",
    location: "Location",
    contact: "Contact",
  },
  hero: {
    kicker: "Welcome to",
    title: "MARINA RECANTO DO LAGO",
    subtitle: "Boat storage and lakeside lodging in Caldas Novas – GO, Brazil.",
    ctaWhatsapp: "Chat on WhatsApp",
    ctaServices: "Our services",
  },
  about: {
    kicker: "The Marina",
    title: "A safe harbor for your boat and your lakeside retreat",
    p1: "Marina Recanto do Lago was born from a passion for boating life and the unique beauty of the Caldas Novas lake. We combine complete boat storage infrastructure with welcoming lodging, so you and your family can enjoy the lake with peace of mind, safety and comfort.",
    p2: "Our team takes care of every detail: from hauling and launching your boat to your stay. Here, your only commitment is to enjoy the water.",
    stats: [
      { value: "Boating", label: "boat storage" },
      { value: "Lodging", label: "your stay" },
      { value: "Caldas Novas", label: "Goiás, Brazil" },
    ],
  },
  services: {
    kicker: "What we offer",
    title: "Our Services",
    subtitle: "Complete infrastructure for you and your boat",
    items: [
      {
        icon: "waves",
        title: "Wet berths",
        desc: "Safe mooring berths on a well-built pier, with easy access and staff support.",
      },
      {
        icon: "anchor",
        title: "Dry storage",
        desc: "Covered, organized rack storage that protects your boat from sun and rain all year round.",
      },
      {
        icon: "forklift",
        title: "Haul & launch",
        desc: "Launching and hauling of boats with proper equipment and an experienced crew.",
      },
      {
        icon: "bed",
        title: "Lodging",
        desc: "Comfortable lakeside accommodation for unforgettable days with your family.",
      },
      {
        icon: "shield",
        title: "24h security",
        desc: "Round-the-clock surveillance and monitoring for your complete peace of mind.",
      },
      {
        icon: "wrench",
        title: "Nautical support",
        desc: "Support and basic maintenance to keep your boat always ready to sail.",
      },
    ],
  },
  gallery: {
    kicker: "Explore",
    title: "Gallery",
    subtitle: "A glimpse of our lakeside paradise",
  },
  lodging: {
    kicker: "Lodging",
    title: "Stay by the lake",
    p1: "Waking up to a lake view is priceless. Our lodging offers cozy rooms, a pool with panoramic views and direct pier access — perfect for combining rest and boating in one place.",
    features: [
      "Rooms with lake view",
      "Pool and leisure area",
      "Direct pier access",
      "Breakfast included",
    ],
    cta: "Book via WhatsApp",
  },
  location: {
    kicker: "How to get here",
    title: "Location",
    addressLabel: "Address",
    address: [
      "Av. das Garças, Qd. D, Lt. 10",
      "Recanto das Garças",
      "Caldas Novas – GO, 75690-000, Brazil",
    ],
    mapsCta: "Open in Google Maps",
  },
  contact: {
    kicker: "Get in touch",
    title: "Contact",
    subtitle: "Ask questions, request a storage quote or book your stay.",
    phones: "Phones / WhatsApp",
    instagram: "Follow us on Instagram",
    rights: "All rights reserved.",
  },
  whatsapp: {
    ariaLabel: "Chat on WhatsApp",
    message: "Hello! I came from the Marina Recanto do Lago website and would like more information.",
  },
};

const dictionaries: Record<Lang, Dict> = { pt, en };

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
}

const LangContext = createContext<LangContextValue>({
  lang: "pt",
  setLang: () => {},
  t: pt,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  useEffect(() => { document.documentElement.lang = lang === "pt" ? "pt-BR" : "en"; }, [lang]);
  return (
    <LangContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export const CONTACT = {
  phones: [
    { label: "(62) 99902-1112", tel: "+5562999021112", wa: "5562999021112" },
    { label: "(64) 99279-3756", tel: "+5564992793756", wa: "5564992793756" },
  ],
  instagram: "https://www.instagram.com/marinarecantodolago/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+das+Gar%C3%A7as+Qd.+D+Lt.+10,+Recanto+das+Gar%C3%A7as,+Caldas+Novas,+GO,+75690-000",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+das+Gar%C3%A7as+Quadra+D+Lote+10,+Recanto+das+Gar%C3%A7as,+Caldas+Novas,+GO,+Brazil&output=embed",
};

export function whatsappLink(message: string, number = "5562999021112") {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
