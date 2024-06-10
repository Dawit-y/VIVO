import logo from "../../assets/logo.png";
import signupillustration from "../../assets/student.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { universities } from "../../utils/universities";

function SignupStudent() {
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState();
  const [resume, setResume] = useState();
  const [errors, setErrors] = useState({});
  const { login } = useAuth();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateFields = () => {
    const newErrors = {};

    if (!user.first_name) newErrors.first_name = "First Name is required";
    if (!user.last_name) newErrors.last_name = "Last Name is required";
    if (!user.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(user.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!user.password) {
      newErrors.password = "Password is required";
    } else if (user.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    if (!user.phone_number) {
      newErrors.phone_number = "Phone Number is required";
    } else if (user.phone_number.length < 13) {
      newErrors.phone_number = "Please insert correct PhoneNumber";
    } else if (!/^\+2519|^\+2517/.test(user.phone_number)) {
      newErrors.phone_number =
        "Phone number must start with '+2519' or '+2517'";
    }

    if (!user.age) {
      newErrors.age = "Age is required";
    } else if (user.age && (user.age < 18 || user.age > 100)) {
      newErrors.age = "Age must be between 18 and 80";
    }
    if (!user.gender) newErrors.gender = "Gender is required";
    if (!user.portfolio_link)
      newErrors.portfolio_link = "Portfolio Link is required";
    if (!user.university) newErrors.university = "University is required";
    if (!user.university_id_number)
      newErrors.university_id_number = "University ID number is required";
    if (!user.department) newErrors.department = "Department is required";
    if (!user.batch) newErrors.batch = "Batch is required";
    if (!avatar) newErrors.avatar = "Profile Image is required";
    if (!resume) newErrors.resume = "Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function registerStudent(user, resume, avatar) {
    try {
      const formData = new FormData();
      for (let i = 0; i < Object.keys(user).length; i++) {
        formData.append(`${Object.keys(user)[i]}`, Object.values(user)[i]);
      }
      formData.append("resume", resume[0]);
      formData.append("avatar", avatar[0]);
      const formDataObject = Object.fromEntries(formData);
      console.log("formDataObject", formDataObject);

      const url = "students/";

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        const data = {
          email: user.email,
          password: user.password,
        };
        console.log("success", data);
        login(data, "/applcant_dashboard");
      }
    } catch (error) {
      console.log("catched", error);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (validateFields()) {
      registerStudent(user, resume, avatar);
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-white lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            src={signupillustration}
            alt=""
            className="inset-0 h-full w-1/2 opacity-80 fixed max-lg:hidden"
          />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block">
              <Link
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-200 sm:size-20"
                to="/"
              >
                <span className="sr-only">Home</span>
                <img src={logo} alt="website logo" />
              </Link>
              <h1 className="font-light text-blue-300 text-lg">
                Student Signup
              </h1>
              <h1 className="mt-2 text-2xl font-bold text-blue-300 sm:text-3xl md:text-5xl">
                Welcome to VIVO
              </h1>

              <p className="mt-2 leading-relaxed text-gray-500">
                Bid farewell to uncertainty and embrace a future filled with
                promise. Sign up now and embark on your professional journey
                with confidence!
              </p>
            </div>
            <form
              action="#"
              className="mt-8 grid grid-cols-6 gap-6"
              encType="multipart/form-data"
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  id="firstname"
                  name="first_name"
                  placeholder="John"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  onChange={handleChange}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.first_name}
                  </p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  id="lastname"
                  name="last_name"
                  placeholder="Doe"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  onChange={handleChange}
                />
                {errors.last_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.last_name}
                  </p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  placeholder="abcd123@gmail.com"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password <span className="text-red-500">*</span>
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="abcd123@gmail.com"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PhoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  id="PhoneNumber"
                  name="phone_number"
                  placeholder="+251911121314"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  onChange={handleChange}
                />
                {errors.phone_number && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone_number}
                  </p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700"
                >
                  Age <span className="text-red-500">*</span>
                </label>

                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="21"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  onChange={handleChange}
                />
                {errors.age && (
                  <p className="text-red-500 text-xs mt-1">{errors.age}</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender <span className="text-red-500">*</span>
                </label>

                <select
                  name="gender"
                  id="gender"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  onChange={handleChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="portfoliolink"
                  className="block text-sm font-medium text-gray-700"
                >
                  Portfolio Link <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  id="portfoliolink"
                  name="portfolio_link"
                  placeholder="https://www.example.com"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  onChange={handleChange}
                />
                {errors.portfolio_link && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.portfolio_link}
                  </p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="university"
                  className="block text-sm font-medium text-gray-700"
                >
                  University <span className="text-red-500">*</span>
                </label>
                <select
                  name="university"
                  id="university"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  onChange={handleChange}
                >
                  {universities.map((uv) => (
                    <option key={uv} value={uv}>
                      {uv}
                    </option>
                  ))}
                </select>
                {errors.university && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.university}
                  </p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="university_id_number"
                  className="block text-sm font-medium text-gray-700"
                >
                  University ID number <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  id="university_id_number"
                  name="university_id_number"
                  placeholder="UGR/19895/12"
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                {errors.university_id_number && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.university_id_number}
                  </p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Department"
                  className="block text-sm font-medium text-gray-700"
                >
                  Department <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  id="Department"
                  name="department"
                  onChange={handleChange}
                  placeholder="CSE"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                {errors.department && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.department}
                  </p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Batch"
                  className="block text-sm font-medium text-gray-700"
                >
                  Batch <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  id="Batch"
                  name="batch"
                  onChange={handleChange}
                  placeholder="2021"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                {errors.batch && (
                  <p className="text-red-500 text-xs mt-1">{errors.batch}</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <h1 className="block text-sm font-medium text-gray-700">
                  Profile Image <span className="text-red-500">*</span>
                </h1>
                <label
                  htmlFor="avatar"
                  className="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-28 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
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
                  Upload file
                  <input
                    type="file"
                    id="avatar"
                    className="hidden"
                    name="avatar"
                    onChange={(e) => setAvatar(e.target.files)}
                  />
                  {errors.avatar && (
                    <p className="text-red-500 text-xs mt-1">{errors.avatar}</p>
                  )}
                  <p className="text-xs font-medium text-gray-400 mt-2">
                    PNG, JPG SVG, WEBP, and GIF are Allowed.
                  </p>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <h1 className="block text-sm font-medium text-gray-700">
                  Resume <span className="text-red-500">*</span>
                </h1>
                <label
                  htmlFor="resume"
                  className="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-28 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
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
                  Upload file
                  <input
                    type="file"
                    id="resume"
                    className="hidden"
                    name="resume"
                    onChange={(e) => {
                      setResume(e.target.files);
                    }}
                  />
                  {errors.resume && (
                    <p className="text-red-500 text-xs mt-1">{errors.resume}</p>
                  )}
                  <p className="text-xs font-medium text-gray-400 mt-2">
                    PDF,.. are Allowed.
                  </p>
                </label>
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.{" "}
                    <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline">
                    terms and conditions
                  </a>
                  and
                  <a href="#" className="text-gray-700 underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  onClick={handleClick}
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-gray-700 underline">
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
export default SignupStudent;
