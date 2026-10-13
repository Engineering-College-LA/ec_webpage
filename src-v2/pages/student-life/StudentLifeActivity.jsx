import { useParams, Navigate } from "react-router-dom";
import { studentLifeActivities } from "../../config/studentLifeActivities";
import ExtracurricularActivityTemplate from "./templates/ExtracurricularActivityTemplate";
import AcademicActivityTemplate from "./templates/AcademicActivityTemplate";

function StudentLifeActivity() {
  const { activitySlug } = useParams();
  const activity = studentLifeActivities.find((a) => a.slug === activitySlug);

  if (!activity) {
    return <Navigate to="/student-life" replace />;
  }

  return activity.template === "academic" ? (
    <AcademicActivityTemplate activity={activity} />
  ) : (
    <ExtracurricularActivityTemplate activity={activity} />
  );
}

export default StudentLifeActivity;
