// Navigation links — v3 "Alpine" redesign.
// Order/labels match the Paper nav artboard exactly (logo serves as the home
// link, so there's no separate "Home" item). "Affiliations" has no artboard
// in this redesign; kept as a plain trailing link per product decision.
export const navLinks = [
  { to: "/academics", label: "v2.nav.programs" },
  { to: "/admissions", label: "v2.nav.admissions" },
  { to: "/student-life", label: "v2.nav.studentLife", dropdown: true },
  { to: "/career-test", label: "v2.nav.career" },
  { to: "/about", label: "v2.nav.about" },
  { to: "/#contact", label: "v2.nav.contacts" },
  { to: "/affiliations", label: "navbar.affiliations" },
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
    href: "tel:+996226142222",
    label: "+996 226 14 22 22",
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
