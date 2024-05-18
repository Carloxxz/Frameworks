import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Peliculas from "./components/Peliculas";
import Formulario from "./components/Formulario";

export default function Router() {
    return (
        <BrowserRouter>

            <Header></Header>

            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/formulario" element={<Formulario />} />
                <Route path="/peliculas" element={<Peliculas />} />



                <Route path="*" element={<Error />} />

            </Routes>

            <div className="clearfix"></div>

            <Footer></Footer>

        </BrowserRouter>
    )
}