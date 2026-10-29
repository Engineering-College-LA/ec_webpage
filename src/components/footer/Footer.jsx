import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LogoV2 from "../header/LogoV2";
import LanguageSelecterV2 from "../langage-selector/LanguageSelecterV2";
import LanguageSwitchV2 from "../langage-selector/LanguageSwitchV2";

// Mirrors src-v2/components/footer/Footer.jsx (the "EC Redesign" footer,
// Paper artboard 20B-0). Uses its own nav link list rather than the old
// navLinks in config/constants, since that list's labels/shape are still
// tied to the old Navbar.
const footerLinks = [
  { to: "/academics", label: "v2.nav.programs" },
  { to: "/admissions", label: "v2.nav.admissions" },
  { to: "/student-life", label: "v2.nav.studentLife" },
  { to: "/about", label: "v2.nav.about" },
  { to: "/#contact", label: "v2.nav.contacts" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/engineering.college.la/",
    label: "Instagram",
  },
  { href: "https://t.me/+996226142222", label: "Telegram" },
  { href: "https://api.whatsapp.com/send?phone=996226142222", label: "WhatsApp" },
];

// Same number as the Telegram/WhatsApp links above.
const PHONE = {
  href: "https://api.whatsapp.com/send?phone=996226142222",
  label: "+996 226 14 22 22",
};

// Shorter labels used in the mobile footer ("Home — Mobile v3").
const mobileLabel = {
  "v2.nav.studentLife": "v2.nav.studentLifeShort",
};

const linkClass =
  "whitespace-nowrap text-v2-label font-semibold leading-4 text-v2-footer-link";

function Footer() {
  const { t } = useTranslation();

  const renderLabel = (link) => (
    <>
      <span className="lg:hidden">{t(mobileLabel[link.label] ?? link.label)}</span>
      <span className="hidden lg:inline">{t(link.label)}</span>
    </>
  );

  return (
    <footer className="flex flex-col gap-[22px] bg-v2-ink-deep px-5 pt-9 pb-7 lg:gap-7 lg:px-[72px] lg:pt-12 lg:pb-8">
      <div className="flex flex-col items-start gap-[22px] lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <LogoV2 variant="light" />
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-v2-heading lg:gap-x-8 lg:gap-y-2">
          {footerLinks.map((link) =>
            link.to.includes("#") ? (
              <a key={link.label} href={link.to} className={linkClass}>
                {renderLabel(link)}
              </a>
            ) : (
              <Link key={link.label} to={link.to} className={linkClass}>
                {renderLabel(link)}
              </Link>
            ),
          )}
        </div>
        <a
          href={PHONE.href}
          className="font-v2-heading text-v2-body font-bold leading-[22px] text-v2-paper lg:hidden"
        >
          {PHONE.label}
        </a>
        <LanguageSwitchV2 tone="dark" className="lg:hidden" />
        <div className="hidden items-center gap-4 font-v2-heading lg:flex">
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
            <LanguageSelecterV2 className="text-v2-footer-link" />
            <span aria-hidden="true">⌄</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 border-t border-white/[0.12] pt-4 font-v2-body text-[11px] leading-[14px] text-v2-footer-muted lg:hidden">
        <div>{t("v2.footer.copyrightShort")}</div>
        <div>{t("v2.footer.address")}</div>
      </div>
      <div className="hidden flex-col gap-2 border-t border-white/[0.12] pt-5 font-v2-body text-[12px] leading-4 text-v2-footer-muted lg:flex lg:flex-row lg:items-center lg:justify-between">
        <div>{t("v2.footer.copyright")}</div>
        <div>{t("v2.footer.tagline")}</div>
      </div>
    </footer>
  );
}

export default Footer;
