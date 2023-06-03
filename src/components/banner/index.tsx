export default function Banner({ data }) {
  return (
    <section className="bg-white py-16">
      <h2 className="text-center">{data.acf.titulo_secao_2}</h2>

      <div className="flex justify-center gap-10 mt-12">
        {data.acf.imagens_formulacao.map((img) => (
          <img src={img.imagem.sizes.large} width={230} />
        ))}
      </div>

      {/* <div className="flex gap-14 justify-center mt-12">
        <div className="w-[246px] h-[246px] bg-dark_green rounded-full flex justify-center items-center">
          <div className="w-[210px] h-[210px] bg-white rounded-full"></div>
        </div>

        <div className="w-[246px] h-[246px] bg-dark_blue rounded-full flex justify-center items-center">
          <div className="w-[210px] h-[210px] bg-white rounded-full"></div>
        </div>

        <div className="w-[246px] h-[246px] bg-dark_orange rounded-full flex justify-center items-center">
          <div className="w-[210px] h-[210px] bg-white rounded-full"></div>
        </div>
      </div> */}
    </section>
  );
}
