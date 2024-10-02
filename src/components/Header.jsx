import { Image } from '@nextui-org/react'
import React from 'react'
import logo from '../assets/logoJRM.png'

export default function Header() {
  return (
   <header className='flex flex-row p-3'>
    <div className='basis-1/5 flex justify-center items-center'>
    <Image
      width={90}
      height={40}
      alt="Logo"
      src={logo}
    />
    </div>
    <div className='flex flex-col justify-center ml-3'>
        <h1 className='text-md'>Aviso de incidencias a nominas</h1>
        <div>
            <p className="text-small text-default-500">Fecha de creación: 12/09/2024</p>
        </div>
    </div>
   </header>
  )
}
