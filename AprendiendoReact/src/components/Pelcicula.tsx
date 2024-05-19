import { Link } from "react-router-dom";
import { PeliculaI } from "../Interfaces";

export default function Pelicula({ pelicula, marcarFavorita, indice }: { pelicula: PeliculaI, marcarFavorita: (pelicula: PeliculaI, indice: number) => void, indice: number }) {

    const marcar = () => {
        marcarFavorita(pelicula, indice);
    };

    return (
        <article className="article-item" id="article-template">
            <div className="image-wrap">
                <img src={pelicula.image} alt={pelicula.titulo} />
            </div>
            <h2>{pelicula.titulo}</h2>
            <span className="date">
                Hace 5 minutos
            </span>
            <Link to="/blog">Leer más</Link>
            <button onClick={marcar}>
                Marcar como favorita
            </button>
            <div className="clearfix"></div>
        </article>
    );
}