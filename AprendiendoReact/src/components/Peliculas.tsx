import { useEffect, useState } from "react";
import Pelicula from "./Pelcicula";
import PeliculaI from "../Interfaces";

export default function Peliculas() {

    const [titulo, setTitulo] = useState<{ peliculas: PeliculaI[]; nombre: string; favorita: PeliculaI | null }>({
        peliculas: [],
        nombre: '',
        favorita: null
    });

    useEffect(() => {
        // Lógica para inicializar el estado
        const initialState = {
            peliculas: [
                { titulo: 'titulo1', image: '#' },
                { titulo: 'titulo2', image: '#' }
            ],
            nombre: 'Carlos',
            favorita: null
        };

        setTitulo(initialState);
    }, []);
    const cambiarTitulo = () => {
        setTitulo(prevState => {
            const nuevoTitulo = { ...prevState };
            nuevoTitulo.peliculas[0].titulo = "cambiado";
            return nuevoTitulo;
        });
    };

    const favorita = (pelicula: PeliculaI, indice: any) => {
        console.log("Favorita marcada");
        console.log(pelicula, indice);
        setTitulo(prevState => ({
            ...prevState,
            favorita: pelicula
        }));
    };

    return (
        <div id="content" className="peliculas">
            <h2 className="subheader">Peliculas</h2>
            <p>Selección de las peliculas favoritas</p>
            <p><button onClick={cambiarTitulo}>Cambiar</button></p>

            {titulo.favorita && (
                <p className="favorita" style={{
                    background: 'green',
                    color: 'white',
                    padding: '10px'
                }}>
                    <strong>La pelicula favorita es: </strong>
                    <span>{titulo.favorita.titulo}</span>
                </p>
            )}

            <div id="articles" className="peliculas">
                {titulo.peliculas.map((pelicula, i) => (
                    <Pelicula
                        key={i}
                        indice={i}
                        pelicula={pelicula}
                        marcarFavorita={favorita}
                    />
                ))}
            </div>
        </div>
    );
}