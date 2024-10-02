import React from 'react'
import { Card, CardBody, CardHeader, Chip, Divider } from '@nextui-org/react'

export default function CardDatosIncidencia() {
  return (
    <div className='mt-3'>
            <Card className='border-small border-white/50'>
                <CardHeader>
                    Datos de la incidencia
                </CardHeader>
                <Divider />
                <CardBody className='flex-col gap-5'>

                    <div className='flex flex-row'>
                        <Chip
                            color="primary"
                            radius="sm"
                            classNames={{
                                base: "bg-[#0f5ea3]",
                                content: "text-white",
                            }}
                        >
                            Tipo:
                        </Chip>
                        <div className='ml-3'>Permiso de llegar tarde</div>
                    </div>

                    <div className='flex flex-row'>
                        <Chip
                            color="primary"
                            radius="sm"
                            classNames={{
                                base: "bg-[#0f5ea3]",
                                content: "text-white",
                            }}
                        >
                            Fecha solicitada:
                        </Chip>
                        <div className='ml-3'>09/10/2024</div>
                    </div>

                    <div className='flex flex-row'>
                        <Chip
                            color="primary"
                            radius="sm"
                            classNames={{
                                base: "bg-[#0f5ea3]",
                                content: "text-white",
                            }}
                        >
                           Archivo:
                        </Chip>
                        <div className='ml-3'>llantaPonchada.png</div>
                    </div>

                    <div className='flex flex-row'>
                        <Chip
                            color="primary"
                            radius="sm"
                            classNames={{
                                base: "bg-[#0f5ea3]",
                                content: "text-white",
                            }}
                        >
                            Comentarios:
                        </Chip>
                        <div className='ml-3'>Se me poncho la llanta camino al trabajo</div>
                    </div>

                </CardBody>
            </Card>
        </div>
  )
}
