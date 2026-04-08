import { Link } from "lucide-react";

export default function Footer() {
  return (
    <div className=" flex flex-col justify-between p-8 bg-gray-400">

      <div className=" flex  justify-between">

        <div className="flex flex-col gap-5 mt-15 ml-15 mr-15">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl text-black font-bold">
              COIN <span className="text-blue-600">99</span>
            </h1>
            <p>
              Coin99 brings together token creation, launchpads, trading,
              payments, and <br />
              blockchain infrastructure into a single powerful ecosystem.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center shadow-md"></div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center shadow-md"></div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center shadow-md"></div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center shadow-md"></div>
          </div>
        </div>

        <div className="flex gap-10 mt-15 ml-15 mr-15">
          <div className="flex flex-col gap-3">
            <h1 className="text-black font-bold ">Products</h1>
            <p>C99 Token</p>
            <p>FundMe</p>
            <p>Business</p>
            <p>Exchange</p>
            <p>99 Pay</p>
            <p>Blockchain</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-black font-bold ">Resources</h1>
            <p>Documentation</p>
            <p>Blog</p>
            <p>Support</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-black font-bold ">Company</h1>
            <p>About</p>
            <p>Contact</p>
            <p>Support</p>
          </div>

        </div>

        
      </div>

      <div className="flex items-center justify-between m-10 ">
         <p className="text-white  mt-5 ml-15 mr-15">© 2026 — Copyright. All Rights reserved</p>
         <div className="flex gap-5">
            <a href="">Privacy policy</a>
            <a href="">Terms of service</a>
            <a href="">Cookie Settings</a>
         </div>
      </div>
    </div>
  );
}
