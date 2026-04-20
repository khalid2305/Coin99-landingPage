"use client";
export default function SignupEco() {
  return (
    <div className="flex flex-col gap-8 md:gap-10 items-center justify-center bg-white bg-[url('/curve1.png')] bg-cover bg-center dark:bg-gray-950 min-h-[300px] border-t dark:border-gray-800 transition-colors duration-300 px-4 py-12 text-center">
      <div className="text-black dark:text-white max-w-2xl mx-auto">
        <h1 className="font-bold text-black text-white dark:text-gray text-2xl md:text-3xl lg:text-4xl">FIU COMPLIANCE IN BANGALORE</h1>
        <p className="text-xs md:text-sm mt-4 md:mt-5  text-white dark:text-gray-400 max-w-xl mx-auto">
          Expert FIU compliance services to keep your business secure, transparent, and fully aligned with regulatory standards.
        </p>
      </div>
      <button className="bg-white dark:bg-gray-800 text-blue-600 dark:text-violet-400 border border-transparent dark:border-gray-700 active:scale-95 transition-all duration-150 text-sm font-semibold px-7 py-2.5 rounded-lg shadow-md">
        Sign Up
      </button>
    </div>
  )
}