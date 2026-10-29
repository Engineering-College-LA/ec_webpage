import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import Button from "../../components/button/Button";

const ThankYou = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const formSubmissionFlag = window.sessionStorage.getItem("formSubmitted");
    if (formSubmissionFlag) {
      setFormSubmitted(true);
      window.sessionStorage.removeItem("formSubmitted"); // Clear flag after confirming
    } else {
      navigate("/"); // Redirect to home if form not submitted
    }
  }, [navigate]);

  return (
    <div className="flex h-screen items-center justify-center text-center">
      {formSubmitted ? (
        <div>
          <div className="flex flex-col items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-28 w-28 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-4xl font-bold">{t("thankYou.title")}</h1>
            <p>{t("thankYou.description")}</p>
            <Link to={"/"}>
              <Button className="relative inline-flex items-center rounded bg-blue-500 text-white focus:outline-none focus:ring">
                <span className="absolute inset-0 rounded-[inherit] shimmer-gradient bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-all animate-shimmer"></span>
                <ArrowLeft size={16} />
                <span className="text-md font-medium">
                  {t("thankYou.btnText")}
                </span>
              </Button>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ThankYou;
