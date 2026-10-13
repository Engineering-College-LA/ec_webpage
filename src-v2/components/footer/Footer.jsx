import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { navLinks } from "../../config/constants";
import Logo from "../header/Logo";
import LanguageSelecter from "../langage-selector/LanguageSelecter";

const socialLinks = [
  {
    href: "https://www.instagram.com/engineering.college.la/",
    label: "Instagram",
  },
  { href: "https://t.me/+996226142222", label: "Telegram" },
  { href: "https://api.whatsapp.com/send?phone=996226142222", label: "WhatsApp" },
];

// Transcribed from the Paper "EC Redesign" footer artboard (20B-0).
function Footer() {
  const { t } = useTranslation();
  const footerLinks = navLinks.filter((link) => link.to !== "/affiliations");

  return (
    <footer className="flex flex-col gap-7 bg-v2-ink-deep px-6 pt-12 pb-8 lg:px-[72px]">
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <Logo variant="light" />
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 font-v2-heading">
          {footerLinks.map((link) =>
            link.to.includes("#") ? (
              <a
                key={link.label}
                href={link.to}
                className="whitespace-nowrap text-v2-label font-semibold leading-4 text-v2-footer-link"
              >
                {t(link.label)}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="whitespace-nowrap text-v2-label font-semibold leading-4 text-v2-footer-link"
              >
                {t(link.label)}
              </Link>
            ),
          )}
        </div>
        <div className="flex items-center gap-4 font-v2-heading">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-v2-label font-semibold leading-4 text-v2-footer-link"
            >
              {social.label}
            </a>
          ))}
          <div className="flex items-center gap-1 border-l border-white/20 pl-3 text-v2-label font-semibold leading-4 text-v2-footer-link">
            <LanguageSelecter className="text-v2-footer-link" />
            <span aria-hidden="true">⌄</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-t border-white/[0.12] pt-5 font-v2-body text-[12px] leading-4 text-v2-footer-muted lg:flex-row lg:items-center lg:justify-between">
        <div>{t("v2.footer.copyright")}</div>
        <div>{t("v2.footer.tagline")}</div>
      </div>
    </footer>
  );
}

export default Footer;
