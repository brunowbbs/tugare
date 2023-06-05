import logo from "../../assets/logo.svg";
import seach_icon from "../../assets/search_icon.svg";
import menu from "../../assets/menu.svg";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex py-4 shadow-md bg-light font-lato">
      <div className="sm:hidden px-4 flex justify-between flex-1">
        <img src={logo} width={28} className="-mt-3 object-contain" />
        <img
          src={menu}
          width={30}
          height={30}
          className="sm:hidden flex"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <ul className="sm:px-16 sm:flex hidden flex-1 justify-between items-center font-normal text-dark_green uppercase text-sm flex-wrap">
        <li>
          <img src={logo} width={28} className="-mt-3 object-contain" />
        </li>
        <li className="font-[400] cursor-pointer my-4">Home</li>
        <li className="font-[400] cursor-pointer">Conheça a doença</li>
        <li className="font-[400] cursor-pointer">Causas</li>
        <li className="font-[400] cursor-pointer">Tratamento</li>
        <li className="text-dark_orange cursor-pointer my-4">
          Nutrição Parenteral total
        </li>
        <li className="flex gap-2 items-center">
          <div className="cursor-pointer text-red-600 border-2 border-red-600 px-4 rounded-full transition duration-500 hover:bg-red-600 hover:text-white">
            Profissionais da saúde
          </div>
          <img
            src={seach_icon}
            width={18}
            height={18}
            className="object-contain cursor-pointer"
          />
        </li>
      </ul>

      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } w-full mt-12 bg-white absolute flex-col flex-1 justify-between items-center font-normal text-dark_green uppercase text-sm flex-wrap gap-4 py-4 shadow-md`}
      >
        <li className="font-[400] cursor-pointer">Home</li>
        <li className="font-[400] cursor-pointer">Conheça a doença</li>
        <li className="font-[400] cursor-pointer">Causas</li>
        <li className="font-[400] cursor-pointer">Tratamento</li>
        <li className="text-dark_orange cursor-pointer">
          Nutrição Parenteral total
        </li>
        <li className="flex gap-2 items-center">
          <div className="cursor-pointer text-red-600 border-2 border-red-600 px-4 rounded-full transition duration-500 hover:bg-red-600 hover:text-white">
            Profissionais da saúde
          </div>
          <img
            src={seach_icon}
            width={18}
            height={18}
            className="object-contain cursor-pointer"
          />
        </li>
      </ul>
    </nav>
  );
}
