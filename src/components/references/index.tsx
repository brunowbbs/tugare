import { Fade } from "react-reveal";

import arrow from "../../assets/arrow_up.svg";
import { ContentType } from "../../hooks/useFetch";

export default function References({ acf }: ContentType) {
  return (
    <Fade bottom>
      <section className="flex mt-16 bg-ligth_green py-8">
        <div className="flex gap-2">
          <div className="sm:w-28 w-10 bg-dark_green h-6 rounded-br-full rounded-tr-full"></div>
          <img src={arrow} className="w-8 h-8 mr-2" />
        </div>

        <div className="w-full sm:px-8 px-2 flex flex-wrap">
          <p className="text-dark_blue font-bold uppercase mb-4">Referências</p>
          <div
            className="font-light sm:text-sm text-[8px]"
            dangerouslySetInnerHTML={{ __html: acf?.referencias || "" }}
          ></div>
        </div>
      </section>
    </Fade>
  );
}
