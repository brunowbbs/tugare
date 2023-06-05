import { Fade } from "react-reveal";

import { ContentType } from "../../hooks/types";

export default function Banner({ acf }: ContentType) {
  return (
    <section className="bg-white py-16">
      <div
        dangerouslySetInnerHTML={{ __html: acf?.titulo_secao_2 || "" }}
        className="text-center capitalize text-dark_blue"
      ></div>
      <Fade bottom>
        <div className="flex justify-center gap-10 mt-12 flex-wrap">
          {acf?.imagens_formulacao.map((img) => (
            <img src={img.imagem.sizes.large} width={200} />
          ))}
        </div>
      </Fade>
    </section>
  );
}
