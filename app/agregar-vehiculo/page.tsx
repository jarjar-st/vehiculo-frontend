import { AgregarForm } from '@/components/agregarForm'
import React from 'react'

export default async function HomePage() {
  return (
    <div className="container mx-auto py-10">
        <h1 className=' text-5xl mb-10 font-bold '>AGREGAR VEHICULO</h1>
        <AgregarForm/>
  </div>
  )
}
