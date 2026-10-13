import {
  ProjectBasedLearningIcon,
  MentorshipIcon,
  OlympiadsIcon,
  LabsIcon,
  EnactusIcon,
  DevClubIcon,
  HackathonsIcon,
  InternshipsIcon,
} from "../components/icons/ActivityIcons";

// Source: Paper "EC Redesign" file, page "v3 — Alpine", nav dropdown artboard (3FN-0).
// template/childCount split confirmed against each activity's own artboard
// (extracurricular artboards have 9 children, academic artboards have 7).
const ASSETS = "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW";

export const studentLifeActivities = [
  {
    slug: "project-based-learning",
    template: "academic",
    icon: ProjectBasedLearningIcon,
    i18nKey: "projectBasedLearning",
    image: `${ASSETS}/7R8XZDBZ6VJ8WV17XPSMA17THH.jpg`,
  },
  {
    slug: "mentorship",
    template: "academic",
    icon: MentorshipIcon,
    i18nKey: "mentorship",
    image: `${ASSETS}/0W2D942P3ZQREJ9YWT55G4FHJ5.jpg`,
  },
  {
    slug: "olympiads",
    template: "academic",
    icon: OlympiadsIcon,
    i18nKey: "olympiads",
    image: `${ASSETS}/0GQWB9TS6KQB0HH9RYRQP1PGN9.jpg`,
  },
  {
    slug: "labs",
    template: "academic",
    icon: LabsIcon,
    i18nKey: "labs",
    image: `${ASSETS}/4VGGRY57SRGNK37Z69ZBBS0ZBY.jpg`,
  },
  {
    slug: "enactus",
    template: "extracurricular",
    icon: EnactusIcon,
    i18nKey: "enactus",
    image: `${ASSETS}/62K6PBQ3KN13KRN0FM4DB7V44F.jpg`,
  },
  {
    slug: "devclub",
    template: "extracurricular",
    icon: DevClubIcon,
    i18nKey: "devclub",
    image: `${ASSETS}/7R8XZDBZ6VJ8WV17XPSMA17THH.jpg`,
  },
  {
    slug: "hackathons",
    template: "extracurricular",
    icon: HackathonsIcon,
    i18nKey: "hackathons",
    image: `${ASSETS}/26PMG6FJJS2GXMXQF81Y923753.jpg`,
  },
  {
    slug: "internships",
    template: "extracurricular",
    icon: InternshipsIcon,
    i18nKey: "internships",
    image: `${ASSETS}/1ZJ12MXYTWE456EP3DJVHR96AJ.jpg`,
  },
];

export const academicActivities = studentLifeActivities.filter(
  (a) => a.template === "academic",
);
export const extracurricularActivities = studentLifeActivities.filter(
  (a) => a.template === "extracurricular",
);
