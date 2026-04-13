"use client";
export default function SignupEco() {
  return (
    <div className=" flex flex-col gap-10 items-center justify-center bg-white bg-[url('/curve1.png')] bg-cover bg-center  dark:bg-gray-950 h-[300px] border-1 dark:border-gray-800 transition-colors duration-300">
      <div className=" text-black dark:text-white">
        <h1 className="font-bold text-black dark:text-white text-3xl">FIU COMPLIANCE IN BANGALORE</h1>
        <p className="text-xs ml-10 mt-5 text-gray-600 dark:text-gray-400">Expert FIU compliance services to keep your business secure, transparent, and <br />
          fully aligned with regulatory standards.</p>
      </div>
      <button className=" bg-white dark:bg-gray-800 text-violet-500 dark:text-violet-400 border border-transparent dark:border-gray-700 active:scale-95 transition-all duration-150 text-sm font-semibold px-7 py-2.5 rounded-lg mb-8 shadow-md">
        Sign Up</button>
    </div>
  )
}