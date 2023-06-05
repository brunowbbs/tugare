import { Fade } from "react-reveal";
import arrow from "../../assets/arrow_up.svg";
import { ContentType } from "../../hooks/useFetch";

export default function Complication({ acf }: ContentType) {
  return (
    <Fade bottom>
      <section className="bg-white sm:mx-40 mx-10 shadow-md text-dark_gray">
        <div>
          <div className="flex bg-light_orange h-14 justify-between items-center">
            <div className="flex items-center">
              <div className="sm:w-32 w-16 h-2 bg-dark_orange mr-4 rounded-br-full	rounded-tr-full"></div>
              <h3 className="text-dark_orange text-xl">
                Possíveis complicações do tratamento
              </h3>
            </div>
            <div className="bg-dark_orange w-16 h-14 rounded-bl-full	rounded-tl-full flex justify-end p-3">
              <img src={arrow} />
            </div>
          </div>

          <div
            className="sm:px-14 px-4 py-16 text-sm"
            dangerouslySetInnerHTML={{
              __html: acf?.possiveis_complicacoes || "",
            }}
          ></div>
        </div>
      </section>
    </Fade>
  );
}
