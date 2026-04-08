"use client";
export default function SignupEco(){
  return (
    <div className=" flex flex-col gap-10 items-center bg-white h-[300px] border-1">
        <div className=" text-black">
          <h1 className="font-bold text-black text-3xl">FIU COMPLIANCE IN BANGALORE</h1>
          <p className="text-xs ml-10 mt-5">Expert FIU compliance services to keep your business secure, transparent, and <br />
          fully aligned with regulatory standards.</p>
        </div>
        <button className=" bg-white text-violet-500 active:scale-95 transition-all duration-150 text-sm font-semibold px-7 py-2.5 rounded-lg mb-8 shadow-md">
            Sign Up</button>
    </div>
  )
}