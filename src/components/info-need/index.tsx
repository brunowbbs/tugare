import { Fade } from "react-reveal";

import fluid from "../../assets/fluid_blue_icon.svg";

export default function InfoNeed({ data }) {
  return (
    <section className="mx-40 flex flex-col items-center mt-20 text-dark_gray">
      <Fade bottom>
        <div className="">
          {data.acf?.secao_3.map((item) => (
            <div className="mb-10">
              <h3 className="text-xl text-dark_blue font-lato">
                {item.titulo}
              </h3>
              <div
                className="mt-6"
                dangerouslySetInnerHTML={{ __html: item.paragrafos }}
              ></div>
            </div>
          ))}
        </div>
      </Fade>

      <Fade bottom>
        <div className="bg-ligth_green max-w-[820px] my-16 py-10 rounded-3xl shadow-md">
          <h4 className="text-center text-2xl text-dark_blue font-lato mt-5">
            Necessidades para NPD
          </h4>
          <div className="flex items-end">
            <div>
              {data.acf?.necessidades_para_npd.map(({ item }) => (
                <div className="flex my-10">
                  <div className="w-full max-w-[120px] min-w-[60px] mr-16 h-2 bg-dark_green rounded-br-full rounded-tr-full"></div>
                  <p className="-mt-2 text-sm font-lato font-light max-w-[420px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <img src={fluid} className="mx-10 w-[80px]" />
          </div>
        </div>
      </Fade>
    </section>
  );
}
