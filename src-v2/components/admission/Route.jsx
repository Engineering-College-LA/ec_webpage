import { useTranslation } from "react-i18next";

const steps = [
  { key: "meet", dot: "bg-v2-navy-2" },
  { key: "exams", dot: "bg-v2-step-2" },
  { key: "documents", dot: "bg-v2-step-3" },
  { key: "enrollment", dot: "bg-v2-step-4" },
];

// Positions/colors transcribed exactly from the Paper "EC Redesign" Admission
// "Route" artboard (2KY-0) — a fixed 1296×470 diagram, pixel-perfect at lg+.
// Below lg it doesn't reflow (Paper never designed a mobile version of the
// wavy path), so mobile keeps the straight responsive stepper instead.
const nodes = [
  { key: "meet", num: 1, dot: "bg-v2-navy-2", left: 112, top: 302, textLeft: 186, textTop: 340, textWidth: 250 },
  { key: "exams", num: 2, dot: "bg-v2-step-2", left: 452, top: 132, textLeft: 400, textTop: 28, textWidth: 270 },
  { key: "documents", num: 3, dot: "bg-v2-step-3", left: 802, top: 292, textLeft: 740, textTop: 366, textWidth: 260 },
  { key: "enrollment", num: 4, dot: "bg-v2-step-4", left: 1122, top: 122, textLeft: 1070, textTop: 200, textWidth: 200 },
];

function RouteDiagram({ t }) {
  return (
    <div className="relative hidden h-[470px] w-[1296px] shrink-0 overflow-clip rounded-2xl border border-v2-hairline bg-v2-paper lg:block">
      <svg width="1296" height="470" viewBox="0 0 1296 470" className="absolute left-0 top-0">
        <path d="M-40 420 C 180 330 300 420 520 360 S 860 230 1080 300 S 1300 380 1360 330" fill="none" stroke="var(--v2-color-hairline)" strokeWidth="1.5" />
        <path d="M-40 460 C 200 380 320 470 540 410 S 880 290 1100 350 S 1310 430 1360 390" fill="none" stroke="var(--v2-color-hairline)" strokeWidth="1.5" />
        <path d="M-40 60 C 160 120 360 20 560 70 S 900 150 1120 60 S 1300 20 1360 50" fill="none" stroke="var(--v2-color-hairline)" strokeWidth="1.5" />
        <path d="M-40 20 C 180 80 380 -20 580 30 S 920 110 1140 20" fill="none" stroke="var(--v2-color-hairline)" strokeWidth="1.5" />
        <ellipse cx="660" cy="230" rx="120" ry="46" fill="none" stroke="var(--v2-color-hairline)" strokeWidth="1.5" />
        <ellipse cx="660" cy="230" rx="70" ry="24" fill="none" stroke="var(--v2-color-hairline)" strokeWidth="1.5" />
      </svg>
      <svg width="1296" height="470" viewBox="0 0 1296 470" className="absolute left-0 top-0">
        <path
          d="M56 412 C 100 400 110 350 140 330 C 260 260 340 160 480 160 C 640 160 680 320 830 320 C 990 320 1020 150 1150 150 C 1210 150 1230 110 1246 84"
          fill="none"
          stroke="var(--v2-color-navy-2)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="2 10"
        />
      </svg>

      <div className="absolute left-9 top-[392px] flex items-center gap-2.5">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: "color-mix(in srgb, var(--v2-color-crimson) 18%, transparent)" }}
        >
          <div className="h-4 w-4 rounded-full border-[3px] border-v2-paper bg-v2-crimson" />
        </div>
        <div className="rounded-full bg-v2-crimson px-3 py-1.5">
          <div className="font-v2-heading text-[12px] font-bold leading-4 tracking-[0.08em] text-v2-paper">
            {t("v2.admission.route.youAreHere")}
          </div>
        </div>
      </div>

      {nodes.map((node) => (
        <div key={node.key}>
          <div
            className={`absolute flex h-14 w-14 items-center justify-center rounded-full border-[5px] border-v2-paper font-v2-heading text-[20px] font-extrabold leading-6 text-v2-paper shadow-[0_6px_18px_#0C183038] ${node.dot}`}
            style={{ left: node.left, top: node.top }}
          >
            {node.num}
          </div>
          <div
            className="absolute flex flex-col gap-1.5"
            style={{ left: node.textLeft, top: node.textTop, width: node.textWidth }}
          >
            <div className="font-v2-heading text-[18px] font-bold leading-[22px] text-v2-navy">
              {t(`v2.admission.route.steps.${node.key}.title`)}
            </div>
            <div className="font-v2-body text-[14px] leading-[21px] text-v2-slate">
              {t(`v2.admission.route.steps.${node.key}.description`)}
            </div>
          </div>
        </div>
      ))}

      <svg width="34" height="54" viewBox="0 0 34 54" className="absolute left-[1238px] top-[34px]">
        <path d="M8 52 V4" fill="none" stroke="var(--v2-color-navy)" strokeWidth="3" strokeLinecap="round" />
        <path d="M9 5 H30 L24 14 L30 23 H9 Z" fill="var(--v2-color-crimson)" />
        <circle cx="8" cy="50" r="4" fill="var(--v2-color-navy)" />
      </svg>
      <div className="absolute left-[1040px] top-10 flex w-[186px] flex-col items-end gap-0.5">
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-crimson">
          {t("v2.admission.route.finishEyebrow")}
        </div>
        <div className="w-max font-v2-heading text-[16px] font-extrabold leading-5 text-v2-navy">
          {t("v2.admission.route.finishTitle")}
        </div>
      </div>
    </div>
  );
}

// Transcribed from the Paper "EC Redesign" Admission "Route" artboard (2KY-0).
function Route() {
  const { t } = useTranslation();

  return (
    <section id="route" className="bg-v2-mist">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-14 lg:gap-12 lg:px-v2-gutter lg:py-24">
        <div className="flex flex-col gap-3.5">
          <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
            {t("v2.admission.route.eyebrow")}
          </div>
          <div className="flex flex-wrap gap-3 font-v2-heading">
            <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[40px] lg:leading-[48px]">
              {t("v2.admission.route.titleLine1")}
            </span>
            <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-sky lg:text-[40px] lg:leading-[48px]">
              {t("v2.admission.route.titleLine2")}
            </span>
          </div>
        </div>

        {/* Desktop: pixel-perfect wavy route map from Paper */}
        <div className="overflow-x-auto">
          <RouteDiagram t={t} />
        </div>

        {/* Mobile: straight responsive stepper (Paper has no mobile route map) */}
        <div className="flex flex-col gap-10 rounded-2xl border border-v2-hairline bg-v2-paper p-8 lg:hidden">
          <div className="relative flex flex-col gap-10">
            {steps.map((step, i) => (
              <div key={step.key} className="relative flex flex-col gap-3.5">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[5px] border-v2-paper font-v2-heading text-[20px] font-extrabold leading-6 text-v2-paper shadow-[0_6px_18px_#0C183038] ${step.dot}`}
                >
                  {i + 1}
                </div>
                <div className="font-v2-heading text-[17px] font-bold leading-[22px] text-v2-navy">
                  {t(`v2.admission.route.steps.${step.key}.title`)}
                </div>
                <div className="font-v2-body text-[14px] leading-[21px] text-v2-slate">
                  {t(`v2.admission.route.steps.${step.key}.description`)}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 border-t border-v2-hairline pt-8">
            <div className="flex flex-col items-start gap-0.5">
              <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-crimson">
                {t("v2.admission.route.finishEyebrow")}
              </div>
              <div className="font-v2-heading text-[16px] font-extrabold leading-5 text-v2-navy">
                {t("v2.admission.route.finishTitle")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Route;
