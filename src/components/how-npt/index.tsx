import { Fade } from "react-reveal";

import icon_1 from "../../assets/icon_1.svg";
import icon_2 from "../../assets/icon_2.svg";
import icon_3 from "../../assets/icon_3.svg";
import icon_4 from "../../assets/icon_4.svg";
import icon_5 from "../../assets/icon_5.svg";

import arrow from "../../assets/arrow_up.svg";

export default function HowNpt() {
  return (
    <Fade left>
      <section className="bg-white sm:mx-40 mx-10 shadow-md text-dark_gray">
        <div>
          <div className="flex bg-light_orange h-14 justify-between items-center">
            <div className="flex items-center">
              <div className="sm:w-32 w-16 h-2 bg-dark_orange mr-4 rounded-br-full rounded-tr-full"></div>
              <h3 className="text-dark_orange text-xl">
                Como é realizada a NPT
              </h3>
            </div>
            <div className="bg-dark_orange w-16 h-14 rounded-bl-full rounded-tl-full flex justify-end p-3">
              <img src={arrow} />
            </div>
          </div>

          <div className="sm:px-14 px-4 py-16">
            {dataNpt.map((item) => (
              <div className="flex mb-6 items-center">
                <div className="w-[40px] h-[40px] bg-dark_orange rounded-full p-[10px] flex justify-center items-center">
                  <img src={item.img} className="w-8 h-8 object-scale-down" />
                </div>
                <div
                  className="w-full sm:ml-10 ml-4 text-sm"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
}

const dataNpt = [
  {
    text: "A NPT é administrada através de um acesso posicionado em uma veia calibrosa, no que é conhecido como cateter venoso central.<sup>2,3</sup>",
    img: icon_1,
  },
  {
    text: "Uma NPT dura normalmente 10-12 horas por dia e ocupa 5 a 7 dias por semana.<sup>2,3</sup> ",
    img: icon_2,
  },
  {
    text: "A maior parte das pessoas que estão à domicílio administra sua infusão de nutrição parenteral durante a noite com uma bomba de infusão.4. No entanto, como a NPT pode causar a necessidade de urinar durante a noite, ela pode interferir e reduzir a qualidade do sono.2 Como resultado, algumas pessoas preferem realizar a NPT durante o dia.<sup>2</sup>",
    img: icon_3,
  },
  {
    text: "A fim de minimizar o risco de infecção, a NPT deve ser administrada em um ambiente limpo, e o cateter deve permanecer na mesma posição. A tubulação externa deve ser trocada regularmente, com os curativos sendo mantidos estéreis e sendo trocados conforme for orientado por seu médico ou enfermeiro.<sup>3,4</sup>",
    img: icon_4,
  },
  {
    text: "A solução de nutrientes e fluidos que é bombeada deve ficar armazenada em um refrigerador, mas deve-se tirar a dose adequada 4-6 horas antes da administração para permitir que a temperatura ambiente seja atingida.<sup>3</sup>",
    img: icon_5,
  },
];
