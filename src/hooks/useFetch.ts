import { useQuery } from "@tanstack/react-query";
import { getContent } from "../services/api";

export type ContentType = {
  title?: {
    rendered?: string;
  };
  acf?: {
    texto_banner_azul: string;
    icone_banner_azul: {
      url: string;
      sizes: {
        large: string;
      };
    };
    primeiro_conteudo: string;
    titulo_secao_2: string;
    imagens_formulacao: {
      imagem: {
        sizes: {
          large: string;
        };
      };
    }[];
    secao_3: {
      titulo: string;
      paragrafos: string;
    }[];
    necessidades_para_npd: {
      item: string;
    }[];
    como_realizar_npt: {
      icone_box: string;
      descricao: string;
    };
    possiveis_complicacoes: string;
    referencias: string;
  };
};

export type ContentProps = {
  data: ContentType;
};

export default function useFetch() {
  const { data, isFetching, error } = useQuery<ContentType>(
    ["@content"],
    getContent,
    {
      refetchOnWindowFocus: false,
    }
  );

  return {
    data,
    isFetching,
    error,
  };
}
