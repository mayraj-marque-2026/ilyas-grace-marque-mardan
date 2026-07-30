import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { readFile } from "node:fs/promises";

const getBusinessName = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const cfg = JSON.parse(await readFile("site.json", "utf8")) as {
      businessName?: string;
    };
    return cfg.businessName?.trim() ?? "";
  } catch {
    return "";
  }
});

export const Route = createFileRoute("/")({
  loader: () => getBusinessName(),
  component: Home,
});

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const WHATSAPP_URL = "https://wa.me/923138677761";
const PHONE = "0313 8677761";
const ADDRESS =
  "624H+346, Muqam Chowk, Training Ground Area, Defence Colony, Mardan, 23200";
const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=624H%2B346,+Muqam+Chowk,+Training+Ground+Area,+Defence+Colony,+Mardan,+23200&t=&z=15&ie=UTF8&iwloc=&output=embed";

const SERVICES = [
  { name: "Wedding & Engagement", icon: "💍" },
  { name: "Catering", icon: "🍽️" },
  { name: "Anniversary Party Planning", icon: "🎉" },
  { name: "Corporate & Conference", icon: "🏢" },
  { name: "Religious Wedding Planning", icon: "🕌" },
  { name: "Wedding Florist Services", icon: "💐" },
  { name: "Wedding Lighting Services", icon: "✨" },
  { name: "Waiter Service", icon: "🤵" },
  { name: "Wedding Budgeting", icon: "💰" },
];

const REVIEWS = [
  "Excellent service and management. Highly recommended for weddings and events.",
  "Clean environment with ample parking space and easy access.",
  "Beautiful venue with professional staff and excellent arrangements.",
];

/* ------------------------------------------------------------------ */
/*  Components                                                        */
/* ------------------------------------------------------------------ */

function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl hover:scale-105 ${className}`}
    >
      <WhatsAppIcon />
      Book Now on WhatsApp
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-4 text-center font-['Playfair_Display',serif] text-3xl font-bold text-navy-900 sm:text-4xl"
    >
      {children}
    </h2>
  );
}

function GoldDivider() {
  return (
    <div className="mx-auto mb-12 h-1 w-20 rounded-full bg-gold-500" />
  );
}

function StarRating() {
  return (
    <span className="inline-flex gap-1 text-gold-500" aria-label="4.2 stars">
      {[1, 2, 3, 4].map((i) => (
        <svg key={i} className="h-6 w-6 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="halfStar">
            <stop offset="20%" stopColor="currentColor" />
            <stop offset="20%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>
        <path
          fill="url(#halfStar)"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

function Home() {
  const businessName = Route.useLoaderData();
  const displayName = businessName || "Ilyas Grace Marquee";

  return (
    <div className="min-h-dvh">
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section
        id="hero"
        className="relative flex min-h-dvh flex-col items-center justify-center bg-navy-950 px-6 text-center"
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #f5c542 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 max-w-3xl">
          <p className="mb-3 font-['Inter',sans-serif] text-sm font-medium uppercase tracking-[0.25em] text-gold-400">
            Premium Banquet Hall
          </p>
          <h1 className="mb-6 font-['Playfair_Display',serif] text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
            {displayName}
          </h1>
          <p className="mb-10 text-lg text-gray-300 sm:text-xl">
            Premium Banquet Hall for Weddings &amp; Events
          </p>
          <WhatsAppButton />
        </div>

        {/* Scroll-down indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gold-400"
          aria-label="Scroll down"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </section>

      {/* ============================================================ */}
      {/*  ABOUT                                                       */}
      {/* ============================================================ */}
      <section id="about" className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading>About Us</SectionHeading>
          <GoldDivider />
          <p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
            Ilyas Grace Marquee is Mardan&apos;s premier banquet hall, offering
            elegant venues for weddings, corporate events, and special
            celebrations. With a 4.2-star rating from over 940 reviews, we pride
            ourselves on exceptional service, professional staff, and a clean,
            spacious environment with ample parking.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SERVICES                                                    */}
      {/* ============================================================ */}
      <section id="services" className="bg-gray-50 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading>Our Services</SectionHeading>
          <GoldDivider />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc) => (
              <div
                key={svc.name}
                className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-lg"
              >
                <span className="mb-4 block text-4xl">{svc.icon}</span>
                <h3 className="font-['Playfair_Display',serif] text-lg font-semibold text-navy-900">
                  {svc.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  REVIEWS                                                     */}
      {/* ============================================================ */}
      <section id="reviews" className="bg-navy-900 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-center font-['Playfair_Display',serif] text-3xl font-bold text-white sm:text-4xl">
            What Our Guests Say
          </h2>
          <div className="mx-auto mb-2 h-1 w-20 rounded-full bg-gold-500" />

          {/* Star rating highlight */}
          <div className="mb-8 mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
            <StarRating />
            <span className="text-2xl font-bold text-white">4.2</span>
            <span className="text-lg text-gray-400">
              &bull; 941 Reviews
            </span>
          </div>

          {/* Review cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            {REVIEWS.map((quote, i) => (
              <blockquote
                key={i}
                className="rounded-2xl border border-navy-800 bg-navy-800/50 p-6 text-left backdrop-blur-sm"
              >
                <svg
                  className="mb-3 h-6 w-6 text-gold-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mb-3 text-gray-300">{quote}</p>
                <footer className="text-sm font-medium text-gold-400">
                  — Google Review
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BOOKING / CONTACT                                           */}
      {/* ============================================================ */}
      <section id="booking" className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading>Book Your Event</SectionHeading>
          <GoldDivider />

          <div className="mb-10 space-y-5 text-left">
            {/* Address */}
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <span className="mt-0.5 shrink-0 text-2xl">📍</span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                  Address
                </p>
                <p className="text-gray-800">{ADDRESS}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <span className="mt-0.5 shrink-0 text-2xl">📞</span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                  Phone
                </p>
                <a href={`tel:${PHONE}`} className="text-gray-800 hover:text-gold-600">
                  {PHONE}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <span className="mt-0.5 shrink-0 text-2xl">💬</span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                  WhatsApp
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gold-600"
                >
                  {PHONE}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <span className="mt-0.5 shrink-0 text-2xl">🕐</span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                  Business Hours
                </p>
                <p className="text-gray-800">
                  <span className="font-semibold text-green-600">Open</span>{" "}
                  &bull; Closes 10 pm
                </p>
              </div>
            </div>
          </div>

          <WhatsAppButton className="mx-auto" />
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FOOTER                                                      */}
      {/* ============================================================ */}
      <footer className="bg-navy-950">
        {/* Google Map */}
        <div className="h-72 w-full sm:h-80">
          <iframe
            title="Ilyas Grace Marquee Location"
            src={MAP_EMBED_SRC}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-800 px-6 py-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {displayName}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}