import { NavLink } from "react-router-dom"

const Navbar = () => {
    const activeStyle = "underline underline-offset-4"
    

    return (
      <nav className="flex justify-between item-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
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
                }>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/furnitures'
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/toys'
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/others'
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
            <li>
                <p>shopping car</p>
            </li>
            
        </ul>
      </nav>  
    )
}

export { Navbar }