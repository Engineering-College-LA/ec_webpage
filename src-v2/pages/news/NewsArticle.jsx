import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { findNews } from "../../config/news";
import NotFound from "../not-found/NotFound";

const BASE = import.meta.env.BASE_URL;

// The article HTML is written for the site root ("/news/x.jpg", "/admissions").
// Rebase those paths so they also work under /ec_webpage/ on GitHub Pages.
const rebase = (html) => html.replace(/(src|href)="\/(?!\/)/g, `$1="${BASE}`);

function NewsArticle() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const article = findNews(slug);
  const lang = i18n.language?.startsWith("en") ? "en" : "ru";

  const html = useMemo(() => (article ? rebase(article.html[lang] ?? article.html.ru) : ""), [article, lang]);

  useEffect(() => {
    if (!article) return undefined;
    const previous = document.title;
    document.title = `${t(`v2.news.${article.i18nKey}.title`)} · E|C Engineering College`;
    return () => {
      document.title = previous;
    };
  }, [article, t]);

  if (!article) return <NotFound />;

  // Internal links inside the article HTML are plain <a> tags; route them
  // through React Router instead of reloading the whole app.
  const handleClick = (event) => {
    const link = event.target.closest("a");
    if (!link || link.target || event.metaKey || event.ctrlKey || event.shiftKey) return;
    const href = link.getAttribute("href");
    if (!href?.startsWith(BASE)) return;
    event.preventDefault();
    navigate(`/${href.slice(BASE.length)}`);
  };

  return <div onClick={handleClick} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default NewsArticle;
