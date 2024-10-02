import React from 'react'
import CardDatosEmpleado from '../components/CardDatosEmpleado'
import CardDatosIncidencia from '../components/CardDatosIncidencia'
import Buttons from '../components/Buttons'

export default function Cards() {
    return (
        <div>
            <div className='flex flex-col md:flex-row md:justify-around mt-1 gap-3 p-3'>
                {/* Aquí van las cards Datos empleado y datos incidencia */}
                <CardDatosEmpleado />
                <CardDatosIncidencia />
            </div>

            <Buttons />
        </div>
    )
}
