export default function Wallet() {
  return (
    <div className="relative flex flex-col items-center justify-between w-100% h-[500px] bg-[url('/back.png')] bg-cover bg-center p-3 bg-white" >
      <div className="  flex  gap-10">
        <img src=" Silver.png" alt="" className=" absolute  top-10 left-30 w-[242px] h-[155px]  " />
        <img src="99.png" alt="" className="absolute w-[300px] h-auto top-30 right-110"/>
        <img src="Gold.png"  alt="" className="absolute  top-50 right-30 w-[242px] h-[155px] " />
      </div>
      <div className="flex items-center justify-content-center">
        <h1 className="text-3xl text-black font-bold">
          START YOUR INDIAN CRYPTO JOURNEY{" "}
        </h1>
        <button className="mt-7 ml-4  bg-white text-violet-500 active:scale-95 transition-all duration-150 border-2 font-bold border-black text-sm font-semibold px-7 py-2.5 rounded-lg mb-8 ">
          Signup
        </button>
      </div>
    </div>
  );
}