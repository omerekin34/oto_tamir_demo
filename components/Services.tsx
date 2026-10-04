import {
  Activity,
  CalendarCheck,
  Car,
  CircleDot,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const services: { title: string; description: string; icon: LucideIcon; code: string }[] = [
  {
    code: "01",
    title: "Motor & Mekanik",
    description:
      "Motor, şanzıman ve yürür aksam arızalarında teşhisten onarıma kadar garantili işçilik.",
    icon: Wrench,
  },
  {
    code: "02",
    title: "Kaporta & Boya",
    description:
      "Hasar onarımı, lokal boya ve renk uyumu. Aracınız teslim edildiği günkü görünümüne döner.",
    icon: Car,
  },
  {
    code: "03",
    title: "Periyodik Bakım",
    description:
      "Yağ, filtre, fren ve sıvı kontrolleri. Üretici periyoduna uygun bakım planı.",
    icon: CalendarCheck,
  },
  {
    code: "04",
    title: "Bilgisayarlı Arıza Tespit",
    description:
      "Arıza kodunu netleştirir, gereksiz parça değişimini daha başlamadan eleriz.",
    icon: Activity,
  },
  {
    code: "05",
    title: "Lastik & Balans",
    description:
      "Lastik değişimi, rot balans ve basınç kontrolü. Yolda tutuş için aynı gün servis.",
    icon: CircleDot,
  },
  {
    code: "06",
    title: "Acil Yol Yardım",
    description:
      "Akü takviyesi, lastik patlaması ve çekici. Konumunuza ortalama 25 dakikada ulaşırız.",
    icon: Truck,
  },
];

export function Services() {
  return (
    <section id="hizmetler" className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Hizmetler"
          title="Profesyonel Çözümlerimiz"
          description="Motorundan kaportasına, yolda kalan araçtan periyodik bakıma kadar tek atölyede çözüyoruz."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} className="h-full" delay={(index % 3) * 0.08}>
                <article className="flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition duration-200 hover:border-yellow-400">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-zinc-500">{service.code}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
