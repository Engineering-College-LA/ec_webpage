import { Link } from "react-router-dom";

// Transcribed from the Paper "EC Redesign" header (1T9-0) and footer (20B-0)
// artboards — "dark" is the navy wordmark used on the light header, "light"
// is the white wordmark used on the dark footer. Below lg the sizes follow
// the mobile artboards: a smaller header mark, and a text-only footer mark.
function Logo({ variant = "dark" }) {
  const isLight = variant === "light";
  return (
    <Link to="/" className="flex items-center gap-2.5 lg:gap-3">
      <svg
        viewBox="0 0 53 32"
        width="50"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-10 shrink-0 lg:block lg:h-[30px] lg:w-[50px] ${isLight ? "hidden" : ""}`}
      >
        <path
          d="M0 26.097h23.556v5.903H0zM0 12.931h23.556v5.95H0zM0 0h23.556v5.81H0zM29.678 0H53v5.81H35.66v20.287H53V32H29.678z"
          fill={isLight ? "#FFFFFF" : "#0C1830"}
        />
      </svg>
      <div className="flex flex-col gap-px lg:gap-0.5">
        <div
          className={`font-v2-heading tracking-[0.06em] font-extrabold lg:text-[16px] lg:leading-5 ${isLight ? "text-[16px] leading-5 text-v2-paper" : "text-v2-label leading-4 text-v2-navy"}`}
        >
          E|C COLLEGE
        </div>
        <div
          className={`font-v2-heading tracking-[0.22em] font-semibold lg:text-[9px] lg:leading-3 ${isLight ? "text-[8px] leading-[10px] text-v2-footer-muted" : "text-[7px] leading-[10px] text-v2-slate"}`}
        >
          ENGINEERING · BISHKEK
        </div>
      </div>
    </Link>
  );
}

export default Logo;
