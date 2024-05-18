import Slider from "./Slider"
import Siderbar from "./Siderbar"

export default function Home() {
    return (
        <div id="home">
            <Slider
                title="Aprendiendo React"
                btn="Ir al blog"
                size="slider-big"
            />
            <div className="center">
                <div className="center">
                    <h1>Ultimos Articulos</h1>
                    <Siderbar></Siderbar>
                </div>
            </div>

        </div >
    )
}