import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const organizationsAdaptor = createEntityAdapter()
const initialState = organizationsAdaptor.getInitialState()

export const organizationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchApplications: builder.query({
      query: (organization_id) =>
        `organizations/${organization_id}/applications`,
    }),
    fetchAcceptedApplicants: builder.query({
      query: (organization_id) =>
        `organizations/${organization_id}/applications`,
      transformResponse: (response) =>
        response
          .filter((application) => application.status === "accepted")
          .map((application) => ({
            id: application.id.toString(),
            applicant_id: application.applicant.id,
            image: application.applicant.avatar, 
            name: `${application.applicant.first_name} ${application.applicant.last_name}`,
            email: application.applicant.email,
            phone_number: application.applicant.phone_number,
            gender: application.applicant.gender,
            post_id: application.post.id,
            post: application.post.title,
            spent: new Date(application.created).toLocaleDateString(),
            status: "something",
            progress: "25%",
          })),
    }),
    fetchSubmittedTasks: builder.query({
      query: (organization_id) =>
        `organizations/${organization_id}/submitted_tasks/`,
    }),
  }),
});

export const {
  useFetchApplicationsQuery,
  useFetchAcceptedApplicantsQuery,
  useFetchSubmittedTasksQuery,
} = organizationApi;
