import { FiHome, FiLogIn, FiPlus } from "react-icons/fi";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

function Navigation() {
  const { userData } = useContext(AuthContext);
  const isAuthenticated = !!userData;

  return (
    <NavigationMenu className="">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/pricing">Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Get Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[250px]">
              {!isAuthenticated && (
                <>
                  <li>
                    <NavigationMenuLink asChild>
                     <Link className='flex flex-row justify-start items-center' to='/login'>
                        <FiLogIn className='mr-[5px]'/> Log In
                    </Link>
                    </NavigationMenuLink> 
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                     <Link className='flex flex-row justify-start items-center' to='/signup'>
                        <FiPlus className='mr-[5px]'/> Sign up
                    </Link>
                    </NavigationMenuLink> 
                  </li>
                </>
              )}

              {isAuthenticated && (
                <li>
                    <NavigationMenuLink asChild>
                     <Link className='flex flex-row justify-start items-center' to='/dashboard'>
                        <FiHome className='mr-[5px]'/> Dashboard
                    </Link>
                    </NavigationMenuLink> 
                </li>
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuViewport />
    </NavigationMenu>
  );
}

export default Navigation;
