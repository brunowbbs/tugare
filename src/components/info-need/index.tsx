export default function InfoNeed({ data }) {
  return (
    <section className="my-16 flex flex-col items-center">
      <div>
        {data.acf?.secao_3.map((item) => (
          <>
            <h3 className="text-2xl">{item.titulo}</h3>
            <h4>{item.paragrafos}</h4>
          </>
        ))}
      </div>

      <div className="bg-ligth_green max-w-[820px] my-16 py-10 rounded-3xl shadow-md">
        <h4 className="text-center">Necessidades para NPD</h4>
        {data.acf?.necessidades_para_npd.map(({ item }) => (
          <div className="flex my-10">
            <div className="w-full max-w-[120px] min-w-[60px] mr-32 h-2 bg-dark_green"></div>
            <p className="-mt-2 font-lato max-w-[420px]">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
