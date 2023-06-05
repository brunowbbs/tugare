import { Fade } from "react-reveal";
import { ContentType } from "../../hooks/useFetch";

export default function Orientation({ acf }: ContentType) {
  return (
    <Fade right>
      <section className="flex justify-center mt-24 mb-14">
        <div className="bg-light_blue max-w-[510px] flex flex-col items-center p-10 rounded-2xl">
          <img
            src={acf?.como_realizar_npt.icone_box}
            className="sm:w-32 w-24  -mt-24"
          />
          <p className="sm:mb-7 mb-5 sm:mt-7 mt-5 text-center text-dark_blue font-lato sm:text-2xl text-xl sm:px-16 px-10">
            {acf?.como_realizar_npt.descricao}
          </p>
        </div>
      </section>
    </Fade>
  );
}
