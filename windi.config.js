import { defineConfig } from "vite-plugin-windicss";
import filters from "windicss/plugin/filters";
import tailwindcss from 'tailwindcss';

export default defineConfig({
  preflight: false,
  plugins: [filters,tailwindcss],
  shortcuts: {
    "experience-container": "flex flex-col mt-3 ",
    "experience-company": "font-medium text-xl  inline-block",
    "experience-rol": "font-medium text-lg text-gray-700 inline-block",
    "experience-date": "font-medium text-base text-gray-500 inline-block",
    link: "font-sans font-bold text-lg ml-8  no-underline hover:underline capitalize",
    title:
      "font-semibold text-center text-5xl subtitle -sm:text-4xl",
    subtitle: "font-semibold text-3xl  subtitle -sm:text-4xl",
    "subtitle-inner":
      "font-semibold text-2xl  subtitle -sm:text-3xl",
    description: "font-medium mt-3 text-xl ",
    "item-list": "font-medium text-lg ",
    "button-primary":
      "font-bold bg-gray-900 shadow-lg mt-8 text-lg py-3 px-2 transform transition-all ease-in-out text-gray-50 w-1/4 duration-300 -md:w-1/2 hover:shadow-xl hover:scale-101",
    "card-services-container":
      "grid gap-10 grid-cols-2 items-center justify-center -sm:grid-cols-1 -sm:grid-rows-2",
  },
});
