export default function Banner({ data }) {
  return (
    <section className="bg-white py-16">
      <div
        dangerouslySetInnerHTML={{ __html: data.acf.titulo_secao_2 }}
        className="text-center capitalize text-dark_blue"
      ></div>

      <div className="flex justify-center gap-10 mt-12">
        {data.acf.imagens_formulacao.map((img) => (
          <img src={img.imagem.sizes.large} width={230} />
        ))}
      </div>
    </section>
  );
}
