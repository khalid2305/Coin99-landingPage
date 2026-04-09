export default function FundMe() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col bg-white">
        <img src="" alt="Nexus" />
        <div className="flex items-center justify-center bg-red-500 w-[90px] h-[40px] rounded-full">
          <div className="text-5xl rounded-full  w-[8px] h-[8px] mr-1 bg-white"></div>
          <p>Live</p>
        </div>
      </div>
      <div>
        <div className="text-black text-2xl">Nexus</div>
        <p>
          Nexus is a excisting Web3 game which immerse players in a inspired
          view
        </p>
      </div>
      <div>
        <p>Create and manage</p>
        <img src="" alt="twitter" />
      </div>

      {/* inner box */}
      <div className=" flex justify-between w-80% h-80%">
        <div className="flex flex-col gap-5">
          <p>Raised</p>
          <p>27,00,000</p>
        </div>
        <div className="flex justify-between">
          <p>+$500</p>
          <p>+$500</p>
        </div>
      </div>

      {/* timer */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-10">
            <p>Until Finish</p>
            <p className="text-black  text-bold text-2xl">1D : 23H : 24M : 41S</p>
        </div>
        <button>Participate</button>
      </div>
    </div>
  );
}
