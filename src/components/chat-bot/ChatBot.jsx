import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
// import { buildTheme } from "@botpress/webchat-generator";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

// const { theme } = buildTheme({
//   themeName: "prism",
//   themeColor: "#634433",
// });

const clientId = "0df3ad6a-2820-46da-9fd4-3ee698b627f2";

const config = {
  composerPlaceholder: "Задайте ваш вопрос о колледже E|C...",
  botName: "EC Консультант",
  botAvatar:
    "https://i.pinimg.com/736x/35/ab/67/35ab67e56fc122ebba708f553ac45255.jpg", // You can replace this with a custom avatar URL if desired
  botDescription:
    "Привет! 👋 Я — виртуальный помощник колледжа инженерии E|C. Спрашивайте про поступление, программы и учёбу!",
};

export default function ChatBot() {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
        zIndex: 1000,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <WebchatProvider
        // key={JSON.stringify(config)}
        // theme={theme}
        configuration={config}
        client={client}
      >
        <div
          onClick={toggleWebchat}
          className="flex-center rounded-2xl shadow-custom cursor-pointer w-16 h-16  bg-gradient-to-r from-blue-400 to-blue-500 z-50"
        >
          <MessageCircle size={36} className="text-white" />
        </div>
        <div
          style={{
            transition: "opacity 0.3s ease, transform 0.3s ease",
            opacity: isWebchatOpen ? 1 : 0,
            transform: isWebchatOpen ? "translateY(0)" : "translateY(20px)",
            pointerEvents: isWebchatOpen ? "auto" : "none",
            position: "absolute",
            bottom: "70px", // Adjusts the position above the FAB
            right: 0,
            width: "360px",
            height: "470px",
            borderRadius: "8px",
            // overflow: "hidden",
            backgroundColor: "#fff",
            display: isWebchatOpen ? "block" : "none",
          }}
          className="shadow-custom"
        >
          <div
            onClick={toggleWebchat}
            className="bg-slate-200 rounded-full p-2"
            style={{
              position: "absolute",
              top: "-10px",
              left: "-10px",
              cursor: "pointer",
              zIndex: 1,
            }}
          >
            <X size={24} />
          </div>

          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}
