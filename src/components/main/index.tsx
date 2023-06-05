import { Fade } from "react-reveal";

import { ContentType } from "../../hooks/types";

export default function Main({ acf, title }: ContentType) {
  return (
    <main>
      <Fade bottom>
        <div className="my-16 flex items-center gap-4 font-lato">
          <div className="h-4 sm:w-20 w-10 bg-dark_blue rounded-tr-full rounded-br-full"></div>
          <div className="h-4 w-4 bg-dark_green rounded-full"></div>
          <h1 className="text-dark_gray uppercase">{title?.rendered}</h1>
        </div>
      </Fade>

      <Fade bottom>
        <div className="min-h-32 bg-dark_blue flex p-4 sm:px-40 px-10 items-center">
          <div
            className="text-white font-lato font-light mr-[10%] leading-7"
            dangerouslySetInnerHTML={{ __html: acf?.texto_banner_azul || "" }}
          ></div>
          <img
            src={acf?.icone_banner_azul.url}
            className="h-[100%] object-contain"
          />
        </div>
      </Fade>

      <Fade bottom>
        <div className="sm:px-40 px-10 my-16 font-lato text-dark_gray">
          <div
            dangerouslySetInnerHTML={{ __html: acf?.primeiro_conteudo || "" }}
          ></div>
        </div>
      </Fade>
    </main>
  );
}
