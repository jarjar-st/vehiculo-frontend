"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { toast } from 'react-hot-toast';
import { useState, useEffect } from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const formSchema = z.object({
    vehiculoId: z.string(),
    nombreConductor: z.string(),
    fechaEntrada: z.date(),
    fechaSalida: z.date(),
    hora: z.string().default('00:00'),
    kilometraje: z.string(),
})



export function EntradaSalidaForm() {
    const [vehiculos, setVehiculos] = useState([]);
    useEffect(() => {
        async function fetchVehiculos() {
            const response = await fetch('http://localhost:3000/vehiculo');
            const data = await response.json();
            setVehiculos(data);
        }

        fetchVehiculos();
    }, []);
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),

    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        
        const url = 'http://localhost:3000/entrada-salida/registrar-entrada-salida';
        const method = 'POST';

        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        if (!response.ok) {
            console.error('Error al enviar el formulario:', response.statusText);
            toast.error('Algo Fallo!');
            return;
        }

        const data = await response.json();
        console.log('Formulario enviado con éxito:', data);
        toast.success('EntradaSalida Agregada!');
        router.push('/');
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="vehiculoId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Vehiculo</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Placa" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {(vehiculos as { id: string; placa: string }[]).map((vehiculo) => (
                                        <SelectItem key={vehiculo.id} value={vehiculo.id}>
                                            {vehiculo.placa}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="nombreConductor"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Conductor</FormLabel>
                            <FormControl>
                                <Input placeholder="Benjamin Amador" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="hora"
                    render={({ field }) => (
                        <FormItem className="hidden">
                            <FormLabel>Hora</FormLabel>
                            <FormControl>
                                <Input placeholder="12:00" defaultValue={"00:00"} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="kilometraje"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Kilometraje</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="fechaEntrada"
                    render={({ field }) => (
                        <FormItem className=" flex flex-col">
                            <FormLabel>Entrada</FormLabel>
                            <FormControl>
                                <DatePicker
                                    selected={field.value}
                                    onChange={date => field.onChange(date)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="fechaSalida"
                    render={({ field }) => (
                        <FormItem className=" flex flex-col">
                            <FormLabel>Salida</FormLabel>
                            <FormControl>
                                <DatePicker
                                    selected={field.value}
                                    onChange={date => field.onChange(date)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" >{"Agregar"}</Button>
            </form>
        </Form>
    )
}