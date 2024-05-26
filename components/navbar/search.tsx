"use client"
import React from 'react'
import qs from "query-string"
import { useState } from 'react'
import { SearchIcon, X} from "lucide-react"
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

function Search() {
    
    const router = useRouter();
    const [value, setValue] = useState("")

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!value) return 
        //falta ver como se hara la busqueda
        const url = qs.stringifyUrl({
            url: "/search",
            query: { term: value },
        },{ skipEmptyString: true, skipNull: true });

        router.push(url);
            
    };

    const onClear = () => {
        setValue("")
    };

    return (
        <form 
        className='relative w-full lg:w-[400px] flex items-center'
        onSubmit={onSubmit}
        >
            <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Buscar'
            className=' rounded-r-none focus-visible:ring-0
            focus-visible:ring-transparent focus-visible:ring-offset-0'
            />

            {value && (
                <X
                className=' absolute right-14 top-2.5 h-5 w-5
                text-muted-foreground cursor-pointer hover:opcaity-75 transition' 
                />
            )}

            <Button
            type='submit'
            size={"sm"}
            variant={"secondary"}
            className=' rounded-l-none'
            >
                <SearchIcon className=' h-5 w-5 text-muted-foreground'/>
            </Button>

        </form>
    )
}

export default Search