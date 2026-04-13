import Grid99 from "./grid99";

export default function HeroSection() {
  return (
    <div className=" relative flex items-center bg-white dark:bg-gray-900 w-100% h-[560px] ">
      <div>
        <h1 className="text-black dark:text-white text-5xl ml-15 text-bold ">POWER YOUR IDEAS WITH AN <br />
          <span className="font-bold text-blue-600">ALL-IN-ONE </span>CRYPTO <br />
          PLATFORM</h1>
      </div>
      <Grid99 className="absolute right-100 top-80" />
    </div>
  )
}