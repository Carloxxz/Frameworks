import Slider from "./Slider";
import Siderbar from "./Sidebar";
import Articles from "./Articles";
import { useParams } from "react-router-dom";

export default function Search() {
    const { search } = useParams<{ search: string }>();

    return (
        <div id="home">
            <Slider
                title={"Busqueda: " + search}
                size="slider-small"
            />
            <div className="center">
                <div className="content">
                    {/* Listado de articulos que vendran del api rest de node */}
                    <Articles search={search} />
                    <Siderbar
                        blog="true"
                    />
                </div>
            </div>
        </div>
    );
}