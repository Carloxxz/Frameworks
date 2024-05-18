import { useState, useEffect } from "react"
import { ApiResponse } from "../Interfaces"
import axios from "axios"

export default function Articles() {
    const [loading, setLoading] = useState(true);
    const [articleApi, setArticleApi] = useState<ApiResponse>({ status: '', articles: [] });

    useEffect(() => {
        axios.get<ApiResponse>('http://localhost:3900/api/articles')
            .then((res) => {
                console.log(res.data)
                setArticleApi(res.data);
                setLoading(false); // Cambiar el estado de carga cuando se carguen los datos
            })
            .catch(error => {
                console.error(error);
                setLoading(false); // Cambiar el estado de carga en caso de error
            });
    }, []);


    return (
        <div id="articles">
            {loading ? (
                <p>Cargando...</p> // Mostrar el mensaje de carga si loading es true
            ) : (
                // Mostrar los artículos si loading es false y hay artículos disponibles
                articleApi.status === 'success' && articleApi.articles.length >= 1 ? (
                    articleApi.articles.map((article) => (
                        <h1 key={article._id}>{article.title}</h1>
                    ))
                ) : (
                    <h1>No hay artículos disponibles</h1> // Mostrar un mensaje si no hay artículos disponibles
                )
            )}
        </div>
    );
}
