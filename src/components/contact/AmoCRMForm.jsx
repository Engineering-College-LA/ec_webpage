import { useEffect, useRef } from "react";

export function AmoCRMForm() {
  const containerRef = useRef(null);

  useEffect(() => {
    const renderForm = () => {
      if (containerRef.current) {
        // Clear any previously injected form/scripts on hot reload or remount
        containerRef.current.innerHTML = "";

        // Remove globals to force fresh initialization if necessary
        delete window.amo_forms_params;
        delete window.amo_forms_load;
        delete window.amo_forms_loaded;

        const script1 = document.createElement("script");
        script1.innerHTML = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1685658",hash:"c684f19fa0dfa5e2e942d600f33f50c6",locale:"en"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`;

        const script2 = document.createElement("script");
        script2.id = "amoforms_script_1685658";
        script2.async = true;
        script2.charset = "utf-8";
        script2.src = "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1775052541";

        containerRef.current.appendChild(script1);
        containerRef.current.appendChild(script2);
      }
    };

    renderForm();
  }, []);

  return <div ref={containerRef} className="w-full amo-crm-form-container min-h-[500px]" />;
}
