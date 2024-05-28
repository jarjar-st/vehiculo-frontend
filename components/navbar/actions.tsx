import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SquarePlus } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { AgregarForm } from '../agregarForm';

async function Actions() {


    return (
        <div className=' flex items-center justify-end gap-x-2 ml-4 lg:ml-0'>
            <div className='flex items-center gap-x-4'>
             
                        <Button
                        size={"sm"}
                        variant={"ghost"}
                        className=' text-muted-foreground hover:text-primary'
                        asChild
                    >

                        <Link
                            href={"/agregar-vehiculo"}
                        >
                            <SquarePlus
                                className=' h-5 w-5 lg:mr-2'
                            />
                            <span className=' hidden lg:block'>
                                Agregar Vehiculo
                            </span>
                        </Link>
                    </Button>


            </div>
        </div>
    )
}

export default Actions