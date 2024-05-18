import { useState, useEffect } from "react"
import { ApiResponse } from "../Interfaces"
import axios from "axios"


export default function Articles() {
    const [articleApi, setArticleApi] = useState<ApiResponse>({ status: '', articles: [] });

    useEffect(() => {
        axios.get<ApiResponse>('http://localhost:3900/api/articles')
            .then((res) => {
                console.log(res.data)
                setArticleApi(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    return (
        <div id="articles">
            {
                articleApi.status === 'success' &&
                articleApi.articles.map((article) => (
                    // Devuelve el elemento JSX dentro de la función de mapeo
                    <h1 key={article._id}>{article.title}</h1>
                ))
            }
        </div>
    )
}