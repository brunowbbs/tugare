export default function Main({ data }) {
  return (
    <main>
      <div className="my-16 flex items-center gap-4 font-lato">
        <div className="h-4 w-28 bg-dark_blue rounded-tr-full rounded-br-full"></div>
        <div className="h-4 w-4 bg-dark_green rounded-full"></div>
        <h1 className="text-dark_gray uppercase">{data.title.rendered}</h1>
      </div>

      <div className="min-h-32 bg-dark_blue flex p-4 px-40 items-center">
        <div
          className="text-white font-lato font-light mr-[10%] leading-7"
          dangerouslySetInnerHTML={{ __html: data.acf.texto_banner_azul }}
        ></div>
        <img
          src={data.acf.icone_banner_azul.url}
          className="h-[100%] object-contain"
        />
      </div>

      <div className="mx-40 my-16 font-lato text-dark_gray">
        <div
          dangerouslySetInnerHTML={{ __html: data.acf.primeiro_conteudo }}
        ></div>
      </div>
    </main>
  );
}
