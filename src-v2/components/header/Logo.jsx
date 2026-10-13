import { Link } from "react-router-dom";

// Transcribed from the Paper "EC Redesign" header (1T9-0) and footer (20B-0)
// artboards — "dark" is the navy wordmark used on the light header, "light"
// is the white wordmark used on the dark footer.
function Logo({ variant = "dark" }) {
  const isLight = variant === "light";
  return (
    <Link to="/" className="flex items-center gap-3">
      <svg
        viewBox="0 0 53 32"
        width="50"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M0 26.097h23.556v5.903H0zM0 12.931h23.556v5.95H0zM0 0h23.556v5.81H0zM29.678 0H53v5.81H35.66v20.287H53V32H29.678z"
          fill={isLight ? "#FFFFFF" : "#0C1830"}
        />
      </svg>
      <div className="flex flex-col gap-0.5">
        <div
          className={`font-v2-heading text-[16px] tracking-[0.06em] font-extrabold leading-5 ${isLight ? "text-v2-paper" : "text-v2-navy"}`}
        >
          E|C COLLEGE
        </div>
        <div
          className={`font-v2-heading text-[9px] tracking-[0.22em] font-semibold leading-3 ${isLight ? "text-v2-footer-muted" : "text-v2-slate"}`}
        >
          ENGINEERING · BISHKEK
        </div>
      </div>
    </Link>
  );
}

export default Logo;
