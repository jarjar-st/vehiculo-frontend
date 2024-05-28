"use client"
import { Vehiculos, columns } from "./columns-es"
import { DataTableEntradaSalida } from "./data-table-es"
import { useState, useEffect } from 'react';

async function getData(): Promise<Vehiculos[]> {
  const response = await fetch('http://localhost:3000/vehiculo');
  const data = await response.json();
  console.log(`ESTA ES LA DATA ${JSON.stringify(data, null, 2)}`);
  return data;
}

export default function EntradaSalidaTabla() {
  const [data, setData] = useState<Vehiculos[]>([]);

  const loadData = async () => {
    const newData = await getData();
    setData(newData);
  }

  // Carga los datos cuando el componente se monta
  useEffect(() => {
    loadData();
  }, []);

  return (
    <DataTableEntradaSalida columns={columns} data={data} />
  )
}