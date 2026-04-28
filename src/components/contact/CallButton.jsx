import React, { useState } from "react";
import { Phone } from "lucide-react";
import { socialMediaIcons } from "../../config/icons";

const socialIcons = [
  {
    href: "tel:+996755990550",
    icon: socialMediaIcons.phone,
    label: "telegram",
  },
  {
    href: "https://api.whatsapp.com/send?phone=996755990550",
    icon: socialMediaIcons.whatsapp,
    label: "WhatsApp",
  },
  {
    href: "https://t.me/+996501990550",
    icon: socialMediaIcons.telegram,
    label: "Telegram",
  },
];

const CallButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 p-2 flex justify-center items-center w-28 h-28 z-50">
      <div
        className="text-white shadow-xl flex items-center justify-center p-6 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 z-50 absolute cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="animate-ring">
          <Phone />
        </div>
      </div>

      {/* Sub left */}
      <div
        className={`absolute rounded-full transition-all duration-200 ease-out p-2 hover:p-3 bg-green-400 hover:bg-green-500 text-white ${isOpen ? "scale-y-100 -translate-x-[80px]" : "scale-y-0"
          }`}
      >
        <a
          href={socialIcons[1].href}
          aria-label={socialIcons[1].label}
          className="block"
        >
          {socialIcons[1].icon}
        </a>
      </div>

      {/* Sub top */}
      <div
        className={`absolute rounded-full transition-all duration-200 ease-out p-2 hover:p-3 bg-blue-400 hover:bg-blue-500 text-white ${isOpen ? "scale-x-100 -translate-y-[80px]" : "scale-x-0"
          }`}
      >
        <a
          href={socialIcons[2].href}
          aria-label={socialIcons[2].label}
          className="block"
        >
          {socialIcons[2].icon}
        </a>
      </div>

      {/* Sub middle */}
      <div
        className={`absolute rounded-full transition-all duration-200 ease-out p-2 hover:p-3 bg-yellow-400 hover:bg-yellow-500 text-white ${isOpen
          ? "scale-x-100 -translate-y-[68px] -translate-x-[68px]"
          : "scale-x-0"
          }`}
      >
        <a
          href={socialIcons[0].href}
          aria-label={socialIcons[0].label}
          className="block"
        >
          {socialIcons[0].icon}
        </a>
      </div>
    </div>
  );
};

export default CallButton;
