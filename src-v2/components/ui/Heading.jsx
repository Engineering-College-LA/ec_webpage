import { twMerge } from "tailwind-merge";

// Heading scale for the v3 "Alpine" redesign, replacing `.page-title`/
// `.page-subtitle`. Paper's actual headings vary a few px around these
// (e.g. the Home CTA band uses 48px, not the 56px --v2-text-h2 token) —
// these are deliberately the common default, override via className when a
// specific artboard calls for something else.
const levelClasses = {
  display: "font-v2-display text-v2-display font-bold leading-[1.05] tracking-[-0.02em] text-v2-navy",
  h2: "font-v2-heading text-v2-h2 font-extrabold leading-[1.1] tracking-[-0.02em] text-v2-navy",
  h3: "font-v2-heading text-v2-h3 font-bold leading-[1.2] text-v2-navy",
};

const defaultTag = { display: "h1", h2: "h2", h3: "h3" };

function Heading({ level = "h2", as, className, children, ...props }) {
  const Tag = as || defaultTag[level];
  return (
    <Tag className={twMerge(levelClasses[level], className)} {...props}>
      {children}
    </Tag>
  );
}

export default Heading;
