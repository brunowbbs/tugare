import logo_full from "../../assets/logo_full.svg";

export default function Menu({ data }) {
  return (
    <nav className="flex items-end justify-between p-16">
      <div className="flex items-center uppercase">
        <ul className="leading-8">
          <li>Home</li>
          <li>Conheça a SIC-FI</li>
          <li>Causas</li>
          <li>Tratamento</li>
          <li>Nutrição Parenteral Total</li>
          <li>Revista digital</li>
        </ul>
        <div className="w-[1px] h-[170px] mx-10 bg-black"></div>
        <ul className="leading-8">
          <li>Termos de Uso</li>
          <li>Politica de Privacidade</li>
        </ul>
      </div>
      <img src={logo_full} />
    </nav>
  );
}
