import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Apple, Play, Smartphone, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/logo-white.svg";

function AppModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl max-h-[90vh] flex flex-col"
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* close button — inside card */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-1 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* header band */}
            <div className="bg-n-blue-hard px-6 pt-6 pb-8 flex flex-col items-center rounded-t-2xl shrink-0">
              <div className="bg-white/10 rounded-2xl p-3 mb-4">
                <img src={logoWhite} alt="E|C College" className="h-10 w-auto" />
              </div>
              <h2 className="text-white font-bold text-xl text-center">
                {t("navbar.appModal.title")}
              </h2>
              <p className="text-n-bluish-50 text-sm text-center mt-1">
                {t("navbar.appModal.subtitle")}
              </p>
            </div>

            {/* scrollable content */}
            <div className="px-6 py-6 overflow-y-auto flex flex-col gap-5">
              <p className="text-slate-600 text-sm leading-relaxed text-center">
                {t("navbar.appModal.description")}
              </p>

              {/* store buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://apps.apple.com/ua/app/engineering-college-app/id6755540603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-n-blue-hard hover:bg-n-blue text-white rounded-xl py-3 px-4 transition-colors"
                >
                  <Apple className="w-5 h-5 shrink-0" />
                  <div className="text-left leading-tight">
                    <p className="text-[10px] text-white/70">
                      {t("navbar.appModal.appStore.badge")}
                    </p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.aprd.studentID&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-n-blue-hard hover:bg-n-blue text-white rounded-xl py-3 px-4 transition-colors"
                >
                  <Play className="w-5 h-5 shrink-0 fill-white" />
                  <div className="text-left leading-tight">
                    <p className="text-[10px] text-white/70">
                      {t("navbar.appModal.googlePlay.badge")}
                    </p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </a>
              </div>

              {/* see more */}
              <Link
                to="/ec_app"
                onClick={onClose}
                className="flex items-center justify-center gap-2 text-n-blue hover:text-n-blue-hard text-sm font-medium transition-colors py-1"
              >
                {t("navbar.appModal.seeMore")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { AppModal };

export function AppButton({ onClick }) {
  const { t } = useTranslation();
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 text-white/80 hover:text-white border border-white/20 hover:border-white/50 rounded-lg px-3 py-1.5 text-sm transition-colors"
      aria-label={t("navbar.appModal.buttonLabel")}
    >
      <Smartphone className="w-4 h-4" />
      <span className="hidden xl:inline">{t("navbar.appModal.buttonLabel")}</span>
    </button>
  );
}
