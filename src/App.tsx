import Banner from "./components/banner";
import Complication from "./components/complication";
import Footer from "./components/footer";
import HowNpt from "./components/how-npt";
import InfoNeed from "./components/info-need";
import Main from "./components/main";
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import Orientation from "./components/orientation";
import References from "./components/references";
import useFetch from "./hooks/useFetch";

function App() {
  const { isFetching, error, data } = useFetch();

  if (isFetching) {
    return <h3>Carregando...</h3>;
  }

  if (error) {
    return <h3>Erro ao buscar informação</h3>;
  }

  // useEffect(() => {
  //   fetch(
  //     "https://teste.tugare.com.br/wp-json/wp/v2/pages/59?acf_format=standard"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div className="flex justify-center">
      <div className="max-w-[1440px] bg-bg">
        <Navbar data={data} />
        <Main data={data} />
        <Banner data={data} />
        <InfoNeed data={data} />
        <HowNpt data={data} />
        <Orientation data={data} />
        <Complication data={data} />
        <References data={data} />
        <Menu data={data} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
