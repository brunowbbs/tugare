import takeda from "../../assets/taked.svg";

export default function Footer() {
  return (
    <footer className="sm:px-32 px-2 py-8 flex bg-dark_blue justify-between">
      <div className="w-full pr-2 text-white font-lato text-[12px]">
        <strong>Takeda Distribuidora Ltda.</strong>
        <p>
          Este site é de caráter exclusivamente informativo, destinado ao
          público em geral e foi desenvolvido de acordo com os padrões
          industriais e legais.
        </p>
        <p>
          Em caso de dúvidas, um médico sempre deverá ser consultado. SAC: 0800
          771 0345.
        </p>
        <p>C-ANPROM/BR/REV/0064 - Material produzido em junho/2022. </p>
      </div>
      <img src={takeda} className="sm:mt-0 mt-4" />
    </footer>
  );
}
