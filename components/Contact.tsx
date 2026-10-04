import { Clock, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="iletisim" className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="İletişim"
          title="Atölye ve acil hat"
          description="Çekici için hemen arayın, bakım için randevu bırakın. Konum ve saatler aşağıda."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-zinc-400">Açık adres</p>
                  <p className="mt-1 text-base font-semibold text-white">{site.name} Garaj</p>
                  {site.addressLines.map((line) => (
                    <p key={line} className="text-zinc-300">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={`tel:${site.emergencyTel}`}
              className="flex items-center justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-red-500"
            >
              <span>
                <span className="block text-sm text-zinc-400">Acil yol yardım</span>
                <span className="mt-1 block text-xl font-semibold text-white">
                  {site.emergencyDisplay}
                </span>
              </span>
              <span className="inline-flex h-11 items-center gap-2 rounded-md bg-red-500 px-4 text-sm font-semibold text-white">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Ara
              </span>
            </a>

            <a
              href={`tel:${site.serviceTel}`}
              className="flex items-center justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-yellow-400"
            >
              <span>
                <span className="block text-sm text-zinc-400">Servis randevu</span>
                <span className="mt-1 block text-xl font-semibold text-white">
                  {site.serviceDisplay}
                </span>
              </span>
              <span className="inline-flex h-11 items-center gap-2 rounded-md border border-yellow-400 px-4 text-sm font-semibold text-yellow-400">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Ara
              </span>
            </a>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
                <Clock className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                Çalışma saatleri
              </div>
              <dl className="mt-4 space-y-2">
                {site.hours.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 text-sm">
                    <dt className="text-zinc-300">{row.label}</dt>
                    <dd className="font-medium text-white">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div
            className="relative min-h-80 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800"
            role="img"
            aria-label="Harita alanı"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute inset-x-0 top-1/3 h-4 bg-zinc-600/80" />
            <div className="absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-zinc-600/80" />
            <div className="absolute inset-x-8 top-2/3 h-2 bg-zinc-600/50" />
            <div className="absolute inset-y-8 left-[22%] w-2 bg-zinc-600/50" />
            <div className="absolute left-1/2 top-1/3 flex -translate-x-1/2 -translate-y-[120%] flex-col items-center">
              <span className="mb-1 rounded-md bg-zinc-950 px-2 py-1 text-xs font-medium text-white">
                OtoUsta
              </span>
              <MapPin className="h-9 w-9 text-red-500" fill="currentColor" aria-hidden="true" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex justify-center p-5">
              <p className="rounded-md border border-zinc-700 bg-zinc-950/90 px-4 py-2 text-sm font-medium tracking-wide text-zinc-300">
                Harita Alanı
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 pb-28 text-sm text-zinc-500 sm:px-6 md:flex-row md:items-center md:justify-between md:pb-6">
          <p>© {year} OtoUsta. Tüm hakları saklıdır.</p>
          <p>Oto tamir · Kaporta · 7/24 yol yardım</p>
        </div>
      </footer>
    </section>
  );
}
