export default function Orientation({ data }) {
  return (
    <section className="flex justify-center mt-24">
      {/* <h1>Hello Orientation</h1> */}
      <div className="bg-light_blue max-w-[510px] flex flex-col items-center p-10 rounded-2xl">
        <img
          src={data.acf.como_realizar_npt.icone_box}
          className="w-32  -mt-24"
        />
        <p className="mb-7 mt-7 text-center text-dark_blue font-lato text-2xl px-16">
          {data.acf.como_realizar_npt.descricao}
        </p>
      </div>
    </section>
  );
}
