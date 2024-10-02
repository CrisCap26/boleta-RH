import React from 'react'
import Header from '../components/Header'
import CardDatosEmpleado from '../components/CardDatosEmpleado'
import CardDatosIncidencia from '../components/CardDatosIncidencia'
import { Divider } from '@nextui-org/react'
import Buttons from '../components/Buttons'
import Cards from './Cards'

export default function Home() {
    return (
        <>
            <Header />
            {/* <Divider className="p-0.5 bg-sky-700" /> */}
            <Cards />
        </>
    )
}
