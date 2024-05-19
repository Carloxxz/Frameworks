import axios from "axios";
import { Global } from "../Global";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { ApiArticleResponse } from "../Interfaces";

export default function Article() {
    const navigate = useNavigate();
    const params = useParams()
    const url = Global.url + 'article/' + params.id

    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState<ApiArticleResponse>({ status: '', article: {} })

    const deleteArticle = async () => {
        try {
            await axios.delete(url);
            // Redirigir después de eliminar el artículo
            navigate('/blog');
        } catch (error) {
            console.error("Error deleting article", error);
        }
    };

    useEffect(() => {
        axios.get<ApiArticleResponse>(url)
            .then((res) => {
                setArticle(res.data);
                console.log(article)
                setLoading(false); // Cambiar el estado de carga cuando se carguen los datos
            })
            .catch(error => {
                console.error(error);
                setLoading(false); // Cambiar el estado de carga en caso de error
            });
    }, []);

    const renderArticle = () => {
        const { title, content, image, date } = article.article
        return (
            < article className="article-item article-detail" >
                <div className="image-wrap">
                    <img src={image} alt="Paisaje" />
                </div>

                <h1 className="subheader">{title}</h1>
                <span className="date">
                    {date}
                </span>
                <p>
                    {content}
                </p>
                <button onClick={() => {
                    deleteArticle()
                }} className="btn btn-warning">Editar</button>
                <button onClick={() => {
                    deleteArticle()
                }} className="btn btn-danger">Eliminar</button>

                <div className="clearfix"></div>
            </article >

        )
    }


    return (
        <div className="center">
            <section id="content">
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    renderArticle()
                )

                }


            </section>

            <Sidebar></Sidebar>
        </div>

    )
}