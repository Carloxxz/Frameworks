import Slider from "./Slider"
import Siderbar from "./Siderbar"
import Articles from "./articles"

export default function Blog() {

    return (
        <div id="home">
            <Slider
                title="Aprendiendo React"
                size="slider-small"
            />
            <div className="center">
                <div className="content">
                    {/* Listado de articulos que vendran del api rest de node */}
                    <Articles />
                    <Siderbar
                        blog="true"
                    />
                </div>
            </div>
        </div>
    )
}
