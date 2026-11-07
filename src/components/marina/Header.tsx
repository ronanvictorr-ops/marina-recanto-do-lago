import { Button } from "@/components/ui/button";
import { useEffect, useState, type MouseEvent } from "react";
import { Globe, Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import marinaLogo from "@/assets/marina-logo-oficial.jpg";

const anchors = ["about", "services", "lodging", "gallery", "location", "contact"] as const;

export function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const labels = [
    t.nav.about,
    t.nav.services,
    t.nav.lodging,
    t.nav.gallery,
    t.nav.location,
    t.nav.contact,
  ];

  const scrollToAnchor = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();

    const section = document.getElementById(id);
    if (!section) return;

    const headerBar = document.querySelector<HTMLElement>("header > div");
    const content =
      id === "top"
        ? section
        : section.querySelector<HTMLElement>(":scope > div") ?? section;
    const headerHeight = headerBar?.getBoundingClientRect().height ?? 88;
    const top =
      window.scrollY + content.getBoundingClientRect().top - headerHeight - 24;

    // The URL hash is intentionally not updated because the router would
    // perform a second, conflicting scroll to the section wrapper.
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    root.style.scrollBehavior = previousScrollBehavior;
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/95 shadow-md backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-[padding] duration-300 sm:px-6 ${
          scrolled || open ? "py-1.5" : "py-3"
        }`}
      >
        <a
          href="#top"
          onClick={(event) => scrollToAnchor(event, "top")}
          className="flex items-center gap-3"
        >
          <span className="overflow-hidden rounded-lg bg-on-photo p-1 shadow-sm">
            <img
              src={marinaLogo}
              alt="Marina Recanto do Lago"
              className={`object-contain transition-[width,height] duration-300 ${
                scrolled || open ? "h-12 w-12" : "h-14 w-14"
              }`}
            />
          </span>
          <span
            className={`font-display text-sm font-bold tracking-normal uppercase ${
              scrolled || open ? "text-foreground" : "text-on-photo"
            }`}
          >
            Marina
            <span className="block text-[10px] font-medium tracking-normal">
              Recanto do Lago
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {anchors.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(event) => scrollToAnchor(event, id)}
              className={`text-xs font-semibold tracking-normal uppercase transition-colors hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-on-photo/90"
              }`}
            >
              {labels[i]}
            </a>
          ))}
          <Button variant="ghost"
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold tracking-normal uppercase transition-colors ${
              scrolled
                ? "border-border text-foreground hover:bg-secondary"
                : "border-on-photo/50 text-on-photo hover:bg-on-photo/10"
            }`}
            aria-label="Switch language" title="Português / English"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "pt" ? "EN" : "PT"}
          </Button>
        </nav>

        <Button variant="ghost"
          className={`lg:hidden ${scrolled || open ? "text-foreground" : "text-on-photo"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {anchors.map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => scrollToAnchor(event, id)}
                className="rounded-md px-3 py-2.5 text-sm font-semibold tracking-normal text-foreground uppercase hover:bg-secondary"
              >
                {labels[i]}
              </a>
            ))}
            <Button variant="ghost"
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="mt-2 flex items-center gap-2 rounded-md border border-border px-3 py-2.5 text-sm font-bold uppercase"
            >
              <Globe className="h-4 w-4" />
              {lang === "pt" ? "English" : "Português"}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
