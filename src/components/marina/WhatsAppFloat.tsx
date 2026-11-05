import { MessageCircle } from "lucide-react";
import { useLang, whatsappLink } from "@/lib/i18n";

export function WhatsAppFloat() {
  const { t } = useLang();
  return (
    <a
      href={whatsappLink(t.whatsapp.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.ariaLabel}
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-on-photo shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
