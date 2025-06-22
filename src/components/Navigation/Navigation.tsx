import { FiLogIn , FiPlus } from "react-icons/fi";


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Link } from 'react-router-dom'


function Navigation() {
  return (
    <>
    <NavigationMenu className='pt-5'>
        <NavigationMenuList>

            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    <Link to='/'>Home</Link>  
                </NavigationMenuLink>
            </NavigationMenuItem>


            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    <Link to='/pricing'>Pricing</Link>  
                </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger>Get Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className='w-[250px]'>
                        <li >
                            <NavigationMenuLink className='flex flex-row justify-start items-center' asChild>
                                <Link to='/login'><FiLogIn className='mr-[5px]'/> Login </Link>
                            </NavigationMenuLink>
                        </li>
                        <li >
                            <NavigationMenuLink asChild>
                                 <Link className='flex flex-row justify-start items-center' to='/signup'>
                                    <FiPlus className='mr-[5px]'/> Signup 
                                 </Link>
                            </NavigationMenuLink>
                        </li>
                    </ul>
                    
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuViewport />
    </NavigationMenu>
    </>
  )
}

export default Navigation
