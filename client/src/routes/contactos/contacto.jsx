import React from 'react'
import './contacto.scss';

const Contacto = () => {
  return (
    <div className='container'>
        <h1>Emprendedores</h1>
        <div className='omar'>
        <h3>Omar Ortiz</h3>
        <p className='text-omar'> Soy Omar Ortiz es un desarrollador de software que ha creado una innovadora 
            aplicación web especializada en alquileres y compras inmobiliarias en el municipio de Sopetrán.
             Su pasión por la tecnología y el mercado inmobiliario lo llevó a desarrollar esta plataforma que
             facilita a los usuarios la búsqueda y gestión de propiedades en la zona.</p>
        </div>
        
        <div className='chino'>
        <h3>Chino H</h3>
        <p className='text-chino'>
        Soy Gerfinson Herrera es un emprendedor sopetranero. Su pasión por la tecnología y el mercado inmobiliario lo llevó a desarrollar esta plataforma que
             facilita a los usuarios la búsqueda y gestión de propiedades en la zona.
        </p>
        </div>

    </div>
  )
}

export default Contacto;