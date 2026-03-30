// Navigation links
export const navLinks = [
  { to: "/", label: "navbar.home" },
  { to: "/about", label: "navbar.about" },
  { to: "/affiliations", label: "navbar.affiliations" },
  { to: "/academics", label: "navbar.academics" },
  { to: "/admissions", label: "navbar.admissions" },
];

const companyLinks = [
  { to: "/about", label: "About E|C" },
  { to: "/academics", label: "Accademics" },
  { to: "/admissions", label: "Admissions" },
];

const helpfulLinks = [
  { to: "/#contact", label: "Contact" },
  { to: "/#faq", label: "FAQs" },
];

const contactLinks = [
  {
    href: "tel:+996501990550",
    label: "+996 501 99 05 50",
    labelStart: "Phone",
  },
  {
    href: "mailto:info@college.edu.kg",
    label: "info@college.edu.kg",
    labelStart: "Email",
  },
  {
    href: "https://2gis.kg/bishkek/inside/70030076373364328/firm/70000001089690237",
    // label: "Саякбая Каралаева, 7а/1 · Сухэ-Батора, 23",
    label: "Suhe Bator, 23",
    labelStart: "Address",
  },
];

export const footerColumns = [
  { title: "Main", links: companyLinks },
  { title: "Helpful Links", links: helpfulLinks },
  { title: "Contacts", links: contactLinks },
];

export const listForMission = [
  { text: "History" },
  { text: "Mission and Vision" },
  { text: "Educational programs" },
];
