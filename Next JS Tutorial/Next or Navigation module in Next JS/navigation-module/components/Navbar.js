"use client"

import React from 'react'
import { usePathname } from "next/navigation";  //usePathname is a Client Component hook that lets you read the current URL's pathname.

const Navbar = () => {

    const pathname = usePathname()
    return (
        <div>

            <div>This is Navbar Page</div>
            <div>Current pathname {pathname}</div>
        </div>
    )
}

export default Navbar