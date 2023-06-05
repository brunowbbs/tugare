import { Fade } from "react-reveal";

import logo_full from "../../assets/logo_full.svg";

export default function Menu() {
  return (
    <Fade bottom>
      <nav className="flex items-end justify-between p-16 sm:px-40 px-10 font-light text-sm flex-wrap">
        <div className="flex items-center uppercase flex-wrap">
          <ul className="leading-6 text-dark_gray min-w-[230px]">
            <li className="cursor-pointer transition duration-500 hover:font-bold">
              Home
            </li>
            <li className="cursor-pointer transition duration-500 hover:font-bold">
              Conheça a SIC-FI
            </li>
            <li className="cursor-pointer transition duration-500 hover:font-bold">
              Causas
            </li>
            <li className="cursor-pointer transition duration-500 hover:font-bold">
              Tratamento
            </li>
            <li className="cursor-pointer transition duration-500 hover:font-bold">
              Nutrição Parenteral Total
            </li>
            <li className="cursor-pointer transition duration-500 hover:font-bold">
              Revista digital
            </li>
          </ul>
          <div className="w-[1px] h-[170px] mx-10 bg-dark_gray sm:block hidden"></div>
          <ul className="leading-8 sm:ml-6 ml-0 text-dark_gray">
            <li className="cursor-pointer transition duration-500 hover:font-bold">
              Termos de Uso
            </li>
            <li className="cursor-pointer transition duration-500 hover:font-bold">
              Politica de Privacidade
            </li>
          </ul>
        </div>
        <img src={logo_full} className="sm:mt-0 mt-10" />
      </nav>
    </Fade>
  );
}
