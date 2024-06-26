import Slider from "./Slider"
import Siderbar from "./Sidebar"
import Articles from "./Articles"

export default function Blog() {

    return (
        <div id="home">
            <Slider
                title="Blog"
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
