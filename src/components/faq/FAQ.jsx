  import { useTranslation } from "react-i18next";
  import { ChevronDown } from "lucide-react";

  import { useState, useRef, useLayoutEffect } from "react";

  const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    }, []);

    return (
      <div className="border-b border-slate-200 py-4">
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="w-full py-3 flex justify-between items-center text-left text-lg md:text-xl text-slate-700 hover:text-n-blue transition-colors duration-200"
          aria-expanded={isOpen}
        >
          <span>{title}</span>
          <ChevronDown
            className={`min-h-[28px] min-w-[28px] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
        >
          <div ref={contentRef} className="pt-4 text-slate-500">
            {Array.isArray(content) ? (
              <ul className="list-disc pl-5 space-y-1">
                {content.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            ) : (
              <p>{content}</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const FAQ = () => {
    const { t } = useTranslation();

    const faqs = Array.from({ length: 13 }, (_, index) => ({
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
