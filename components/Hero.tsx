"use client";

import { Check, Siren } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site } from "@/lib/site";

const capabilities = [
  "Yerinde akü takviyesi",
  "Lastik değişimi",
  "Güvenli çekici",
];

const stats = [
  { value: "7/24", label: "Yol yardım hattı" },
  { value: "15+", label: "Yıllık tecrübe" },
  { value: "25 dk", label: "Ort. varış" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <Image
        src="/garage.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/82 to-zinc-950/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/15 to-zinc-950/55" />
      <div className="hero-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-yellow-400">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            Açık · Acil ekip hazır
          </p>
          <h1 className="mt-5 max-w-xl font-display text-[2.6rem] font-bold leading-[0.95] tracking-wide text-white sm:text-6xl lg:text-7xl">
            <span className="text-yellow-400">Yolda Kalmayın,</span>{" "}
            Aracınızı Güvenle Ustalara Bırakın.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            7/24 acil yol yardım, garantili motor ve mekanik bakım.
            Profesyonel kadromuzla hizmetinizdeyiz.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${site.emergencyTel}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-red-500 px-5 text-base font-semibold text-white shadow-lg shadow-red-500/25 transition hover:bg-red-600"
            >
              <Siren className="h-5 w-5" aria-hidden="true" />
              Acil Çekici Çağır
            </a>
            <a
              href="#iletisim"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-yellow-400 px-5 text-base font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-zinc-950"
            >
              Servis Randevusu Al
            </a>
          </div>
          <p className="mt-4 text-sm text-zinc-400">
            Arama ücretsizdir · İstanbul içi ortalama varış 25 dakika
          </p>

          <dl className="mt-10 grid grid-cols-3 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/70">
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 py-4 sm:px-5">
                <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-zinc-400 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.aside
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-6"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              Canlı hat
            </p>
            <p className="inline-flex items-center gap-2 text-xs font-medium text-yellow-400">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Ekip hazır
            </p>
          </div>
          <p className="mt-6 font-display text-6xl font-bold leading-none text-white">
            22
            <span className="ml-1 text-2xl text-yellow-400">dk</span>
          </p>
          <p className="mt-2 text-sm text-zinc-400">Ortalama çekici varış süresi</p>
          <ul className="mt-6 space-y-3">
            {capabilities.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-200">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400/15 text-yellow-400">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={site.whatsappEmergency}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-yellow-400 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp&apos;tan konum gönder
          </a>
        </motion.aside>
      </div>
      <div className="hazard-stripe relative h-2.5" />
    </section>
  );
}
