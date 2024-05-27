import React from 'react'

import { Logo } from './logo'
import Actions from './actions'
import Search from './search'
import { ModeToggle } from '../darkModeToggle'

function Navbar() {
  return (
    <nav className=' flex fixed top-0 w-full h-20 z-[49] bg-[#252731]
    px-2 lg:px-4 justify-between items-center shadow-sm '>
      <Logo />
      <Search />
      <Actions />
      <ModeToggle/>
    </nav>
  )
}

export default Navbar