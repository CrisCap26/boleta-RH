import React from 'react'
import { Card, CardBody, CardHeader, Chip, Divider } from '@nextui-org/react'

export default function CardDatosIncidencia() {
    const incidenciaInfo = [
        { label: 'Tipo:', value: 'Permiso de llegar tarde' },
        { label: 'Fecha solicitada:', value: '09/10/2024' },
        { label: 'Archivo:', value: 'llantaPonchada.png' },
        { label: 'Comentarios:', value: 'Se me poncho la llanta en camino al trabajo' },
    ];

    return (
        <div className='mt-3'>
            <Card className='border-small border-white/50'>
                <CardHeader>
                    Datos de la incidencia
                </CardHeader>
                <Divider />
                <CardBody className='flex-col gap-5'>
                    {
                        incidenciaInfo.map((info, i) => (
                            <div className='flex flex-row items-center' key={i}>
                                <Chip
                                    color="primary"
                                    radius="sm"
                                    classNames={{
                                        base: "bg-[#0f5ea3]",
                                        content: "text-white md:text-[17px]",
                                    }}
                                >
                                    {info.label}
                                </Chip>
                                <div className='ml-3 text-[14px] md:text-[17px]'>{info.value}</div>
                            </div>
                        ))
                    }
                </CardBody>
            </Card>
        </div>
    )
}
