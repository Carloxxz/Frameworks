import { useState, useEffect } from "react";
import { ApiResponse } from "../Interfaces";
import axios from "axios";
import { Global } from "../Global";
import { Link } from "react-router-dom";

export default function Articles({ home, search }: { home?: string, search?: any}) {
    const [loading, setLoading] = useState(true);
    const [articleApi, setArticleApi] = useState<ApiResponse>({ status: '', articles: [] });

    useEffect(() => {
        let url = `${Global.url}articles`;
        if (home === 'true') {
            url = `${Global.url}articles/last`;
        } else if (search) {
            url = `${Global.url}search/${search}`
            console.log(url)
        }

        axios.get<ApiResponse>(url)
            .then((res) => {
                setArticleApi(res.data);
                setLoading(false); // Cambiar el estado de carga cuando se carguen los datos
            })
            .catch(error => {
                console.error(error);
                setLoading(false); // Cambiar el estado de carga en caso de error
            });
    }, [home, search]);

    // Función para renderizar los artículos
    const renderArticles = () => {
        return (
            articleApi.articles.map((article) => (
                <article className="article-item" id="article-template" key={article._id}>
                    <div className="image-wrap">
                        {
                            article.image !== null ? (
                                <img src={`${Global.url}get-img/${article.image}`} alt={article.title} />
                            ) : (
                                <img src="https://w7.pngwing.com/pngs/819/548/png-transparent-photo-image-landscape-icon-images-thumbnail.png" alt={article.title} />
                            )
                        }
                    </div>
                    <h2>{article.title}</h2>
                    <span className="date">{article.date}</span>
                    <Link to={'/blog/articulo/' + article._id}>Leer más</Link>
                    <div className="clearfix"></div>
                </article>
            ))
        );
    };

    return (
        <div id="articles">
            {loading ? (
                <p>Cargando...</p> // Mostrar el mensaje de carga si loading es true
            ) : articleApi.status === 'success' && articleApi.articles.length >= 1 ? (
                renderArticles() // Llamar a la función renderArticles si hay artículos disponibles
            ) : (
                <h1>No hay artículos disponibles</h1> // Mostrar un mensaje si no hay artículos disponibles
            )}
        </div>
    );
}
