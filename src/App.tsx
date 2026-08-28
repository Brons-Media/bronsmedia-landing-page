import { ArrowRight, XCircle } from "lucide-react";

const logoUrl = "https://www.bronsmedia.se/wp-content/uploads/2026/06/brons-media-logo-neg.webp";
const boxingUrl = "https://www.bronsmedia.se/wp-content/uploads/2026/06/hero-boxing.webp";
const f1Url = "https://www.bronsmedia.se/wp-content/uploads/2026/06/hero-f1.webp";
const climbingUrl = "https://www.bronsmedia.se/wp-content/uploads/2026/06/hero-climbing.webp";

const deliverables = [
  {
    title: "Målgruppsanalys",
    body: "Vi kartlägger vilka som faktiskt köper, var de finns och vad som får dem att agera.",
  },
  {
    title: "Kanalstrategi",
    body: "Meta, LinkedIn och programmatiska köp vägs mot varandra utifrån mål, inte vana.",
  },
  {
    title: "Budskapsplattform",
    body: "Ett budskap som håller ihop i alla kanaler och tål att upprepas utan att tröttna.",
  },
  {
    title: "Medieplan med tydliga mål",
    body: "Budget, period och KPI:er på plats innan första kronan investeras.",
  },
];

const steps = [
  { n: "01", t: "Nuläge", d: "Vi går igenom affärsmål, tidigare investeringar och resultat." },
  { n: "02", t: "Strategi", d: "Målgrupper, budskap och kanalmix sätts ihop till en plan." },
  { n: "03", t: "Aktivering", d: "Vi köper media programmatiskt och i sociala kanaler." },
  { n: "04", t: "Uppföljning", d: "Löpande optimering mot de mål vi kom överens om." },
];

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <img src={logoUrl} alt="Brons Media" className="h-8 w-auto md:h-10" />
          <a
            href="#kontakt"
            className="hidden rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary md:inline-flex"
          >
            Kontakta oss
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={boxingUrl}
          alt="Ett team från Brons Media coachar en företagsledare i ringen"
          className="absolute inset-0 h-full w-full object-contain object-center"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-36 md:pb-32 md:pt-48">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Mediabruset ökar för varje dag
            </p>
            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
              När du igenom
              <span className="block text-primary">mediabruset?</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Det är svårt att synas när konkurrenterna om uppmärksamheten är stenhård. Vi ser till
              att din investering hamnar där den gör skillnad.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-3 rounded-md bg-primary px-7 py-4 text-base font-semibold uppercase tracking-wide text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                Boka ett strategisamtal
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#erbjudande" className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline">
                Läs mer om mediastrategi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Erbjudande */}
      <section id="erbjudande" className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="h-px w-16 bg-primary" />
            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-foreground">
              Vårt erbjudande
            </p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-primary md:text-5xl">
              Mediastrategi
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Vi hittar rätt kanaler, budskap och målgrupper för att du ska synas i rätt sammanhang
              och sticka ut.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {deliverables.map((d) => (
              <div
                key={d.title}
                className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/60"
              >
                <div className="flex items-start gap-4">
                  <XCircle className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">{d.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{d.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kanaler */}
      <section className="border-t border-border bg-card/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-xl text-3xl font-black uppercase tracking-tight md:text-4xl">
            Vi köper media där din målgrupp faktiskt är
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                img: f1Url,
                alt: "Depåstopp där ett team byter däck på en formelbil",
                t: "Sociala medier",
                d: "Meta och LinkedIn med annonser byggda för respektive plattforms logik.",
              },
              {
                img: climbingUrl,
                alt: "Klättrare säkrar en företagsledare på en klippvägg i solnedgång",
                t: "Programmatiska köp",
                d: "Display, video och native mot precisa segment i realtid.",
              },
              {
                img: boxingUrl,
                alt: "Team i boxningsring kring en företagsledare",
                t: "Kreativ produktion",
                d: "Koncept och material som håller genom hela kampanjen.",
              },
            ].map((c) => (
              <article key={c.t} className="overflow-hidden rounded-lg border border-border bg-card">
                <img src={c.img} alt={c.alt} className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{c.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">Så jobbar vi</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n}>
                <span className="text-4xl font-black text-primary">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="border-t border-border py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              Ta ronden.
              <span className="block text-primary">Vi står i din hörna.</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Lämna dina uppgifter så hör vi av oss inom en arbetsdag för ett kostnadsfritt
              strategisamtal.
            </p>
          </div>
          <form
            className="rounded-lg border border-border bg-card p-6 shadow-elegant"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4">
              {[
                { id: "namn", label: "Namn", type: "text" },
                { id: "foretag", label: "Företag", type: "text" },
                { id: "epost", label: "E-post", type: "email" },
                { id: "telefon", label: "Telefon", type: "tel" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="text-sm font-medium">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required={f.id !== "telefon"}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-3 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Läs mer <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <img src={logoUrl} alt="Brons Media" className="h-7 w-auto" />
          <p>© {new Date().getFullYear()} Brons Media. Mediabyrån som tar dig genom bruset.</p>
        </div>
      </footer>
    </main>
  );
}
