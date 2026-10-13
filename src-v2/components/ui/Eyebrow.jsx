import { twMerge } from "tailwind-merge";

// Small uppercase tracked label used above headings throughout the
// redesign (e.g. "ВЫСОКИЕ ЦЕЛИ · СВЕТЛОЕ ЗАВТРА", dropdown column headings).
// Paper uses this pattern at slightly different sizes per context (10-13px),
// so this sets a sensible default and lets callers override via className.
function Eyebrow({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag
      className={twMerge(
        "font-v2-heading text-[11px] font-semibold uppercase leading-[14px] tracking-[0.24em] text-v2-slate",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Eyebrow;
