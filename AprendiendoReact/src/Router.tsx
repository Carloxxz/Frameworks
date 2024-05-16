import { BrowserRouter, Routes, Route } from "react-router-dom";
import Peliculas from "./components/Peliculas";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" Component={Peliculas} />
                <Route />
            </Routes>
        </BrowserRouter>
    )
}