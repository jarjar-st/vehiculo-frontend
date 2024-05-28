"use client"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { AgregarForm } from "@/components/agregarForm"


export type Vehiculos = {
    id: string
    placa: string
    marca: string
    modelo: string
}

export const columns: ColumnDef<Vehiculos>[] = [
    {
        id: "actions",
        cell: ({ row }) => {
            const vehiculo = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Opciones</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(vehiculo.placa)}
                        >
                            Copiar placa del vehiculo
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <Dialog  >
                        <DialogTrigger className=" text-sm px-2 py-1.5">Editar Vehiculo</DialogTrigger>

                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                                        <DialogDescription>
                                            <AgregarForm vehiculo={vehiculo} onSuccess={() => location.reload()}/>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                        </Dialog>

                        <DropdownMenuItem className=" bg-red-400" onClick={async function onDelete() {
                            const response = await fetch(`http://localhost:3000/vehiculo/${vehiculo.id}`, {
                                method: 'DELETE',
                            });

                            if (!response.ok) {
                                console.error('Error al borrar el vehículo:', response.statusText);
                                return;
                            }
                            location.reload();
                        }}>Borrar Vehiculo</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
    {
        accessorKey: "marca",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Marca
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "modelo",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Modelo
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "placa",
        header: "Placa",
    },
]