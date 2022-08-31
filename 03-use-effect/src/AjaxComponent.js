import React, { useEffect, useState } from "react";



export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = () => {
    setUsuarios([
      {
        id: 1,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 2,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 3,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
    ]);
  };

  const getUsuarioAjaxPromesas = () => {
    fetch("https://reqres.in/api/users?page=1")
        .then(respuesta => respuesta.json())
        .then(
            resultado_final => {
                setUsuarios(resultado_final.data)
            },
            error =>{
                console.log(error);
            }
        )
  };

  const getUsuariosAjaxAW = async() => {
    const peticion = await fetch("https://reqres.in/api/users?page=1");
    const {data} = await peticion.json();

    setUsuarios(data);
  }

  useEffect(() => {
    getUsuariosAjaxAW();
  }, []);

  return <div>
        <h2>Usuarios con AJAX</h2>
      <ol className="usuarios">
        {
            usuarios.map(usuario =>{
                return <li key={usuario.id} id={usuario.id}>{usuario.first_name} {usuario.last_name} - {usuario.email}</li>
        })}
        </ol>
  </div>;
};
