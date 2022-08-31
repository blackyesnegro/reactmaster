import React, {useState} from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({});

    const conseguirDatosFormulario = e => {
        e.preventDefault();

        let datos = e.target;

        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value,
        }

        setUsuario(usuario);

        console.log(usuario);

    }

    return (
        <div>
            <h1> Formularios con React</h1>
            <form onSubmit={conseguirDatosFormulario}>
                <input 
                    type="text" 
                    placeholder= 'Nombre' 
                    name="nombre"
                />
                <input 
                    type="text" 
                    placeholder= 'Apellido' 
                    name="apellido"
                />
                <select name="genero">
                    <option value= "hombre">Hombre</option >
                    <option value= "mujer"> Mujer</option>
                </select>
                <textarea placeholder='Biografia' name="bio"> </textarea>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
