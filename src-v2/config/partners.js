// Partner logos live in /public/partners/*.png.
// Favicons were auto-fetched as placeholders — replace with proper logo art when available.
// Entries without a `logo` render an initials badge fallback.
// `light: true`    -> logo is white/transparent, render on a dark card so it stays visible.
// `hideName: true` -> logo already contains the name, so skip the text label.
const BASE = import.meta.env.BASE_URL;

export const partners = [
  { name: "EPAM", url: "https://www.epam.com/", logo: BASE + "partners/epam.png", hideName: true },
  { name: "KRJC", url: "https://krjc.kg/", logo: BASE + "partners/krjc.png", light: true, hideName: true },
  { name: "HTP", url: "https://htp.kg/en/", logo: BASE + "partners/htp.png", hideName: true, fill: true },
  { name: "Beeline", url: "https://beeline.kg/ky", logo: BASE + "partners/beeline.png" },
  { name: "Bakai", url: "https://bakai.kg/", logo: BASE + "partners/bakai.png" },
  { name: "Demir Bank", url: "https://www.demirbank.kg/", logo: BASE + "partners/demir.png" },
  {
    name: "Кыргыз Шоколад",
    url: "https://www.instagram.com/kyrgyz_chocolate/",
    logo: BASE + "partners/kychocolate.png",
    hideName: true,
  },
  { name: "APRD", url: "https://aprd.kg/", logo: BASE + "partners/aprd.png", light: true },
  { name: "Strategist", url: null, logo: BASE + "partners/strategist.png", hideName: true },
  { name: "CAYU", url: "https://www.cayu.ai/", logo: BASE + "partners/cayu.png" },
  { name: "KTRK", url: "https://utrk.kg/", logo: BASE + "partners/ktrk.png", hideName: true },
];
