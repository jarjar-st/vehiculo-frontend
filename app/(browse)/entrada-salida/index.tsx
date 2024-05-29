"use client"
import { EntradasSalidas, columns } from "./columns-es"
import { DataTableEntradaSalida } from "./data-table-es"
import { useState, useEffect } from 'react';

async function getData(): Promise<EntradasSalidas[]> {
  const response = await fetch('http://localhost:3000/entrada-salida/');
  const data = await response.json();

  // Reestructura los datos
  const newData = data.map((item: any) => ({
    ...item,
    marca: item.Vehiculo.marca,
    modelo: item.Vehiculo.modelo,
    placa: item.Vehiculo.placa,
  }));

  console.log(`ESTA ES LA DATA ${JSON.stringify(newData, null, 2)}`);
  return newData;
}

export default function EntradaSalidaTabla() {
  const [data, setData] = useState<EntradasSalidas[]>([]);

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