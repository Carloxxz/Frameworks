import axios from "axios";
import { Global } from "../Global";
import Sidebar from "./Sidebar";
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateArticle() {

    const navigate = useNavigate();

    const [userForm, setUserForm] = useState({
        title: "",
        content: ""
    });
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const saveArticle: FormEventHandler<HTMLFormElement> = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("title", userForm.title);
            formData.append("content", userForm.content);
            if (selectedFile) {
                formData.append("file0", selectedFile);
            }

            // Enviar los datos del artículo al servidor
            const response = await axios.post(`${Global.url}save`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log(response.data);

            // Restablecer el formulario
            setUserForm({
                title: "",
                content: ""
            });
            setSelectedFile(null);
            navigate('/blog');
        } catch (error) {
            console.error("Error saving article", error);
        }
    };

    return (
        <div className="center">
            <section id="content">
                <h1 className="subheader">Crear Articulo</h1>
                <form className="mid-form" onSubmit={saveArticle}>
                    <div className="form-group">
                        <label htmlFor="title">Título</label>
                        <input
                            type="text"
                            name="title"
                            value={userForm.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Contenido</label>
                        <textarea
                            name="content"
                            value={userForm.content}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="file0">Imagen</label>
                        <input
                            type="file"
                            name="file0"
                            onChange={handleFileChange}
                        />
                    </div>
                    <input type="submit" value="Guardar" className="btn btn-success" />
                </form>
            </section>
            <Sidebar />
        </div>
    );
}
