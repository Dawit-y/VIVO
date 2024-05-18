function DropdownComponent() {
  return (
    <div className="flex rounded-md justify-center w-fit">
      <div class="group relative cursor-pointer border rounded-lg border-gray-400">
        <div class="flex items-center space-x-5 bg-transparent px-4">
          <a
            class="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
            onClick=""
          >
            Gender
          </a>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>

        <div class="invisible absolute z-50 flex w-full flex-col bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
          <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Male
          </a>

          <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Female
          </a>
        </div>
      </div>
    </div>
  );
}
export default DropdownComponent;