"use client"
import { Vehiculos, columns } from "./columns"
import { DataTable } from "./data-table"
import { useState, useEffect } from 'react';

async function getData(): Promise<Vehiculos[]> {
  const response = await fetch('http://localhost:3000/vehiculo');
  const data = await response.json();
  console.log(`ESTA ES LA DATA ${JSON.stringify(data, null, 2)}`);
  return data;
}

export default function TablaVehiculos() {
  const [data, setData] = useState<Vehiculos[]>([]);

  const loadData = async () => {
    const newData = await getData();
    setData(newData);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <DataTable columns={columns} data={data} />
  )
}