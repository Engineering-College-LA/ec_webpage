import { Link } from "react-router-dom";

function Logo({ logoSrc, width = 50, height = 50 }) {
  return (
    <div className="font-bold text-2xl relative">
      <Link to={"/"}>
        <img
          src={logoSrc}
          alt="Light Academy College of Engineering Logo"
          width={width}
          height={height}
        />
      </Link>
    </div>
  );
}

export default Logo;
