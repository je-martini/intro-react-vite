
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"


const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"
    

    return (
      <nav className="flex justify-between item-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light  bg-slate-700">
        <ul className="flex item-center gap-3">
            <li className="font-semibold text-lg">
                <NavLink
                to='/'>               
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/'
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/clothes'
                    className = { ({ isActive }) => 
                    isActive ? activeStyle : undefined
                    }
                    onClick={ () => context.setSearchByCategory("Clothes")}
                >
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/electronics'
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }
                onClick={ () => context.setSearchByCategory("Electronics")}
                >
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/furnitures'
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }
                onClick={ () => context.setSearchByCategory("Furnitures")}
                >
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/toys'
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }
                onClick={ () => context.setSearchByCategory("toys")}
                >
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/others'
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }
                onClick={ () => context.setSearchByCategory("miscellaneous")}
                >
                    Others
                </NavLink>
            </li>
        </ul>
        <ul className="flex item-center gap-3">
            <li className="text-black/40">
                <p>jesus@jesus.com</p>
            </li>
            <li>
                <NavLink
                to='/my-orders'
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/my-account'
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    <p>My Account</p>
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/sign-in'
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    Sign In
                </NavLink>
            </li>
            <li className="flex item-center">
                <ShoppingCartIcon className="h-6 w-6"></ShoppingCartIcon>
                <div>
                    {context.count}
                </div>
            </li>
            
        </ul>
      </nav>  
    )
}

export default Navbar