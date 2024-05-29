import React from 'react'

import { Logo } from './logo'
import Actions from './actions'
import { ModeToggle } from '../darkModeToggle'
import { Button } from '../ui/button'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className=' flex fixed top-0 w-full h-20 z-[49] bg-[#252731]
    px-2 lg:px-4 justify-between items-center shadow-sm '>
      <Logo />
      <Button
        size={"sm"}
        variant={"ghost"}
        className=' text-muted-foreground hover:text-primary'
        asChild
      >

        <Link
          href={"/"}
        >

          <span className=' hidden lg:block'>
            Ver Vehiculos
          </span>
        </Link>
      </Button>
      <Button
        size={"sm"}
        variant={"ghost"}
        className=' text-muted-foreground hover:text-primary'
        asChild
      >

        <Link
          href={"/entrada-salida"}
        >

          <span className=' hidden lg:block'>
            Ver Entradas/Salidas
          </span>
        </Link>
      </Button>
      <div className='relative w-full lg:w-[400px] flex items-center'></div>
      <Actions />
      <ModeToggle />
    </nav>
  )
}

export default Navbar