import axios from "axios";
import { Global } from "../Global";
import Sidebar from "./Sidebar";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiArticleResponse } from "../Interfaces";

export default function EditArticle() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [userFormEdit, setUserFormEdit] = useState({
        title: "",
        content: ""
    });

    useEffect(() => {
        if (id) {
            const fetchArticle = async () => {
                try {
                    const response = await axios.get<ApiArticleResponse>(`${Global.url}article/${id}`);
                    if (response.data.status === 'success') {
                        const { title, content } = response.data.article;
                        setUserFormEdit({
                            title: title || "",
                            content: content || ""
                        });
                    }
                } catch (error) {
                    console.error("Error fetching article data", error);
                }
            };
            fetchArticle();
        }
    }, [id]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserFormEdit({
            ...userFormEdit,
            [e.target.name]: e.target.value
        });
    };

    const saveArticle = async (e: FormEvent) => {
        e.preventDefault();
        if (id) {
            try {
                const response = await axios.put(`${Global.url}article/${id}`, userFormEdit);

                if (response.data.status === 'success') {
                    navigate('/blog');
                } else {
                    console.error("Error updating article", response.data);
                }
            } catch (error) {
                console.error("Error updating article", error);
            }
        } else {
            console.error("Article ID is undefined");
        }
    };

    return (
        <div className="center">
            <section id="content">
                <h1 className="subheader">Editar Articulo</h1>
                <form className="mid-form" onSubmit={saveArticle}>
                    <div className="form-group">
                        <label htmlFor="title">Título</label>
                        <input
                            type="text"
                            name="title"
                            value={userFormEdit.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Contenido</label>
                        <textarea
                            name="content"
                            value={userFormEdit.content}
                            onChange={handleInputChange}
                        />
                    </div>
                    <input type="submit" value="Guardar" className="btn btn-success" />
                </form>
            </section>
            <Sidebar />
        </div>
    );
}
