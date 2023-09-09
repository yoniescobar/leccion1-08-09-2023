//Hooks: es una nueva característica que nos permite usar el estado y otras características de React sin tener que escribir una clase.
//UseState: useState es una función que nos permite crear variables de estado en un componente funcional.

import React,{useState} from 'react'

const Boton = () => {

    // variables y fuciones logica del componente

    const [contador, setContador] = useState(10)

    const aumentar = () => {
        setContador(contador + 1)
    }


  return (
    // codigo html que se va a renderizar
    <div className='container'>
        <h1>Contador: {contador}</h1>
        <button onClick={aumentar} className='btn btn-primary'>Aumentar</button>
      

    </div>
  )
}

export default Boton
 