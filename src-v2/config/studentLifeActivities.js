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
    // Paper academic artboard: hero photo and one photo per project card.
    heroImage: `${ASSETS}/0W2D942P3ZQREJ9YWT55G4FHJ5.jpg`,
    projectImages: [{ src: `${ASSETS}/7R8XZDBZ6VJ8WV17XPSMA17THH.jpg` }, { src: `${ASSETS}/4VGGRY57SRGNK37Z69ZBBS0ZBY.jpg` }, { src: `${ASSETS}/26PMG6FJJS2GXMXQF81Y923753.jpg` }],
    image: `${ASSETS}/7R8XZDBZ6VJ8WV17XPSMA17THH.jpg`,
  },
  {
    slug: "mentorship",
    template: "academic",
    icon: MentorshipIcon,
    i18nKey: "mentorship",
    // Paper academic artboard: hero photo and one photo per project card.
    heroImage: `${ASSETS}/26PMG6FJJS2GXMXQF81Y923753.jpg`,
    projectImages: [{ src: `${ASSETS}/62K6PBQ3KN13KRN0FM4DB7V44F.jpg` }, { src: `${ASSETS}/7TMMR26QP9WJBR439RHEK93B5Z.jpg`, position: "50% 30%" }, { src: `${ASSETS}/7E2X8326KK5JEMD3Y8N7S6QS6N.jpg`, position: "50% 40%" }],
    image: `${ASSETS}/0W2D942P3ZQREJ9YWT55G4FHJ5.jpg`,
  },
  {
    slug: "olympiads",
    template: "academic",
    icon: OlympiadsIcon,
    i18nKey: "olympiads",
    primaryLink: "/events/national-math-competition",
    secondaryLink: "#cycle",
    // Paper academic artboard: hero photo and one photo per project card.
    heroImage: `${ASSETS}/4VGGRY57SRGNK37Z69ZBBS0ZBY.jpg`,
    projectImages: [{ src: `${ASSETS}/0GQWB9TS6KQB0HH9RYRQP1PGN9.jpg`, position: "50% 40%" }, { src: `${ASSETS}/1NRT7HH082XEJ9V3NQM3MYM4XC.jpg` }, { src: `${ASSETS}/7R8XZDBZ6VJ8WV17XPSMA17THH.jpg` }],
    image: `${ASSETS}/0GQWB9TS6KQB0HH9RYRQP1PGN9.jpg`,
  },
  {
    slug: "labs",
    template: "academic",
    icon: LabsIcon,
    i18nKey: "labs",
    secondaryLink: "/#contact",
    mobileLink: "/#contact",
    // Paper academic artboard: hero photo and one photo per project card.
    heroImage: `${ASSETS}/62K6PBQ3KN13KRN0FM4DB7V44F.jpg`,
    projectImages: [{ src: `${ASSETS}/7R8XZDBZ6VJ8WV17XPSMA17THH.jpg` }, { src: `${ASSETS}/26PMG6FJJS2GXMXQF81Y923753.jpg` }, { src: `${ASSETS}/7TMMR26QP9WJBR439RHEK93B5Z.jpg`, position: "50% 30%" }],
    image: `${ASSETS}/4VGGRY57SRGNK37Z69ZBBS0ZBY.jpg`,
  },
  {
    slug: "enactus",
    template: "extracurricular",
    icon: EnactusIcon,
    i18nKey: "enactus",
    image: `${ASSETS}/1ZJ12MXYTWE456EP3DJVHR96AJ.jpg`,
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
    image: `${ASSETS}/1NRT7HH082XEJ9V3NQM3MYM4XC.jpg`,
    // Mobile artboard shows the "team" and "participation" facts.
    mobileFacts: [2, 3],
  },
  {
    slug: "internships",
    template: "extracurricular",
    icon: InternshipsIcon,
    i18nKey: "internships",
    image: `${ASSETS}/7E2X8326KK5JEMD3Y8N7S6QS6N.jpg`,
    // Mobile artboard shows the "when" and "duration" facts.
    mobileFacts: [0, 2],
  },
];

export const academicActivities = studentLifeActivities.filter(
  (a) => a.template === "academic",
);
export const extracurricularActivities = studentLifeActivities.filter(
  (a) => a.template === "extracurricular",
);
