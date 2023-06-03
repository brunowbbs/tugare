import logo_full from "../../assets/logo_full.svg";

export default function Menu({ data }) {
  return (
    <nav className="flex items-end justify-between p-16 font-light text-sm">
      <div className="flex items-center uppercase">
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
        <div className="w-[1px] h-[170px] mx-10 bg-dark_gray"></div>
        <ul className="leading-8 ml-6">
          <li className="cursor-pointer transition duration-500 hover:font-bold">
            Termos de Uso
          </li>
          <li className="cursor-pointer transition duration-500 hover:font-bold">
            Politica de Privacidade
          </li>
        </ul>
      </div>
      <img src={logo_full} />
    </nav>
  );
}
