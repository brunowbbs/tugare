import axios from "axios";

const api = axios.create({
  baseURL: "",
});

export async function getContent() {
  return (
    await api.get(
      "https://teste.tugare.com.br/wp-json/wp/v2/pages/59?acf_format=standard"
    )
  ).data;
}
