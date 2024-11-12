import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelecter } from "../../store/features/auth/authSlice";
import { useForm } from "react-hook-form";
import { optional, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreatePostMutation } from "../../store/features/posts/postApi";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ACCEPTED_FILE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/svg+xml",
  "image/gif",
];

const AddPost = () => {
  const { organization_id } = useSelector(userSelecter);
  const addPostSchema = z.object({
    title: z.string().min(1, { message: "Title is Required" }),
    duration: z.string().min(1, { message: "Duration is Required" }),
    type: z.string().min(1, { message: "Type is Required" }),
    level: z.string().min(1, { message: "Level is Required" }),
    category: z.string().min(1, { message: "Category is Required" }),
    skills_gained: z.string().optional(),
    description: z.string().optional(),
    skills: z.boolean().optional(),
    availability: z.boolean().optional(),
    cover_letter: z.boolean().optional(),
    file: z
      .any()
      .optional()
      .refine(
        (files) =>
          files?.length === 0 ||
          (files?.length === 1 && ACCEPTED_FILE_TYPES.includes(files[0]?.type)),
        { message: "Invalid file. Choose a JPEG, PNG, WEBP, SVG, or GIF image" }
      )
      .refine(
        (files) =>
          files?.length === 0 ||
          (files?.length === 1 && files[0]?.size <= MAX_FILE_SIZE),
        { message: "Max file size allowed is 5MB." }
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addPostSchema),
    defaultValues: { skills: false, availability: false, cover_letter: false },
  });

  const [createPost, { isLoading, isSuccess, error }] = useCreatePostMutation();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("data", data);
    const result = await createPost({ data, organization_id });

    // Check if the response is successful
    if (result?.data && isSuccess) {
      console.log("Post created successfully:", result.data);
    } else if (result.error) {
      console.error("Error creating post:", result.error);
    }
  };

  return (
    <>
      <div className="px-5 mt-3">
        <div className="dark:bg-slate-900 bg-white flex items-center">
          <div className="container mx-auto">
            <h1 className="dark:text-slate-100 mb-8 text-2xl font-bold text-center leading-none tracking-tighter text-neutral-600 md:text-3xl lg:text-4xl">
              Create Internships/Volunteer Works
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle mb-2 w-full">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-900"
                >
                  Title
                </label>
                <input
                  type="text"
                  {...register("title")}
                  className="border-slate-300 peer block min-h-[auto] w-full rounded mb-2"
                  id="title"
                  placeholder="Enter Post Title"
                  aria-label="Post Title"
                />
                {errors.title && (
                  <span className="text-red-500 text-sm text-bold mt-2">
                    {errors.title?.message}
                  </span>
                )}
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium text-gray-900"
                >
                  Duration
                </label>
                <input
                  type="text"
                  {...register("duration")}
                  className="border-slate-300 peer block min-h-[auto] w-full rounded"
                  id="duration"
                  placeholder="Enter Post Title"
                  aria-label="Post Title"
                />
                {errors.duration && (
                  <span className="text-red-500 text-sm text-bold mt-2">
                    {errors.duration?.message}
                  </span>
                )}
                <label
                  htmlFor="image"
                  className="bg-white text-gray-500 font-semibold text-base mt-5 rounded max-w-xlg h-60 p-10 flex flex-col items-center justify-content cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-11 mb-2 fill-gray-500"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                      data-original="#000000"
                    />
                    <path
                      d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                      data-original="#000000"
                    />
                  </svg>
                  Upload Image to be used as a Thumbnail for your Post
                  <input
                    id="image"
                    type="file"
                    {...register("file")}
                    name="file"
                    className="hidden"
                  />
                  <p className="text-xs font-medium text-gray-400 mt-2">
                    PNG, JPG, SVG, WEBP, and GIF are allowed.
                  </p>
                </label>
                {errors.file && (
                  <span className="text-red-500 text-sm text-bold mt-2">
                    {errors.file?.message}
                  </span>
                )}

                <div className="flex mt-5 justify-content items-center">
                  <div className="mr-4">
                    <label className="mr-3">Type</label>
                    <select
                      {...register("type")}
                      className="rounded-md border-2 border-blue-200 py-1.5 pl-3 text-sm font-medium"
                    >
                      <option value="">Select Type</option>
                      <option value="Internship">Internship</option>
                      <option value="VolunteerWork">Volunteer Work</option>
                    </select>
                    {errors.type && (
                      <span className="text-red-500 text-sm text-bold mt-2">
                        {errors.type?.message}
                      </span>
                    )}
                  </div>

                  <div className="mr-4">
                    <label className="mr-3">Level</label>
                    <select
                      {...register("level")}
                      className="rounded-md border-2 border-blue-200 py-1.5 pl-3 text-sm font-medium"
                    >
                      <option value="">Select Level</option>
                      <option value="Entry">Entry Level</option>
                      <option value="Mid">Mid Level</option>
                      <option value="Senior">Senior Level</option>
                    </select>
                    {errors.level && (
                      <span className="text-red-500 text-sm text-bold mt-2">
                        {errors.level?.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="mr-3">Category</label>
                    <select
                      {...register("category")}
                      className="rounded-md border-2 border-blue-200 py-1.5 pl-3 text-sm font-medium"
                    >
                      <option value="">Select Category</option>
                      <option value="Banking">Banking</option>
                      <option value="Business">Business</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Data">Data</option>
                      <option value="Finance">Finance</option>
                      <option value="Security">Security</option>
                      <option value="Software Engineering">
                        Software Engineering
                      </option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.category && (
                      <span className="text-red-500 text-sm text-bold mt-2">
                        {errors.category?.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-cols justify-content w-full mt-6">
                  <label className="mb-10 mt-10">Requirements</label>
                  <label
                    htmlFor="skills"
                    className="flex cursor-pointer items-start gap-4 mb-4 mt-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        {...register("skills")}
                        className="size-4 rounded border-gray-300"
                        id="skills"
                      />
                    </div>

                    <div>
                      <strong className="font-medium text-gray-900">
                        Skills
                      </strong>
                      <p className="mt-1 text-sm text-gray-900">
                        Specify whether you want to inquire about the
                        applicant&apos;s skills.
                      </p>
                    </div>
                  </label>
                  {errors.skills && (
                    <span className="text-red-500 text-sm text-bold mt-2">
                      {errors.skills?.message}
                    </span>
                  )}

                  <label
                    htmlFor="availability"
                    className="flex cursor-pointer items-start mb-4 gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        {...register("availability")}
                        className="size-4 rounded border-gray-300"
                        id="availability"
                      />
                    </div>

                    <div>
                      <strong className="font-medium text-gray-900">
                        Availability
                      </strong>
                      . . .
                      <p className="mt-1 text-sm text-gray-900">
                        Specify whether you want to inquire about the
                        applicant&apos;s availability for the position.
                      </p>
                    </div>
                  </label>
                  {errors.availability && (
                    <span className="text-red-500 text-sm text-bold mt-2">
                      {errors.availability?.message}
                    </span>
                  )}

                  <label
                    htmlFor="cover_letter"
                    className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        {...register("cover_letter")}
                        className="size-4 rounded border-gray-300"
                        id="cover_letter"
                      />
                    </div>

                    <div>
                      <strong className="text-pretty font-medium text-gray-900">
                        Cover Letter
                      </strong>
                      <p className="mt-1 text-sm text-gray-900">
                        Specify whether you want to inquire about the
                        applicant&apos;s motivation for choosing your company.
                      </p>
                    </div>
                  </label>
                  {errors.cover_letter && (
                    <span className="text-red-500 text-sm text-bold mt-2">
                      {errors.cover_letter?.message}
                    </span>
                  )}
                </div>

                <div
                  className="relative mt-10 mb-3"
                  data-twe-input-wrapper-init
                >
                  <div>
                    <label
                      htmlFor="skills_gained"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Skills Gained
                    </label>
                    <textarea
                      id="skills_gained"
                      {...register("skills_gained")}
                      className="mt-2 w-full h-40 rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                      rows={2}
                      cols={2}
                      placeholder="Type skills gained after the post comma separated e.g problem solving, "
                    ></textarea>
                  </div>
                  {errors.skills_gained && (
                    <span className="text-red-500 text-sm text-bold mt-2">
                      {errors.skills_gained?.message}
                    </span>
                  )}
                </div>
                <div
                  className="relative mt-10 mb-3"
                  data-twe-input-wrapper-init
                >
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Descriptions
                    </label>
                    <textarea
                      id="description"
                      {...register("description")}
                      className="mt-2 w-full h-40 rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                      rows="4"
                      placeholder="Enter the descriptions"
                    ></textarea>
                  </div>
                  {errors.description && (
                    <span className="text-red-500 text-sm text-bold mt-2">
                      {errors.description?.message}
                    </span>
                  )}
                </div>

                <div className="z-50 mt-6 rounded-lg">
                  <button
                    type="submit"
                    className="items-center w-1/3 mx-auto mt-10 block px-10 py-3.5 text-base font-medium text-center cursor-pointer text-slate-100 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-indigo-500"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Continue to add Tasks"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
