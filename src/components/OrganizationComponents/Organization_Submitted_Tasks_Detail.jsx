import { Input, initTWE } from "tw-elements";

initTWE({ Input });
export default () => {
  return (
    <div>
      <div>
        <div class="flex rounded-t-lg bg-top-color sm:px-2 w-full">
          <div class="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <img src="https://media.licdn.com/dms/image/C4D03AQH8qidO0nb_Ng/profile-displayphoto-shrink_800_800/0/1615696897070?e=2147483647&v=beta&t=ia3wfE2J7kVLdBy9ttkgUDAA_ul29fymykhQo0lABDo" />
          </div>

          <div class="w-2/3 sm:text-center pl-5 mt-10 text-start">
            <p class="font-poppins font-bold text-heading sm:text-4xl text-2xl">
              Submitted Tasks Detail
            </p>
            <p class="text-heading">Post title</p>
          </div>
        </div>

        <div class="p-5">
          <div class="flex flex-col sm:flex-row sm:mt-10">
            <div class="flex flex-col sm:w-1/3">
              <div class="py-3 sm:order-none order-3">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  Applicant Contact
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div>
                  <div class="flex items-center my-1">
                    <a class="w-6 text-gray-700 hover:text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="h-4"
                      >
                        <path
                          fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        ></path>
                      </svg>
                    </a>
                    <div class="ml-2 truncate">amitpachange@gmail.com</div>
                  </div>
                  <div class="flex items-center my-1">
                    <a
                      class="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds YouTube"
                      href=""
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        class="h-4"
                      >
                        <path
                          fill="currentColor"
                          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                        ></path>
                      </svg>
                    </a>
                    <div>9145258775</div>
                  </div>
                  <div class="flex items-center my-1">
                    <a
                      class="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds Facebook"
                      href=""
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        class="h-4"
                      >
                        <path
                          fill="currentColor"
                          d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        ></path>
                      </svg>
                    </a>
                    <div>sale galli latur</div>
                  </div>
                  <div class="flex items-center my-1">
                    <a
                      class="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds Twitter"
                      href=""
                      target="_blank"
                    >
                      <svg
                        class="h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        ></path>
                      </svg>
                    </a>
                    <div>amitpachange21</div>
                  </div>
                </div>
              </div>

              <div class="py-3 sm:order-none order-2">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  Skills
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div>
                  <div class="flex items-center my-1">
                    <a
                      class="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds YouTube"
                      href=""
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 515 515"
                        class="h-4"
                      ></svg>
                    </a>
                    <div class="ml-2">Java</div>
                  </div>
                  <div class="flex items-center my-1">
                    <a
                      class="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds Facebook"
                      href=""
                      target="_blank"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Logo"
                            transform="translate(0.000000, -144.000000)"
                          >
                            <g
                              id="Android_2_fill"
                              transform="translate(0.000000, 144.000000)"
                            >
                              <path
                                d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                id="MingCute"
                                fill-rule="nonzero"
                              ></path>
                              <path
                                d="M18.4472,4.10555 C18.9412,4.35254 19.1414,4.95321 18.8944,5.44719 L17.7199,7.79631 C20.3074,9.6038 22,12.6042 22,16 L22,17 C22,18.1046 21.1046,19 20,19 L4,19 C2.89543,19 2,18.1046 2,17 L2,16 C2,12.6042 3.69259,9.60379 6.28014,7.79631 L5.10558,5.44719 C4.85859,4.95321 5.05881,4.35254 5.55279,4.10555 C6.04677,3.85856 6.64744,4.05878 6.89443,4.55276 L8.028,6.8199 C9.24553,6.29239 10.5886,6 12,6 C13.4114,6 14.7545,6.29239 15.972,6.81991 L17.1056,4.55276 C17.3526,4.05878 17.9532,3.85856 18.4472,4.10555 Z M7.5,12 C6.67157,12 6,12.6716 6,13.5 C6,14.3284 6.67157,15 7.5,15 C8.32843,15 9,14.3284 9,13.5 C9,12.6716 8.32843,12 7.5,12 Z M16.5,12 C15.6716,12 15,12.6716 15,13.5 C15,14.3284 15.6716,15 16.5,15 C17.3284,15 18,14.3284 18,13.5 C18,12.6716 17.3284,12 16.5,12 Z"
                                id="形状结合"
                                fill="#09244B"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                    <div class="ml-2">Andoid</div>
                  </div>
                  <div class="flex items-center my-1">
                    <a
                      class="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds Twitter"
                      href=""
                      target="_blank"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </a>
                    <div class="ml-2">Html, Css, JS</div>
                  </div>
                </div>
              </div>

              <div class="py-3 sm:order-none order-1">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  Education Background
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div class="flex flex-col space-y-1">
                  <div class="flex flex-col">
                    <p class="font-semibold text-xs text-gray-700">2021</p>
                    <p class="text-sm font-medium">
                      <span class="text-green-700">
                        B.E. (INFORMATION TECHNOLOGY)
                      </span>
                      , PIMPRI CHINCHWAD COLLEGE OF ENGINEERING, PUNE.
                    </p>
                    <p class="font-bold text-xs text-gray-700 mb-2">
                      Percentage: 76.61
                    </p>
                  </div>
                  <div class="flex flex-col">
                    <p class="font-semibold text-xs text-gray-700">2017</p>
                    <p class="text-sm font-medium">
                      <span class="text-green-700">HSC</span>, RAJARSHI SHAHU
                      COLLEGE, LATUR.
                    </p>
                    <p class="font-bold text-xs text-gray-700 mb-2">
                      Percentage: 80.77
                    </p>
                  </div>
                  <div class="flex flex-col">
                    <p class="font-semibold text-xs text-gray-700">2015</p>
                    <p class="text-sm font-medium">
                      <span class="text-green-700">SSC</span>, DNYANESHWAR HIGH
                      SCHOOL, LATUR.
                    </p>
                    <p class="font-bold text-xs text-gray-700 mb-2">
                      Percentage: 93.80
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
              <div class="py-3">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  post Description
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>
                <p>
                  To get a career opportunity which would help me to utilize my
                  academic background to assist me to gain experience, employ my
                  excellent skills, and enable me to make positive contribution.
                </p>
              </div>

              <div class="py-3">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  Professional Experience
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div class="flex flex-col">
                  <div class="flex flex-col">
                    <p class="text-lg font-bold text-gray-700">
                      Netcracker Technology | Software Engineer
                    </p>
                    <p class="font-semibold text-sm text-gray-700">
                      2021 - Present
                    </p>
                    <p class="font-semibold text-sm text-gray-700 mt-2 mb-1">
                      Key Responsibilities
                    </p>
                    <ul class="text-sm list-disc pl-4 space-y-1">
                      <li>Working on customer facing product</li>
                      <li>Deliverying highly efficient solutions</li>
                      <li>Solving critical bugs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="py-3">
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div class="flex flex-col">
                  <div class="flex flex-col">
                    <p class="text-lg font-semibold text-gray-700">
                      Cover letter
                    </p>
                    <p class="font-normal text-sm text-gray-700 mb-1 pl-2">
                      A platform to sell as well as to buy used books only for
                      PCCoE College due to this reuse of books will be there
                      beneficial for environment also indirectly helps increase
                      communication between juniors and seniors.
                    </p>
                  </div>
                  <div class="flex flex-col">
                    <p class="text-lg font-semibold text-gray-700">
                      Parking Automation System
                    </p>
                    <p class="font-normal text-sm text-gray-700 mb-1 pl-2">
                      it’s a web application which helps you to book your slot
                      for your car just like booking a movie ticket from home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="relative mb-3" data-twe-input-wrapper-init>
            <input
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInputText"
              placeholder="Example label"
            />
            <label
              for="exampleFormControlInputText"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              Text input
            </label>
          </div>
          <br />
          <div class="relative mb-3" data-twe-input-wrapper-init>
            <textarea
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea1"
              rows="4"
              placeholder="Your message"
            ></textarea>
            <label
              for="exampleFormControlTextarea1"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              Example textarea
            </label>
          </div>
          <button class="bg-red-500 hover:bg-blue-700 mr-4 text-white font-bold py-2 px-4 rounded-full">
            Evaluate
          </button>
        </div>
      </div>
    </div>
  );
};
