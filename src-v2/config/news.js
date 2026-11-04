import icpc2026Ru from "../content/news/icpc-2026-ru.html?raw";
import icpc2026En from "../content/news/icpc-2026-en.html?raw";

// News articles, newest first. Each article is a self-contained HTML block
// (scoped styles, see src-v2/content/news/) rendered by pages/news/NewsArticle.
// To add one: put its ru/en HTML in content/news/, photos in public/news/,
// add an entry here and its card text under v2.news.<i18nKey> in the locales.
export const news = [
  {
    slug: "icpc-2026",
    i18nKey: "icpc2026",
    date: "2026-11-04",
    cover: "news/icpc-2026-team.jpg",
    html: { ru: icpc2026Ru, en: icpc2026En },
  },
];

export const findNews = (slug) => news.find((item) => item.slug === slug);
