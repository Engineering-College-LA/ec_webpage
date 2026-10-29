import { useTranslation } from "react-i18next";

// Positions/colors transcribed exactly from the Paper "EC Redesign" Admission
// "Route" artboard (2KY-0) — a fixed 1296×470 diagram, pixel-perfect at lg+.
// Below lg, MobileRouteDiagram follows the "Поступление — Mobile v3" map.
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

// Mobile route map, transcribed from "Поступление — Mobile v3" (350×600).
// Left-side nodes are pinned with `left`, right-side ones with `right`, so the
// card can shrink on phones narrower than 390px without overlaps.
const mobileNodes = [
  { key: "meet", num: 1, dot: "bg-v2-navy-2", side: "left", top: 78 },
  { key: "exams", num: 2, dot: "bg-v2-step-2", side: "right", top: 198 },
  { key: "documents", num: 3, dot: "bg-v2-step-3", side: "left", top: 318 },
  { key: "enrollment", num: 4, dot: "bg-v2-step-4", side: "right", top: 438 },
];

function MobileRouteDiagram({ t }) {
  return (
    <div className="relative mx-auto h-[600px] w-full max-w-[350px] shrink-0 overflow-clip rounded-[14px] border border-v2-hairline bg-v2-paper lg:hidden">
      <svg viewBox="0 0 350 600" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M-20 160 C 80 120 200 200 370 140" fill="none" stroke="var(--v2-color-hairline)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path d="M-20 300 C 100 260 220 340 370 280" fill="none" stroke="var(--v2-color-hairline)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path d="M-20 430 C 90 400 230 470 370 410" fill="none" stroke="var(--v2-color-hairline)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <ellipse cx="175" cy="280" rx="60" ry="22" fill="none" stroke="var(--v2-color-hairline)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path
          d="M40 30 L40 100 C40 170 310 150 310 220 C310 290 40 270 40 340 C40 410 310 390 310 460 C310 520 175 510 175 556"
          fill="none"
          stroke="var(--v2-color-navy-2)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="2 8"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="absolute left-6 top-3.5 flex items-center gap-2">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: "color-mix(in srgb, var(--v2-color-crimson) 18%, transparent)" }}
        >
          <div className="h-3.5 w-3.5 rounded-full border-[3px] border-v2-paper bg-v2-crimson" />
        </div>
        <div className="rounded-full bg-v2-crimson px-2.5 py-[5px]">
          <div className="font-v2-heading text-[11px] font-bold leading-[14px] tracking-[0.08em] text-v2-paper">
            {t("v2.admission.route.youAreHere")}
          </div>
        </div>
      </div>

      {mobileNodes.map((node) => {
        const left = node.side === "left";
        return (
          <div key={node.key}>
            <div
              className={`absolute flex h-11 w-11 items-center justify-center rounded-full border-4 border-v2-paper font-v2-heading text-[16px] font-extrabold leading-5 text-v2-paper shadow-[0_4px_12px_#0C183038] ${node.dot} ${left ? "left-[18px]" : "right-[18px]"}`}
              style={{ top: node.top }}
            >
              {node.num}
            </div>
            <div
              className={`absolute flex flex-col gap-1 ${left ? "left-[76px] right-3" : "left-6 right-[76px] items-end text-right"}`}
              style={{ top: node.top + 2 }}
            >
              <div className="font-v2-heading text-[16px] font-bold leading-5 text-v2-navy">
                {t(`v2.admission.route.steps.${node.key}.titleShort`, {
                  defaultValue: t(`v2.admission.route.steps.${node.key}.title`),
                })}
              </div>
              <div className="font-v2-body text-v2-label leading-[19px] text-v2-slate">
                {t(`v2.admission.route.steps.${node.key}.descriptionShort`)}
              </div>
            </div>
          </div>
        );
      })}

      <svg width="28" height="44" viewBox="0 0 28 44" className="absolute left-1/2 top-[516px] -ml-1.5" aria-hidden="true">
        <path d="M6 42 V4" fill="none" stroke="var(--v2-color-navy)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M7 5 H25 L20 12 L25 19 H7 Z" fill="var(--v2-color-crimson)" />
        <circle cx="6" cy="40" r="3.5" fill="var(--v2-color-navy)" />
      </svg>
      <div className="absolute left-[calc(50%+29px)] top-[530px] flex flex-col gap-0.5">
        <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-v2-crimson">
          {t("v2.admission.route.finishEyebrow")}
        </div>
        <div className="w-max font-v2-heading text-[14px] font-extrabold leading-[18px] text-v2-navy">
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
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[22px] px-5 py-11 lg:gap-12 lg:px-v2-gutter lg:py-24">
        <div className="flex flex-col gap-[22px] lg:gap-3.5">
          <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-v2-slate lg:text-[11px] lg:leading-[14px]">
            {t("v2.admission.route.eyebrow")}
          </div>
          <div className="flex flex-col font-v2-heading lg:flex-row lg:flex-wrap lg:gap-3">
            <span className="text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] text-v2-navy lg:text-[40px] lg:leading-[48px]">
              {t("v2.admission.route.titleLine1")}
            </span>
            <span className="text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] text-v2-sky lg:text-[40px] lg:leading-[48px]">
              {t("v2.admission.route.titleLine2")}
            </span>
          </div>
        </div>

        {/* Desktop: pixel-perfect wavy route map from Paper */}
        <div className="hidden overflow-x-auto lg:block">
          <RouteDiagram t={t} />
        </div>

        {/* Mobile: wavy route map from "Поступление — Mobile v3" */}
        <MobileRouteDiagram t={t} />
      </div>
    </section>
  );
}

export default Route;
