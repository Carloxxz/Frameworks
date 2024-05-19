import { FormEvent, useState } from "react";
import Siderbar from "./Sidebar";

export default function Formulario() {
    const [userForm, setUserForm] = useState({
        nombre: "",
        apellido: "",
        bio: "",
        genero: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUserForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const recibirFormulario = (e: FormEvent) => {
        e.preventDefault();
        console.log(userForm);
    }

    return (
        <div id="formulario">
            <div className="center">
                <div className="content">
                    <h1 className="subheader">Formulario</h1>

                    {userForm.nombre &&
                        <div id="user-data">
                            <p>Nombre: <strong>{userForm.nombre}</strong></p>
                            <p>Apellidos: <strong>{userForm.apellido}</strong></p>
                            <p>Biografia: <strong>{userForm.bio}</strong></p>
                            <p>Genero: <strong>{userForm.genero}</strong></p>
                        </div>
                    }

                    <form className="mid-form" onSubmit={recibirFormulario}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" value={userForm.nombre} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" name="apellido" value={userForm.apellido} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bio">Biografia</label>
                            <textarea name="bio" value={userForm.bio} onChange={handleChange}></textarea>
                        </div>
                        <div className="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" checked={userForm.genero === 'hombre'} onChange={handleChange} /> Hombre
                            <input type="radio" name="genero" value="mujer" checked={userForm.genero === 'mujer'} onChange={handleChange} /> Mujer
                            <input type="radio" name="genero" value="otro" checked={userForm.genero === 'otro'} onChange={handleChange} /> Otro
                        </div>
                        <div className="clearfix"></div>
                        <input type="submit" value="Enviar" className="btn btn-success" />
                    </form>
                </div>
                <Siderbar />
            </div>
        </div>
    )
}
