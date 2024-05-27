import { Vehiculos, columns } from "./columns"
import { DataTable } from "./data-table"
 
async function getData(): Promise<Vehiculos[]> {
  // return [
  //   {
  //     id: "728ed52f",
  //     placa: "hbk123",
  //     marca: "Toyota",
  //     modelo: "Yaris",
  //   },
  //   {
  //     id: "728ed53f",
  //     placa: "hgk133",
  //     marca: "KIA",
  //     modelo: "Sorento",
  //   },
  //   {
  //     id: "728ed54f",
  //     placa: "hhr153",
  //     marca: "Ford",
  //     modelo: "Focus",
  //   },
  //   {
  //     id: "728ed55f",
  //     placa: "ht163",
  //     marca: "Nissan",
  //     modelo: "Z30",
  //   },

  // ]
  const response = await fetch('http://localhost:3000/vehiculo/');
  const data = await response.json();
  return data;
}
 
export default async function HomePage() {
  const data = await getData()
 
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}