import { apiSlice } from "../api/apiSlice";

export const postsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      async queryFn(
        { data, organization_id },
        { dispatch, getState },
        extraOptions,
        baseQuery
      ) {
        const { skills, availability, cover_letter, ...postData } = data;
        const requirements = { skills, availability, cover_letter };

        const formData = new FormData();

        // Append other fields as strings
        Object.entries(postData).forEach(([key, value]) => {
          if (value !== undefined) {
            formData.append(key, value);
          }
        });

        // Append organization ID separately
        formData.append("organization", organization_id);

        // Append image correctly if it exists
        if (data.image && data.image[0]) {
          formData.append("image", data.image[0]); // Send as a binary file
        }

        console.log("form data", formData);

        try {
          // Send initial post creation request
          const postResponse = await baseQuery({
            url: "/posts/",
            method: "POST",
            body: formData,
          });

          if (postResponse.error) {
            throw new Error("Failed to create post.");
          }

          // Post created successfully; now add requirements
          const postId = postResponse.data.id;
          const requirementsResponse = await baseQuery({
            url: `/posts/${postId}/requirements/`,
            method: "POST",
            body: requirements,
          });

          if (requirementsResponse.error) {
            throw new Error("Failed to add requirements.");
          }

          // Return combined response
          return {
            data: {
              ...postResponse.data,
              requirements: requirementsResponse.data,
            },
          };
        } catch (error) {
          console.error("Error in createPost:", error);
          return { error: { status: "CUSTOM_ERROR", message: error.message } };
        }
      },
    }),
  }),
});

export const { useCreatePostMutation } = postsApi;
