import { SquareCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function CustomList({ list, className = "" }) {
  return (
    <ul
      className={twMerge("max-w-md space-y-1 list-inside text-base", className)}
    >
      {list.map((req, index) => (
        <li key={index} className="flex items-center">
          <span>
            <SquareCheck className={"h-4 w-4 me-2 text-n-blue font-bold"} />
          </span>
          {req.link ? (
            <Link to={req.link} className="hover:text-blue-700">{req.text}</Link>
          ) : (
            <span>{req.text}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default CustomList;
