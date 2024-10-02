import { Card, CardBody, CardHeader, Chip, Divider } from '@nextui-org/react'
import React from 'react'
import Buttons from './Buttons'

export default function CardDatosEmpleado() {
    return (
        <div className='mt-3'>
            <Card className='border-small border-white/50'>
                <CardHeader>
                    Datos del empleado
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
                            Nombre:
                        </Chip>
                        <div className='ml-3'>Cristopher Herrera Perez</div>
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
                            Departamento:
                        </Chip>
                        <div className='ml-3'>Sistemas</div>
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
                            Sucursal:
                        </Chip>
                        <div className='ml-3'>Perisur</div>
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
                            Jefe inmediato:
                        </Chip>
                        <div className='ml-3'>Moises Velez Avila</div>
                    </div>

                </CardBody>

            </Card>
        </div>
    )
}
