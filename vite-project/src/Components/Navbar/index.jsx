import { NavLink,  useNavigate} from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"


const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const navigate = useNavigate()

    const activeStyle = "underline underline-offset-4"
    let accountInfoParse;
    let accountEmail;

    if(context.accountInfo) {
        accountInfoParse = JSON.parse(context.accountInfo)
        accountEmail = accountInfoParse.email
    }

    const signOut = () => {
        localStorage.setItem('accountSignIn', JSON.stringify(false))
        navigate('/intro-react-vite/sign-in')
        location.reload();

    }

    return (
      <nav className="flex justify-between item-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light border bg-red-300">
        <ul className="flex item-center gap-3">
            <li className="font-semibold text-lg">
                <NavLink
                    to={`${ JSON.parse(localStorage.getItem("accountSignIn")) ? "/intro-react-vite/" : "/intro-react-vite/sign-in" }`}
                    onClick={ () => context.setSearchByCategory()}
                >               
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink
                to={`${ JSON.parse(localStorage.getItem("accountSignIn")) ? "/intro-react-vite/" : "/intro-react-vite/sign-in" }`}
                onClick={ () => context.setSearchByCategory()}
                className = { JSON.parse(localStorage.getItem("accountSignIn")) ? ({ isActive }) => isActive ? activeStyle : undefined : undefined}
                >
                    All
                </NavLink>
                
            </li>
            <li>
                <NavLink
                to={`${ JSON.parse(localStorage.getItem("accountSignIn")) ? "/intro-react-vite/clothes" : "/intro-react-vite/sign-in" }`}
                onClick={ () => context.setSearchByCategory('Ropa')}
                className = { JSON.parse(localStorage.getItem("accountSignIn")) ? ({ isActive }) => isActive ? activeStyle : undefined : undefined}
                >
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink
                to={`${ JSON.parse(localStorage.getItem("accountSignIn")) ? "/intro-react-vite/electronics" : "/intro-react-vite/sign-in" }`}
                onClick={ () => context.setSearchByCategory('electronics')}
                className = { JSON.parse(localStorage.getItem("accountSignIn")) ? ({ isActive }) => isActive ? activeStyle : undefined : undefined}
                >
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink
                to={`${ JSON.parse(localStorage.getItem("accountSignIn")) ? "/intro-react-vite/furnitures" : "/intro-react-vite/sign-in" }`}
                onClick={ () => context.setSearchByCategory('Change title')}
                className = { JSON.parse(localStorage.getItem("accountSignIn")) ? ({ isActive }) => isActive ? activeStyle : undefined : undefined}
                >
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink
                to={`${ JSON.parse(localStorage.getItem("accountSignIn")) ? "/intro-react-vite/toys" : "/intro-react-vite/sign-in" }`}
                onClick={ () => context.setSearchByCategory('Miscellaneous')}
                className = { JSON.parse(localStorage.getItem("accountSignIn")) ? ({ isActive }) => isActive ? activeStyle : undefined : undefined}
                >
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink
                to={`${ JSON.parse(localStorage.getItem("accountSignIn")) ? "/intro-react-vite/others" : "/intro-react-vite/sign-in" }`}
                onClick={ () => context.setSearchByCategory('shoes')}
                className = { JSON.parse(localStorage.getItem("accountSignIn")) ? ({ isActive }) => isActive ? activeStyle : undefined : undefined
                }>
                    Others
                </NavLink>
            </li>
        </ul>
        <ul className="flex item-center gap-3" 
        >
            <li className={`${ JSON.parse(localStorage.getItem("accountSignIn")) ? "flex" : "hidden" } text-black/40`}>
                <p>{accountEmail}</p>
            </li>
            <li className={`${ JSON.parse(localStorage.getItem("accountSignIn")) ? "flex" : "hidden" }`}>
                <NavLink
                to='/intro-react-vite/my-orders'
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    My Orders
                </NavLink>
            </li>
            <li className={`${ JSON.parse(localStorage.getItem("accountSignIn")) ? "flex" : "hidden" }`}>
                <NavLink
                to='/intro-react-vite/my-account'
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                }>
                    <p>My Account</p>
                </NavLink>
            </li>
            <li className={`${ JSON.parse(localStorage.getItem("accountSignIn")) ? "hidden" : "flex" }`}>
                <NavLink
                to='/intro-react-vite/sign-in'
                className = { ({ isActive }) => 
                isActive ? activeStyle : undefined
                } >
                    Sign In
                </NavLink>
            </li>
            <li className={`${ JSON.parse(localStorage.getItem("accountSignIn")) ? "flex" : "hidden" }`}>
                <NavLink
                    onClick={ () => signOut()}
                // to='/intro-react-vite/sign-in'
                // className = { ({ isActive }) => 
                // isActive ? activeStyle : undefined}
                >
                    Sign Out
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