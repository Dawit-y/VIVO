import WelcomeBanner from "../../partials/Organization/dashboard/WelcomeBanner";
import DashboardCard06 from "../../partials/Organization/dashboard/DashbaordCard06";

export default () => {
  return (
    <>
      <div>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto overflow-y-hidden">
          <WelcomeBanner />
          <DashboardCard06 />
        </div>
      </div>
    </>
  );
};
