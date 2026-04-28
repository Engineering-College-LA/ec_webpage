// Navigation links
export const navLinks = [
  { to: "/", label: "navbar.home" },
  { to: "/about", label: "navbar.about" },
  { to: "/affiliations", label: "navbar.affiliations" },
  { to: "/academics", label: "navbar.academics" },
  { to: "/admissions", label: "navbar.admissions" },
];

const companyLinks = [
  { to: "/about", label: "footer.companyLinks.about" },
  { to: "/academics", label: "footer.companyLinks.academics" },
  { to: "/admissions", label: "footer.companyLinks.admissions" },
];

const helpfulLinks = [
  { to: "/#contact", label: "footer.helpfulLinks.contact" },
  { to: "/#faq", label: "footer.helpfulLinks.faq" },
];

const contactLinks = [
  {
    href: "tel:+996501990550",
    label: "+996 501 99 05 50",
    labelStart: "footer.contactLinks.phone",
  },
  {
    href: "mailto:info@college.edu.kg",
    label: "info@college.edu.kg",
    labelStart: "footer.contactLinks.email",
  },
  {
    href: "https://2gis.kg/bishkek/inside/70030076373364328/firm/70000001089690237",
    // label: "Саякбая Каралаева, 7а/1 · Сухэ-Батора, 23",
    label: "footer.contactLinks.addressLabel",
    labelStart: "footer.contactLinks.address",
  },
];

export const footerColumns = [
  { title: "footer.titles.main", links: companyLinks },
  { title: "footer.titles.helpfulLinks", links: helpfulLinks },
  { title: "footer.titles.contacts", links: contactLinks },
];

export const listForMission = [
  { text: "History" },
  { text: "Mission and Vision" },
  { text: "Educational programs" },
];
