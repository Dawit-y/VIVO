import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading, setAuthToken } from "./store/features/auth/authSlice";
import "./css/style.css";
import "./charts/ChartjsConfig";

// Import layout components
import ProLayout from "./pages/AdminDashboard/pro_layout";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";

// Import common pages
import Home from "./pages/Home";
import LandingPage from "./pages/landingpage";
import ErrorPage from "./pages/error_page";
import SignIn from "./pages/AuthPages/SignIn";
import WelcomePage from "./pages/AuthPages/Welcome";
import SignupCompany from "./pages/AuthPages/Signup_company";
import SignupStudent from "./pages/AuthPages/Signup_student";
import SignupUVcoordinator from "./pages/AuthPages/Signup_UVcoordinator";
import ApplicantSignup from "./pages/AuthPages/ApplicantSignup";
import Unauthorized from "./components/Unauhtorized";
import WaitApproval from "./components/wait_approval";

// Import common components
import Modal from "./components/modal";
import LoadingIndicator from "./components/loading_indicator";
import SuccessfulAlert from "./components/successful_alert";
import ErrorAlert from "./components/Error_alert";
import SuccessPage from "./components/success_page";
import Confetti from "./components/confetti";

// Import dashboards
import Dashboard from "./pages/AdminDashboard/Dashboard";
import SyscooDashboard from "./pages/SystemCoordinatorDashboard/SyscooDashboard";
import OrganizationDashboard from "./pages/OrganizationDashboard/OrganizationDashboard";
import ApplicantDashboard from "./pages/ApplicantDashboard/applicant_dashboard";
import UvCoordDashboard from "./pages/UvCoordinatorDashboard/UvCoordDashboard";
import Supervisor from "./pages/SupervisorDashboard/Supervisor";

// Import Admin components
import Admin_home from "./pages/AdminDashboard/admin_home";
import Applicants_list from "./pages/AdminDashboard/Sidebar_elements/applicants_list";
import Organizations_list from "./pages/AdminDashboard/Sidebar_elements/organizations_list";
import Internship_opportunity_card from "./pages/AdminDashboard/Sidebar_elements/internship_opportunity_card";
import Uvcoordinator_list from "./pages/AdminDashboard/Sidebar_elements/uvcoordinator_list";
import Uvsupervisor_list from "./pages/AdminDashboard/uvsupervisor_list";
import ApplicantDetail from "./components/AdminComponents/ApplicantDetail";
import OrganizationDetail from "./components/AdminComponents/OrganizationDetail";
import UvCoordinatorDetail from "./components/AdminComponents/UvCoordinator_detail";
import UvSupervisorDetail from "./components/AdminComponents/UvSupervisor_detail";
import Opportunity_details_component from "./components/AdminComponents/opportunity_details_component";

// Import System Coordinator components
import SystemCoordinator from "./pages/SystemCoordinatorDashboard/SystemCoordinator";
const Internship_post_card = React.lazy(() =>
  import(
    "./pages/SystemCoordinatorDashboard/Sidebar_elements/Internship_post_card"
  )
);
const Syscoordinator_post_detail = React.lazy(() =>
  import("./components/SystemCoordinatorComponents/Syscoordinator_post_detail")
);
const Volunteer_post_card = React.lazy(() =>
  import(
    "./pages/SystemCoordinatorDashboard/Sidebar_elements/Volunteer_post_card"
  )
);
const Syscoordinator_volunteer_post_detail = React.lazy(() =>
  import(
    "./components/SystemCoordinatorComponents/Syscoordinator_volunteer_post_detail"
  )
);
const Syscoordinator_Applications = React.lazy(() =>
  import(
    "./pages/SystemCoordinatorDashboard/Sidebar_elements/Syscoordinator_Applications"
  )
);
const Syscoordinator_Application_detail = React.lazy(() =>
  import(
    "./components/SystemCoordinatorComponents/Syscoordinator_Application_detail"
  )
);
const Syscoordinator_Applicants = React.lazy(() =>
  import(
    "./pages/SystemCoordinatorDashboard/Sidebar_elements/Syscoordinator_Applicants"
  )
);
const Applicant_progress = React.lazy(() =>
  import("./components/SystemCoordinatorComponents/Applicant_progress")
);
const System_coordinator_add_post = React.lazy(() =>
  import("./components/SystemCoordinatorComponents/System_coordinator_add_post")
);
const System_coordinator_addTask = React.lazy(() =>
  import("./components/SystemCoordinatorComponents/System_coordinator_addTask")
);
const SystemCoordinator_Submitted_tasks = React.lazy(() =>
  import(
    "./pages/SystemCoordinatorDashboard/Sidebar_elements/SystemCoordinator_Submitted_tasks"
  )
);
const Sys_coordinator_submitted_Task_Details = React.lazy(() =>
  import(
    "./components/SystemCoordinatorComponents/Sys_coordinator_submitted_Task_Details"
  )
);
const Evaluated_applicants = React.lazy(() =>
  import(
    "./pages/SystemCoordinatorDashboard/Sidebar_elements/Evaluated_applicants"
  )
);
const Certifiy_Applicants = React.lazy(() =>
  import("./components/SystemCoordinatorComponents/Certifiy_Applicants")
);

// Import Organization components
import Organization from "./pages/OrganizationDashboard/Organization";
const InternshipPostCard = lazy(() =>
  import("./pages/OrganizationDashboard/Sidebar_elements/Internship_post_card")
);
const Organization_Post_details_component = lazy(() =>
  import(
    "./components/OrganizationComponents/Organization_Post_details_component"
  )
);
const Organization_volunteer_detail = lazy(() =>
  import("./components/OrganizationComponents/organization_volunteer_detail")
);
const Organization_Add_post = lazy(() =>
  import("./components/OrganizationComponents/Organization_Add_post")
);
const AddTask = lazy(() =>
  import("./components/OrganizationComponents/AddTask")
);
const Organization_Applications = lazy(() =>
  import(
    "./pages/OrganizationDashboard/Sidebar_elements/Organization_Applications"
  )
);
const ApplicationDetails = lazy(() =>
  import("./components/OrganizationComponents/Application_Details")
);
const Organization_Applicants = lazy(() =>
  import(
    "./pages/OrganizationDashboard/Sidebar_elements/Organization_Applicants"
  )
);
const Progress_page = lazy(() =>
  import("./components/OrganizationComponents/Progress_page")
);
const Organization_Submitted_tasks = lazy(() =>
  import(
    "./pages/OrganizationDashboard/Sidebar_elements/Organization_Submitted_tasks"
  )
);
const SubmittedTaskDetails = lazy(() =>
  import(
    "./components/OrganizationComponents/Organization_Submitted_Tasks_Detail"
  )
);

// Import Applicant components
import Applicant_profile_component from "./components/ApplicantComponents/applicant_profile_component";
import Settings_component from "./components/ApplicantComponents/settings_component";
import Task from "./components/ApplicantComponents/task";
import ApplyComponent from "./components/apply_component";
import TaskSection1 from "./components/TaskSectionComponents/task_section_1";
import TaskSection2 from "./components/TaskSectionComponents/task_section_2";
import TaskSection3 from "./components/TaskSectionComponents/task_section_3";
import TaskSection4 from "./components/TaskSectionComponents/task_section_4";
import TaskSection5 from "./components/TaskSectionComponents/task_section_5";

// Import UV Coordinator components
import ViewStudents from "./pages/UvCoordinatorDashboard/Sidebar_elements/ViewStudents";
import AddSupervisor from "./pages/UvCoordinatorDashboard/Sidebar_elements/AddSupervisor";
import ViewSuperVisors from "./pages/UvCoordinatorDashboard/Sidebar_elements/ViewSuperVisors";
import SuperVisorDetail from "./pages/UvCoordinatorDashboard/Sidebar_elements/SuperVisorDetail";
import AssignSupervisor from "./pages/UvCoordinatorDashboard/Sidebar_elements/AssignSupervisor";
import EditAssignamet from "./pages/UvCoordinatorDashboard/Sidebar_elements/EditAssignament";
import StudentDetail from "./pages/UvCoordinatorDashboard/Sidebar_elements/StudentDetail";

// Import UV Supervisor components
import ListOfStudents from "./pages/SupervisorDashboard/Sidebar_elements/ListOfStudents";
import StudentDetails from "./pages/SupervisorDashboard/Sidebar_elements/StudentDetails";
import StudentList from "./pages/SupervisorDashboard/Sidebar_elements/StudentList";
import StudentEvaluation from "./pages/SupervisorDashboard/Sidebar_elements/StudentEvaluation";

// Import Landing Page components
import Internships from "./components/LandingPageComponents/internships";
import Volunteers from "./components/LandingPageComponents/volunteer";

// Import Posts
import Posted_opportunity_details from "./pages/Posts/posted_opportunity_details";

const SuspenseLayout = () => (
  <React.Suspense fallback={<LoadingIndicator />}>
    <Outlet />
  </React.Suspense>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  const dispatch = useDispatch();

  useEffect(() => {
    const storedTokens = localStorage.getItem("tokens");
    if (storedTokens) {
      const parsedTokens = JSON.parse(storedTokens);
      dispatch(setAuthToken(parsedTokens));
    }
    dispatch(setLoading(false));
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<ProLayout />}>
          <Route path="/" element={<Home footer={true} />}>
            <Route index element={<LandingPage />} />

            <Route path="internships" element={<Internships />} />
            <Route path="volunteers" element={<Volunteers />} />
            <Route path="wait" element={<WaitApproval />} />
            <Route
              path="posted_opportunity_detail"
              element={<Posted_opportunity_details />}
            />
          </Route>

          <Route
            element={<RequireAuth allowedRoles={["applicant", "student"]} />}
          >
            {/* <Route path="apply" element={<Apply_form />} /> */}
            {/* <Route path="applyproposal" element={<ApplyComponent />} /> */}

            <Route path="profile" element={<Applicant_profile_component />} />
            <Route path="settings" element={<Settings_component />} />
            <Route path="applicant_dashboard" element={<Home footer={false} />}>
              <Route index element={<ApplicantDashboard />} />
              <Route path="applyproposal" element={<ApplyComponent />} />
              <Route path="task" element={<Task />}>
                <Route index element={<Navigate to="1/section/1" />} />
                <Route path=":taskId/section/1" element={<TaskSection1 />} />
                <Route path=":taskId/section/2" element={<TaskSection2 />} />
                <Route path=":taskId/section/3" element={<TaskSection3 />} />
                <Route path=":taskId/section/4" element={<TaskSection4 />} />
                <Route path=":taskId/section/5" element={<TaskSection5 />} />
              </Route>
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={["admin"]} />}>
            <Route exact path="/admin_dashboard" element={<Dashboard />}>
              <Route index element={<Admin_home />} />

              <Route path="applicants_list" element={<ProLayout />}>
                <Route index element={<Applicants_list />} />
                <Route path="applicant_detail" element={<ApplicantDetail />} />
              </Route>
              <Route path="organizations_list" element={<ProLayout />}>
                <Route index element={<Organizations_list />} />
                <Route
                  path="orgaization_detail"
                  element={<OrganizationDetail />}
                />
              </Route>

              <Route path="uvcoordinator_list" element={<ProLayout />}>
                <Route index element={<Uvcoordinator_list />} />
                <Route
                  path="uvcoordinator_detail"
                  element={<UvCoordinatorDetail />}
                />
              </Route>
              <Route path="uvSupervisor_list" element={<ProLayout />}>
                <Route index element={<Uvsupervisor_list />} />
                <Route
                  path="uvSupervisor_detail"
                  element={<UvSupervisorDetail />}
                />
              </Route>
              <Route path="internship_opportunities" element={<ProLayout />}>
                <Route index element={<Internship_opportunity_card />} />
                <Route
                  path="internship_opportunity_details"
                  element={<Opportunity_details_component />}
                />
              </Route>
            </Route>
          </Route>

          <Route
            element={<RequireAuth allowedRoles={["system_coordinator"]} />}
          >
            <Route
              exact
              path="/System_Coordinator"
              element={<SyscooDashboard />}
            >
              <Route index element={<SystemCoordinator />} />
              <Route path="internship_posts" element={<ProLayout />}>
                <Route index element={<Internship_post_card />} />
                <Route
                  path="internship_posts_details"
                  element={<Syscoordinator_post_detail />}
                />
              </Route>
              <Route path="volunteer_posts" element={<ProLayout />}>
                <Route index element={<Volunteer_post_card />} />
                <Route
                  path="volunteer_posts_details"
                  element={<Syscoordinator_volunteer_post_detail />}
                />
              </Route>
              <Route path="Applications" element={<ProLayout />}>
                <Route index element={<Syscoordinator_Applications />} />
                <Route
                  path="Application_Details"
                  element={<Syscoordinator_Application_detail />}
                />
              </Route>
              <Route path="Applicants" element={<ProLayout />}>
                <Route index element={<Syscoordinator_Applicants />} />
                <Route
                  path="applicant_progress"
                  element={<Applicant_progress />}
                />
              </Route>
              <Route path="add_post" element={<ProLayout />}>
                <Route index element={<System_coordinator_add_post />} />
                <Route
                  path="add_task"
                  element={<System_coordinator_addTask />}
                />
              </Route>
              <Route path="Submitted_Tasks" element={<ProLayout />}>
                <Route index element={<SystemCoordinator_Submitted_tasks />} />
                <Route
                  path="Submitted_Tasks_Detail"
                  element={<SubmittedTaskDetails />}
                />
              </Route>
              <Route path="Evaluated_applicant" element={<ProLayout />}>
                <Route index element={<Evaluated_applicants />} />
                <Route
                  path="Certifiy_Applicants"
                  element={<Certifiy_Applicants />}
                />
              </Route>
            </Route>
          </Route>
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={["organization"]} />}>
              <Route
                exact
                path="/organization"
                element={<OrganizationDashboard />}
              >
                <Route index element={<Organization />} />
                <Route element={<SuspenseLayout />}>
                  <Route path="internship_posts" element={<ProLayout />}>
                    <Route index element={<InternshipPostCard />} />
                    <Route
                      path="internship_posts_details"
                      element={<Organization_Post_details_component />}
                    />
                  </Route>
                  <Route path="volunteer_posts" element={<ProLayout />}>
                    <Route index element={<Volunteer_post_card />} />
                    <Route
                      path="internship_posts_details"
                      element={<Organization_volunteer_detail />}
                    />
                  </Route>
                  <Route path="add_post" element={<ProLayout />}>
                    <Route index element={<Organization_Add_post />} />
                    <Route path="add_task" element={<AddTask />} />
                  </Route>
                  <Route path="Applications" element={<ProLayout />}>
                    <Route index element={<Organization_Applications />} />
                    <Route
                      path="Application_Details"
                      element={<ApplicationDetails />}
                    />
                  </Route>
                  <Route path="Applicants" element={<ProLayout />}>
                    <Route index element={<Organization_Applicants />} />
                    <Route
                      path="Applicant_progress"
                      element={<Progress_page />}
                    />
                  </Route>
                  <Route path="Submitted_Tasks" element={<ProLayout />}>
                    <Route index element={<Organization_Submitted_tasks />} />
                    <Route
                      path="Submitted_Tasks_Detail"
                      element={<Sys_coordinator_submitted_Task_Details />}
                    />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
          <Route
            element={<RequireAuth allowedRoles={["university_coordinator"]} />}
          >
            <Route exact path="/UvCoordinator" element={<UvCoordDashboard />}>
              <Route index element={<ViewStudents />} />
              <Route path="AddSupervisor" element={<ProLayout />}>
                <Route index element={<AddSupervisor />} />
              </Route>
              <Route path="ViewSupervisors" element={<ProLayout />}>
                <Route index element={<ViewSuperVisors />} />
                <Route path="Supervisordetail" element={<SuperVisorDetail />} />
              </Route>
              <Route path="AssignSupervisor" element={<ProLayout />}>
                <Route index element={<AssignSupervisor />} />
                <Route path="Editassignament" element={<EditAssignamet />} />
              </Route>

              <Route path="ViewStudents" element={<ProLayout />}>
                <Route index element={<ViewStudents />} />
                <Route path="StudentDetail" element={<StudentDetail />} />
              </Route>
            </Route>
          </Route>

          <Route
            element={<RequireAuth allowedRoles={["university_supervisor"]} />}
          >
            <Route exact path="/Supervisor" element={<Supervisor />}>
              <Route index element={<ListOfStudents />} />
              <Route path="ListOfStudents" element={<ProLayout />}>
                <Route index element={<ListOfStudents />} />
                <Route path="StudentListDetail" element={<StudentList />}>
                  <Route index element={<StudentDetails />} />
                </Route>
              </Route>
              <Route path="EvaluateStudent" element={<StudentEvaluation />} />
            </Route>
          </Route>
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<ApplicantSignup />} />
        <Route path="/signup_company" element={<SignupCompany />} />
        <Route path="/signup_student" element={<SignupStudent />} />
        <Route path="/Signup_UVCoordinator" element={<SignupUVcoordinator />} />
        <Route path="/pagenotfound" element={<ErrorPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/loading" element={<LoadingIndicator />} />
        <Route path="/successalert" element={<SuccessfulAlert />} />
        <Route path="/alert" element={<ErrorAlert />} />
        <Route path="/successpage" element={<SuccessPage />} />
        <Route path="/confetti" element={<Confetti />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </>
  );
}

export default App;
