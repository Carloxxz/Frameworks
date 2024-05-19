import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Peliculas from "./components/Peliculas";
import Formulario from "./components/Formulario";
import Search from "./components/Search";
import Article from "./components/Article";
import CreateArticle from "./components/CreateArticle";

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/articulo/:id" element={<Article />} />
                <Route path="/blog/crear" element={<CreateArticle />} />
                <Route path="/blog/busqueda/:search" element={<Search />} />
                <Route path="/redirect/:search" element={<RedirectToSearch />} />
                <Route path="/formulario" element={<Formulario />} />
                <Route path="/peliculas" element={<Peliculas />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <div className="clearfix"></div>
            <Footer />
        </BrowserRouter>
    );
}

function RedirectToSearch() {
    const { search } = useParams<{ search: string }>();
    return <Navigate to={`/blog/busqueda/${search}`} />;
}
