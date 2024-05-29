import { EntradaSalidaForm } from '@/components/entradaSalidaForm'
import React from 'react'

export default async function AgregarEntradaSalidaPage() {
  return (
    <div className="container mx-auto py-10">
        <h1 className=' text-5xl mb-10 font-bold '>AGREGAR ENTRADA/SALIDA</h1>
        <EntradaSalidaForm/>
  </div>
  )
}
