import "./assets/css/App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Siderbar from "./components/Siderbar";
import Footer from "./components/Footer";
import SeccionPrueba from "./components/SeccionPrueba";

function App() {
  return (
    <>
      <Header></Header>
      <Slider></Slider>

      <div className="center">
        <SeccionPrueba></SeccionPrueba>
        <Siderbar></Siderbar>
        <div className="clearfix"></div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
