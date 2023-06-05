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

  return (
    <div className="flex justify-center">
      <div className="max-w-[1440px] bg-bg">
        <Navbar />
        <Main {...data} />
        <Banner {...data} />
        <InfoNeed {...data} />
        <HowNpt />
        <Orientation {...data} />
        <Complication {...data} />
        <References {...data} />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}

export default App;
