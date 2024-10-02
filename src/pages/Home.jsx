import React from 'react'
import Header from '../components/Header'
import CardDatosEmpleado from '../components/CardDatosEmpleado'
import CardDatosIncidencia from '../components/CardDatosIncidencia'
import { Divider } from '@nextui-org/react'
import Buttons from '../components/Buttons'

export default function Home() {
    return (
        <>
            <Header />
            {/* <Divider className="p-0.5 bg-sky-700" /> */}
            <div className='flex flex-col md:flex-row md:justify-around mt-1 gap-3 p-3'>
                {/* Aquí van las cards Datos empleado y datos incidencia */}
                <CardDatosEmpleado />
                <CardDatosIncidencia />
                
            </div>
            <Buttons />
        </>
    )
}
