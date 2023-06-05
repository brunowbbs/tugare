import logo from "../../assets/logo.svg";
import seach_icon from "../../assets/search_icon.svg";

export default function Navbar() {
  return (
    <nav className="flex py-4 shadow-md bg-light px-16 font-lato">
      <ul className="flex flex-1 justify-between items-center font-normal text-dark_green uppercase text-sm flex-wrap">
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
    </nav>
  );
}
