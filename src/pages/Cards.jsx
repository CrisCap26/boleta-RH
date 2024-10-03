import React from 'react'
import CardDatosEmpleado from '../components/CardDatosEmpleado'
import CardDatosIncidencia from '../components/CardDatosIncidencia'
import Buttons from '../components/Buttons'

export default function Cards() {
    return (
        <div className='md:flex md:flex-col md:items-center md:justify-center md:min-h-screen'>
            <div className='flex flex-col md:flex-row  mt-1 gap-3 p-3'>
                {/* Aquí van las cards Datos empleado y datos incidencia */}
                <CardDatosEmpleado />
                <CardDatosIncidencia />
            </div>

            <Buttons />
        </div>
    )
}
