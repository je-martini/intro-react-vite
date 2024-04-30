
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
                to='/'
                onClick={ () => context.setSearchByCategory()}
                >               
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/'
                onClick={ () => context.setSearchByCategory()}
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/clothes'
                onClick={ () => context.setSearchByCategory('Ropa')}
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/electronics'
                onClick={ () => context.setSearchByCategory('electronics')}
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/furnitures'
                onClick={ () => context.setSearchByCategory('Change title')}
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/toys'
                onClick={ () => context.setSearchByCategory('Miscellaneous')}
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/others'
                onClick={ () => context.setSearchByCategory('shoes')}
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
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
                    {context.productsInCart.length}
                </div>
            </li>
            
        </ul>
      </nav>  
    )
}

export default Navbar