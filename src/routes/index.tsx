import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  FileSignature,
  HandCoins,
  Images,
  Search,
} from "lucide-react";

import { ImageSlot } from "@/components/ImageSlot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Waaloge — Le logement étudiant en toute confiance" },
      {
        name: "description",
        content:
          "Trouve, visite et réserve ton logement étudiant à Lokossa en toute sécurité. Visite, contrat physique et paiement sur place pour zéro arnaque.",
      },
      { property: "og:title", content: "Waaloge — Le logement étudiant en toute confiance" },
      {
        property: "og:description",
        content:
          "Logements étudiants vérifiés à Lokossa : visite avant paiement, contrat physique, paiement en main propre.",
      },
    ],
  }),
  component: Landing,
});

import heroStudio from "@/assets/hero-studio.jpg";
import heroChambre from "@/assets/hero-chambre.jpg";
import heroColoc from "@/assets/hero-coloc.jpg";
import stepParcours from "@/assets/step-parcours.jpg";
import stepVisite from "@/assets/step-visite.jpg";
import stepSignature from "@/assets/step-signature.jpg";
import stepPaiement from "@/assets/step-paiement.jpg";
import listingOuando from "@/assets/listing-ouando.jpg";
import listingAgonve from "@/assets/listing-agonve.jpg";
import listingDjegbadji from "@/assets/listing-djegbadji.jpg";

const heroSlides = [
  { label: "Studio étudiant à Lokossa", src: heroStudio },
  { label: "Chambre meublée à Lokossa", src: heroChambre },
  { label: "Coloc étudiante à Lokossa", src: heroColoc },
];

const steps = [
  {
    n: "01",
    title: "Tu parcours",
    text: "Studios, chambres, colocs — photos vraies, prix nets.",
    slot: "Étudiant qui parcourt les logements",
    src: stepParcours,
  },
  {
    n: "02",
    title: "Tu visites",
    text: "Rendez-vous fixé, tu vois de tes yeux.",
    slot: "Visite d'un logement",
    src: stepVisite,
  },
  {
    n: "03",
    title: "Tu signes",
    text: "Le contrat, sur papier. Personne ne triche.",
    slot: "Signature du contrat papier",
    src: stepSignature,
  },
  {
    n: "04",
    title: "Tu payes",
    text: "De main à main. Zéro appli, zéro arnaque.",
    slot: "Paiement en main propre",
    src: stepPaiement,
  },
];

const listings = [
  {
    title: "Studio",
    quartier: "Ouando",
    prix: "35 000 F",
    slot: "Studio à Ouando",
    src: listingOuando,
  },
  {
    title: "Chambre",
    quartier: "Agonvè",
    prix: "18 000 F",
    slot: "Chambre à Agonvè",
    src: listingAgonve,
  },
  {
    title: "T2",
    quartier: "Djègbadji",
    prix: "55 000 F",
    slot: "T2 à Djègbadji",
    src: listingDjegbadji,
  },
];


const reasons = [
  {
    icon: Eye,
    title: "Visite avant paiement",
    text: "Tu ne donnes pas un franc avant d'avoir vu la chambre.",
  },
  {
    icon: FileSignature,
    title: "Contrat physique sécurisé",
    text: "Un papier signé par les deux parties, avec témoin.",
  },
  {
    icon: Images,
    title: "Photos vérifiées",
    text: "Chaque annonce est passée sur place par notre équipe.",
  },
  {
    icon: HandCoins,
    title: "Sans commission cachée",
    text: "Le prix affiché est le prix payé. Rien en plus.",
  },
];

const testimonials = [
  {
    quote: "On m'avait promis un studio. J'ai visité, j'ai signé, j'ai payé. Fini l'angoisse.",
    author: "Mariam, L2 Économie · Lokossa",
  },
  {
    quote: "Chambre trouvée à Ouèga en trois jours. Le contrat était prêt, tout net.",
    author: "Rachid, L1 Droit · Lokossa",
  },
  {
    quote: "Zéro avance en ligne. J'ai payé sur place, devant le propriétaire.",
    author: "Céline, L3 Gestion · Lokossa",
  },
  {
    quote: "La coloc au Centre, on l'a visitée à deux. Prix net, aucune surprise.",
    author: "Josué, L2 Informatique · Lokossa",
  },
];

const faq = [
  {
    q: "Waaloge, ça coûte combien ?",
    a: "Rien pour toi. Parcourir, visiter et signer via Waaloge est gratuit pour les étudiants — aucune commission cachée.",
  },
  {
    q: "Comment vous vérifiez les logements ?",
    a: "Un membre de l'équipe passe sur place, photographie la chambre et contrôle l'identité du propriétaire avant publication.",
  },
  {
    q: "Je peux annuler après la visite ?",
    a: "Oui. Tant que le contrat papier n'est pas signé, tu ne t'engages à rien et tu n'as rien payé.",
  },
];

function useAutoIndex(length: number, delay = 5000) {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % length), [length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + length) % length), [length]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % length), delay);
    return () => clearInterval(id);
  }, [length, delay, index]);

  return { index, setIndex, next, prev };
}

function Kicker({ children, tone = "sage" }: { children: string; tone?: "sage" | "terracotta" }) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.28em] ${
        tone === "sage" ? "text-sage" : "text-terracotta"
      }`}
    >
      {children}
    </p>
  );
}

function Landing() {
  const hero = useAutoIndex(heroSlides.length, 4500);
  const quote = useAutoIndex(testimonials.length, 6500);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-terracotta" />
            <span className="font-display text-xl">Waaloge</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#logements" className="hover:text-terracotta">
              Explorer
            </a>
            <a href="#concept" className="hover:text-terracotta">
              Le concept
            </a>
            <a href="#faq" className="hover:text-terracotta">
              Aide
            </a>
          </nav>
          <Button variant="outline" className="rounded-full border-foreground/20 px-5">
            Connexion
          </Button>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h1 className="max-w-xl text-5xl leading-[1.05] sm:text-6xl">
                Le logement étudiant en toute{" "}
                <span className="relative whitespace-nowrap text-terracotta">
                  confiance
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-0 h-3 w-full text-terracotta"
                  >
                    <path
                      d="M2 8c34-6 70 4 104-1s58-5 92 1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h1>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Trouve, visite et réserve ton logement en toute sécurité. Paiement 100 % physique
                pour zéro arnaque.
              </p>

              <form
                className="mt-8 flex max-w-md items-center gap-2 rounded-full border border-border bg-card p-2 shadow-soft"
                onSubmit={(e) => e.preventDefault()}
              >
                <Search className="ml-3 size-4 shrink-0 text-muted-foreground" strokeWidth={2.75} />
                <Input
                  aria-label="Où cherches-tu ?"
                  placeholder="Où cherches-tu ?"
                  className="border-0 bg-transparent shadow-none focus-visible:ring-0"
                />
                <Button className="rounded-full px-6">Rechercher</Button>
              </form>

              <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
                {["Visite du logement", "Contrat physique", "Paiement sur place"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="size-3.5 rounded-full border-2 border-terracotta" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="dotted-crown rounded-full p-5">
                <div className="relative aspect-square">
                  {heroSlides.map((slide, i) => (
                    <ImageSlot
                      key={slide.label}
                      label={slide.label}
                      src={slide.src}
                      priority={i === 0}
                      round
                      className={`absolute inset-0 size-full transition-opacity duration-700 ${
                        i === hero.index ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                aria-label="Photo précédente"
                onClick={hero.prev}
                className="absolute left-0 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-colors hover:bg-secondary"
              >
                <ChevronLeft className="size-4" strokeWidth={2.75} />
              </button>
              <button
                type="button"
                aria-label="Photo suivante"
                onClick={hero.next}
                className="absolute right-0 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-terracotta text-terracotta-foreground shadow-soft transition-opacity hover:opacity-90"
              >
                <ChevronRight className="size-4" strokeWidth={2.75} />
              </button>

              <div className="mt-6 flex justify-center gap-2 sm:absolute sm:bottom-14 sm:left-[38%] sm:mt-0 sm:-translate-x-1/2">
                {heroSlides.map((slide, i) => (
                  <button
                    key={slide.label}
                    type="button"
                    aria-label={`Aller à la photo ${i + 1}`}
                    onClick={() => hero.setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === hero.index ? "w-6 bg-terracotta" : "w-2 bg-foreground/20"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft sm:absolute sm:-bottom-6 sm:right-0 sm:mt-0">

                <div className="flex -space-x-2">
                  <span className="size-7 rounded-full border-2 border-card bg-sand" />
                  <span className="size-7 rounded-full border-2 border-card bg-terracotta" />
                  <span className="size-7 rounded-full border-2 border-card bg-sage" />
                </div>
                <div className="text-xs leading-tight">
                  <p className="font-bold">+ 2 000 étudiants</p>
                  <p className="text-muted-foreground">nous font confiance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMMENT ÇA SE PASSE */}
        <section id="concept" className="bg-sand py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Kicker>Comment ça se passe</Kicker>
            <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
              Quatre moments, quatre gestes concrets.
            </h2>

            <div className="mt-16 space-y-14">
              {steps.map((step, i) => {
                const flipped = i % 2 === 1;
                return (
                  <div
                    key={step.n}
                    className={`flex flex-col items-center gap-8 sm:flex-row ${
                      flipped ? "sm:flex-row-reverse sm:text-right" : ""
                    }`}
                  >
                    <div className="relative shrink-0">
                      <ImageSlot label={step.slot} src={step.src} round className="size-40" />
                      <span
                        className={`absolute -top-2 flex size-11 items-center justify-center rounded-full bg-card font-display text-sm text-terracotta shadow-soft ${
                          flipped ? "-left-2" : "-right-2"
                        }`}
                      >
                        {step.n}
                      </span>
                    </div>
                    <div className={`max-w-sm ${flipped ? "sm:ml-auto" : ""}`}>
                      <h3 className="text-2xl">{step.title}</h3>
                      <p className="mt-3 text-muted-foreground">{step.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LOGEMENTS EN VEDETTE */}
        <section id="logements" className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <Kicker tone="terracotta">Quelques adresses</Kicker>
          <h2 className="mt-4 text-3xl sm:text-4xl">Fraîchement ajoutés</h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((l) => (
              <article
                key={l.slot}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <ImageSlot label={l.slot} className="aspect-[4/3] w-full rounded-none" />
                <div className="p-5">
                  <h3 className="text-lg">
                    {l.title} · {l.quartier}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">Lokossa · {l.quartier}</p>
                  <p className="mt-3 font-display text-terracotta">{l.prix} / mois</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* POURQUOI WAALOGE */}
        <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10 lg:pb-28">
          <Kicker>Pourquoi Waaloge</Kicker>
          <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">L'arnaque n'a plus de place ici.</h2>

          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sand text-terracotta">
                  <Icon className="size-5" strokeWidth={2.75} />
                </span>
                <div>
                  <h3 className="text-xl">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TÉMOIGNAGES */}
        <section className="bg-sage/20 py-20 lg:py-28">
          <div className="relative mx-auto max-w-3xl px-14 text-center lg:px-20">
            <Kicker>Ils ont trouvé chez Waaloge</Kicker>
            <p aria-hidden="true" className="mt-4 font-display text-5xl text-sage">
              ”
            </p>
            <blockquote className="mt-2 font-display text-2xl leading-snug sm:text-3xl">
              {testimonials[quote.index]?.quote}
            </blockquote>
            <p className="mt-6 text-sm text-muted-foreground">
              — {testimonials[quote.index]?.author}
            </p>


            <button
              type="button"
              aria-label="Témoignage précédent"
              onClick={quote.prev}
              className="absolute left-0 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card shadow-soft"
            >
              <ChevronLeft className="size-4" strokeWidth={2.75} />
            </button>
            <button
              type="button"
              aria-label="Témoignage suivant"
              onClick={quote.next}
              className="absolute right-0 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-sage text-sage-foreground shadow-soft"
            >
              <ChevronRight className="size-4" strokeWidth={2.75} />
            </button>

            <div className="mt-10 flex justify-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.author}
                  type="button"
                  aria-label={`Témoignage ${i + 1}`}
                  onClick={() => quote.setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === quote.index ? "w-6 bg-sage" : "w-2 bg-sage/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
          <h2 className="text-3xl sm:text-4xl">Questions qu'on nous pose</h2>
          <Accordion type="single" collapsible className="mt-10">
            {faq.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* PROPRIÉTAIRES */}
        <section className="bg-sage/20">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <div>
              <h2 className="text-2xl">Vous avez une chambre libre à Lokossa ?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Publiez-la, on la vérifie, les étudiants viennent visiter.
              </p>
            </div>
            <Button variant="outline" className="rounded-full border-foreground/20 px-6">
              Publier un logement
            </Button>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-terracotta py-20 text-center text-terracotta-foreground lg:py-24">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="text-3xl sm:text-4xl">Prêt à emménager ?</h2>
            <p className="mt-3 text-sm opacity-90">
              Ta prochaine chambre est peut-être à deux rues.
            </p>
            <Button variant="secondary" className="mt-8 rounded-full px-8">
              Commencer à chercher
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-ink py-12 text-sand">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-start sm:justify-between lg:px-10">
          <div>
            <p className="font-display text-xl">Waaloge</p>
            <p className="mt-2 text-sm opacity-70">Lokossa · Bénin</p>
            <p className="mt-1 text-sm opacity-70">Le logement étudiant, en vrai.</p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm opacity-80">
            <a href="#faq">Contact</a>
            <span aria-hidden="true">·</span>
            <a href="#faq">WhatsApp</a>
            <span aria-hidden="true">·</span>
            <a href="#faq">Propriétaires</a>
            <span aria-hidden="true">·</span>
            <a href="#faq">CGU</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
