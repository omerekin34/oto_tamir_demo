import { Clock, ShieldCheck, Timer, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const reasons: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "7/24 Acil Destek",
    description:
      "Gece, hafta sonu ve resmi tatilde de çekici ve yerinde müdahale hattımız açık kalır.",
    icon: Clock,
  },
  {
    title: "Garantili İşçilik",
    description:
      "Yapılan her iş için yazılı işçilik garantisi. Sorun tekrarlarsa ücretsiz bakarız.",
    icon: ShieldCheck,
  },
  {
    title: "Hızlı Teslimat",
    description:
      "Randevulu bakımda aynı gün teslim hedefi. Parça bekleyen işte sizi anlık bilgilendiririz.",
    icon: Timer,
  },
];

export function WhyUs() {
  return (
    <section id="hakkimizda" className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Güven"
          title="Neden Biz?"
          description="Aracınızı teslim ettiğinizde ne zaman, nasıl ve hangi garantiyle geri alacağınızı baştan bilirsiniz."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={index * 0.08}>
                <div className="border-t border-yellow-400/80 pt-6">
                  <Icon className="h-8 w-8 text-yellow-400" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-semibold text-white">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
