"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
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

const formSchema = z.object({
    marca: z.string().min(4, {
        message: "Marca debe tener al menos 4 caracteres",
    }),
    modelo: z.string().min(4, {
        message: "Modelo debe tener al menos 4 caracteres",
    }),
    placa: z.string().min(4, {
        message: "Placa debe tener al menos 4 caracteres",
    }),
})

export function AgregarForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            marca: "",
            modelo: "",
            placa: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="marca"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Marca</FormLabel>
                            <FormControl>
                                <Input placeholder="Toyota" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="modelo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Modelo</FormLabel>
                            <FormControl>
                                <Input placeholder="Supra" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="placa"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Placa</FormLabel>
                            <FormControl>
                                <Input placeholder="HBK1396" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Agregar</Button>
            </form>
        </Form>
    )
}
