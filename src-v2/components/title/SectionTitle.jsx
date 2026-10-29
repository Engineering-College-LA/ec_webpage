import { twMerge } from "tailwind-merge";

function SectionTitle({ children, className = "" }) {
  const [firstWord, ...rest] = children.split(" ");
  return (
    <h2
      className={twMerge(
        "text-3xl font-semibold text-center mb-8 lg:mb-10 leading-7 section-title uppercase",
        className
      )}
    >
      <span className="text-n-blue">{firstWord}</span> {rest.join(" ")}
    </h2>
  );
}

export default SectionTitle;
