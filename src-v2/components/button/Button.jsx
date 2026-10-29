import React from "react";
import { twMerge } from "tailwind-merge";

function Button({ children, className = "", ...props }) {
  return (
    <button
      className={twMerge(
        "px-6 py-3 border-none rounded-md bg-white font-medium text-black text-sm shadow-md cursor-pointer hover:opacity-90 transition-opacity disabled:bg-slate-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
