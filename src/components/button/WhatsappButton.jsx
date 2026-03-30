import React from "react";
import Button from "./Button";
import { socialMediaIcons } from "../../config/icons";
import { twMerge } from "tailwind-merge";

function WhatsappButton({ children, withAnimation = false }) {
  return (
    <a href="https://api.whatsapp.com/send?phone=996755990550">
      <Button
        className={twMerge(
          "bg-[#25D366] py-2 px-3.5 border border-[#1b9949] text-white relative flex items-center justify-center gap-2",
          withAnimation && "pulse"
        )}
      >
        <span>{socialMediaIcons.whatsapp}</span>
        <span>{children}</span>
      </Button>
    </a>
  );
}

export default WhatsappButton;
