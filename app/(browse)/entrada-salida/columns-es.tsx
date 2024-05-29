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


export type EntradasSalidas = {
    id: number,
    kilometraje: number,
    nombreConductor: string,
    fechaEntrada: string,
    fechaSalida: string,
    marca: string,
    modelo: string,
    placa: string,

}

export const columns: ColumnDef<EntradasSalidas>[] = [

    {
        accessorKey: "nombreConductor",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Conductor
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "fechaEntrada",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Entrada
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const fechaEntrada = new Date(row.getValue("fechaEntrada"));
        
            const formatted = new Intl.DateTimeFormat("es-ES", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            }).format(fechaEntrada);
        
            return <div >{formatted}</div>
        },
    },
    {
        accessorKey: "fechaSalida",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Salida
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const fechaSalida = new Date(row.getValue("fechaSalida"));
        
            const formatted = new Intl.DateTimeFormat("es-ES", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            }).format(fechaSalida);
        
            return <div >{formatted}</div>
        },
    },

    {
        accessorKey: "kilometraje",
        header: "Kilometraje",
        
    },
    {
        accessorKey: "marca",
        header: "Marca",
    },
    {
        accessorKey: "modelo",
        header: "Modelo",
    },
    {
        accessorKey: "placa",
        header: "Placa",
    },

]