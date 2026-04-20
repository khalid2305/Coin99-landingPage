import Grid99 from "./grid99";

export default function HeroSection() {
  return (
    <div className="relative flex items-center justify-center bg-white dark:bg-gray-900 w-full min-h-[400px] md:min-h-[560px]  px-4 py-16 ">
      <div className="w-full max-w-6xl mx-auto z-10">
        <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          POWER YOUR IDEAS WITH AN <br className="hidden md:block"/>
          <span className="text-blue-600">ALL-IN-ONE </span>CRYPTO <br className="hidden md:block"/>
          PLATFORM
        </h1>
      </div>
      <Grid99 className="absolute right-20 top-80 max-sm:top-77 opacity-40 md:opacity-100 z-0" />
    </div>
  );
}