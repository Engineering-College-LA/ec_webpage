import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`accordion py-8 border-b border-solid border-slate-200 ${isOpen ? "active" : ""}`}
    >
      <button
        className={`accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-slate-600 w-full transition duration-500 hover:text-n-blue ${isOpen ? "accordion-active:font-medium accordion-active:text-main" : ""}`}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`basic-collapse-${title}`}
      >
        <div className="w-full text-center sm:text-start">{title}</div>
        <ChevronDown className="text-n-blue"/>
        {/* <svg
          className={`text-slate-900 transition duration-500 group-hover:text-n-blue ${isOpen ? "accordion-active:rotate-180" : ""}`}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg> */}
      </button>
      <div
        id={`basic-collapse-${title}`}
        className={`accordion-content w-full px-0 overflow-hidden pr-4 ${isOpen ? "active" : ""}`}
        style={{ maxHeight: isOpen ? "100px" : "0" }}
        aria-labelledby={`basic-heading-${title}`}
      >
        {Array.isArray(content) ? (
          <ul className="text-base text-slate-500 font-normal list-disc">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-base text-slate-500 font-normal">{content}</p>
        )}
      </div>
    </div>
  );
};

const FAQ = () => {
  const { t } = useTranslation();

  const faqs = Array.from({ length: 12 }, (_, index) => ({
    title: t(`home.faq.questions.${index}.question`),
    content: t(`home.faq.questions.${index}.answer`),
  }));

  return (
    <div className="page py-14 sm:py-20 px-4 sm:px-6 md:px-8 text-slate-900">
      <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row max-lg:max-w-2xl mx-auto max-w-full">
        <div className="lg:max-w-3xl">
          <div className="mb-6">
            <h2 className="page-title">{t("home.faq.title")}</h2>
          </div>
          <div className="accordion-group" data-accordion="default-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                title={faq.title}
                content={faq.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
