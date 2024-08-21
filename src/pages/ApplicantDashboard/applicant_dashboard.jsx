import { useState } from "react";
import Apply from "../../components/ApplicantComponents/Apply";
import MainTaskPage from "../../components/ApplicantComponents/Main_Task_Page";
import Achievements from "../../components/ApplicantComponents/Achievements";
import Steps_component from "../../components/ApplicantComponents/steps_component";

const ApplicantDashboard = () => {
  const [currentStep, setCurrentStep] = useState("Progress");

  return (
    <>
      <Steps_component
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <div>
        {currentStep === "Progress" && <MainTaskPage />}
        {currentStep === "achievements" && <Achievements />}
        {currentStep === "apply" && <Apply />}
      </div>
    </>
  );
};
export default ApplicantDashboard;
