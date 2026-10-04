import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <a
        href={`tel:${site.emergencyTel}`}
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg shadow-red-500/30 md:hidden"
        style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
        aria-label="Telefonla ara"
        title="Telefonla ara"
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-pulse fixed right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/30"
        style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
        aria-label="WhatsApp ile yazın"
        title="WhatsApp ile yazın"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}
