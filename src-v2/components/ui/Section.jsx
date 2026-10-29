import { twMerge } from "tailwind-merge";

// Shared page-section wrapper for the v3 "Alpine" redesign — replaces the
// old `.page`/`.page-style` CSS classes for any page rebuilt in src-v2.
function Section({ as: Tag = "section", className, children, ...props }) {
  return (
    <Tag
      className={twMerge("mx-auto w-full max-w-[1440px] px-6 lg:px-v2-gutter", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Section;
