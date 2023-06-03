import arrow from "../../assets/arrow_up.svg";

export default function References({ data }) {
  return (
    <section className="flex mt-16 bg-ligth_green py-8">
      <div className="flex gap-2">
        <div className="w-28 bg-dark_green h-6 rounded-br-full rounded-tr-full"></div>
        <img src={arrow} className="w-8 h-8 mr-2" />
      </div>

      <div className="w-full px-8">
        <p className="text-dark_blue font-bold uppercase mb-4">Referências</p>
        <p className="">{data.acf.referencias}</p>
      </div>
    </section>
  );
}
