export const GuardarEnStorage= (key, elemento) => {

    //Conseguir los elementos que ya tenemos en localStorage
    let elementos = JSON.parse(localStorage.getItem(key));
    
    //Comprobar si es un array
    if(Array.isArray(elementos)){
      //Añadir elemento al array
      elementos.push(elemento);
    }else{
      //Crear un array nuevo
      elementos = [elemento];
    }
    
    //Guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(elementos));

    //Devolver objeto
    return elemento;

  }
