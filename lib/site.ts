export const site = {
  name: "OtoUsta",
  emergencyDisplay: "0532 415 90 24",
  emergencyTel: "+905324159024",
  serviceDisplay: "0212 555 01 90",
  serviceTel: "+902125550190",
  whatsapp: "https://wa.me/905324159024",
  whatsappEmergency:
    "https://wa.me/905324159024?text=Merhaba%2C%20acil%20%C3%A7ekici%20ihtiyac%C4%B1m%20var.%20Konumumu%20payla%C5%9F%C4%B1yorum.",
  whatsappAppointment:
    "https://wa.me/905324159024?text=Merhaba%2C%20servis%20randevusu%20almak%20istiyorum.",
  addressLines: ["Atölye Sokak No: 14", "İkitelli OSB, Başakşehir / İstanbul"],
  hours: [
    { label: "Yol yardım", value: "7/24" },
    { label: "Hafta içi", value: "08:00 – 20:00" },
    { label: "Cumartesi", value: "08:00 – 20:00" },
    { label: "Pazar", value: "09:00 – 18:00" },
  ],
} as const;

export const navLinks = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#iletisim", label: "İletişim" },
] as const;
