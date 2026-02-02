import { footerColumns } from "../../config/constants";
import Logo from "../header/Logo";
import logoWhite from "../../assets/logo-white.svg";
import { socialMediaIcons } from "../../config/icons";
import { Link } from "react-router-dom";

// Define social icons data
const socialIcons = [
  {
    href: "https://www.instagram.com/light_academy.college",
    icon: socialMediaIcons.instagram,
    label: "Instagram",
  },
  {
    href: "https://api.whatsapp.com/send?phone=996501990550",
    icon: socialMediaIcons.whatsapp,
    label: "WhatsApp",
  },
  {
    href: "https://t.me/+996501990550",
    icon: socialMediaIcons.telegram,
    label: "Telegram",
  },
];

// FooterColumn component
const FooterColumn = ({ title, links }) => (
  <div>
    <p className="font-medium text-white">{title}</p>
    <ul className="mt-6 space-y-4 text-sm">
      {links.map((link, index) => (
        <li key={index}>
          {link.href ? (
            <a
              href={link.href}
              className="text-n-bluish-50 transition hover:opacity-75"
            >
              {link.labelStart && <span>{link.labelStart}:</span>}{" "}
              <span className="block">{link.label}</span>
            </a>
          ) : (
            <Link
              to={link.to}
              className="text-n-bluish-50 transition hover:opacity-75"
            >
              {link.labelStart && <span>{link.labelStart}:</span>}{" "}
              <span className="block">{link.label}</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

// SocialIcon component
const SocialIcon = ({ href, icon, label }) => (
  <li>
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      className="text-n-bluish transition hover:opacity-75"
    >
      <span className="sr-only">{label}</span>
      {icon}
    </a>
  </li>
);

// SocialLinks component
const SocialLinks = () => (
  <ul className="mt-8 flex gap-6">
    {socialIcons.map((socialIcon, index) => (
      <SocialIcon
        key={index}
        href={socialIcon.href}
        icon={socialIcon.icon}
        label={socialIcon.label}
      />
    ))}
  </ul>
);

const Footer = () => {
  return (
    <footer className="bg-n-blue-hard text-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-8 py-16 lg:space-y-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div>
              <Logo logoSrc={logoWhite} width={200} height={56} />
              {/* <span className="text-sm font-medium">
                Engineering College | LA
              </span> */}
            </div>

            <SocialLinks />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {footerColumns.map((column, index) => (
              <FooterColumn
                key={index}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>

        <p className="text-sm text-white">
          &copy; 2024–2026. EC All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
