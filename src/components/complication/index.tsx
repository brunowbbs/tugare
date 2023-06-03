import arrow from "../../assets/arrow_up.svg";

export default function Complication({ data }: unknown) {
  return (
    <section className="bg-white mx-16 px-16 py-20 shadow-md">
      <div>
        <div className="flex bg-light_orange h-12 justify-between items-center">
          <div className="flex items-center">
            <div className="w-32 h-2 bg-dark_orange mr-2 rounded-br-full	rounded-tr-full"></div>
            <h3 className="text-dark_orange">Como é realizada a NPT</h3>
          </div>
          <div className="bg-dark_orange w-16 h-12 rounded-bl-full	rounded-tl-full flex justify-end p-2	">
            <img src={arrow} />
          </div>
        </div>

        <div className="px-14 py-16">
          <p>{data.acf.possiveis_complicacoes}</p>
        </div>
      </div>
    </section>
  );
}
