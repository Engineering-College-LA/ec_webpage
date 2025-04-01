// import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
// import { buildTheme } from "@botpress/webchat-generator";
// import { useState } from "react";
// const { theme, style } = buildTheme({
//   themeName: "prism",
//   themeColor: "#634433",
// });

// const clientId = "0df3ad6a-2820-46da-9fd4-3ee698b627f2";
// export default function ChatBot() {
//   const client = getClient({ clientId });
//   const [isWebchatOpen, setIsWebchatOpen] = useState(false);
//   const toggleWebchat = () => {
//     setIsWebchatOpen((prevState) => !prevState);
//   };
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <style>{style}</style>
//       <WebchatProvider theme={theme} client={client}>
//         <Fab onClick={toggleWebchat} />
//         <div
//           style={{
//             display: isWebchatOpen ? "block" : "none",
//           }}
//         >
//           <Webchat />
//         </div>
//       </WebchatProvider>
//     </div>
//   );
// }

import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const { style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

const clientId = "0df3ad6a-2820-46da-9fd4-3ee698b627f2";

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
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <WebchatProvider client={client}>
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
            height: "450px",
            // boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
          className="shadow-custom"
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}
