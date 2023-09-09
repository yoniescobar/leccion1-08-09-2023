import React from 'react'

export const Peliculas = () => {

    const peliculas = [
        {
            titulo: 'Harry Potter y el prisionero de Azkaban',
            genero: 'Fantasia',
            anio: 2004
        },
        {
            titulo: 'Harry Potter y el caliz de fuego',
            genero: 'Fantasia',
            anio: 2005
        },
        {
            titulo: 'Harry Potter y la orden del fenix',
            genero: 'Fantasia',
            anio: 2007
        },
        {
            titulo: 'Harry Potter y el misterio del principe',
            genero: 'Fantasia',
            anio: 2009
        },
        {
            titulo: 'Harry Potter y las reliquias de la muerte',
            genero: 'Fantasia',
            anio: 2011
        }
    ]

    
  return (
    <div className='container'>
    <table className="table table-striped table-hover">
          <thead>
              <tr>
                  <th>Titulo</th>
                  <th>Genero</th>
                  <th>Año</th>
              </tr>
          </thead>
          <tbody>
              {peliculas.map((pelicula, index) => {
                  return (
                      <tr key={index}>
                          <td>{pelicula.titulo}</td>
                          <td>{pelicula.genero}</td>
                          <td>{pelicula.anio}</td>
                      </tr>
                  )
              })}
          </tbody>
      </table>
  </div>
  )
}

export default Peliculas
