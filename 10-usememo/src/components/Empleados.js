import React, {useEffect, useMemo, useState} from 'react'

export const Empleados = ({pagina}) => {

  const [empleados, setEmpleados] = useState([]);

  useEffect(() =>{
    conseguirEmpleados(pagina);

  },[pagina]);

  //Peticion asincrona a reqres.in
  const conseguirEmpleados = async(p) => {
    const url = "https://reqres.in/api/users?page=" + p;
    const peticion = await fetch(url);
    const {data:empleados} = await peticion.json();
    console.log("Peticion Ajax");

    setEmpleados(empleados);
  }
  console.log("Renderizado vista Empleados")
  

  return (
    <div>
      <ul className='empleados-lista'>
        {
           empleados.map((empleado) => {
            return (
              <li key={empleado.id}>
                {empleado.first_name} {empleado.last_name} : {empleado.email}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
