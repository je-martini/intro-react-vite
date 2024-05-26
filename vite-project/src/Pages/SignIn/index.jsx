import Layout from "../../Components/Layout"
import { NavLink, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"


function SignIn() {

    const context = useContext(ShoppingCartContext)
    const navigate = useNavigate()

    let accountInfoParse;
    let accountEmail;
    let accountPassword;
    
    if(context.accountInfo) {
      accountInfoParse = JSON.parse(context.accountInfo)
      accountEmail = accountInfoParse.email
      accountPassword = accountInfoParse.password
    }

    const activatingSignIn = () => {
      localStorage.setItem('accountSignIn', JSON.stringify(true))
      // <NavLink to='/intro-react-vite/'></NavLink>
      navigate('/intro-react-vite/')
      location.reload();
    }
    
    

    return (
      <Layout>
        
          <ul 
            className="w-80 flex flex-col items-center justify-between mt-3"
          >
            <p
              className="mb-8 text-xl font-medium"
            >Welcome
            </p>

            <li 
              className="flex w-80 justify-start items-center pb-2"
            >
              <span
                className="pr-2"
              >
                  Email:
              </span>
              <p>{accountEmail}</p>
            </li>

            <li
              className="flex w-80 justify-start items-center pt-2 pb-4"  
            >
              <span
                className="pr-2"
              >
                Password
              </span>
              <p>{accountPassword}</p>
            </li>

              <button
                className={`
                ${ context.accountInfo ? "bg-black text-white" : "border-gray-400 text-gray-400" } 
                flex justify-center items-center w-full border border-black rounded-lg  p-3 mb-4 mt-4"
                `}
                onClick={ () => { activatingSignIn()}}  
              >
                Log In
              </button>

            <a href=""
              className="mb-4 underline underline-offset-4 decoration-solid text-sm text-slate-950/75"
            >
              Forgot my Password
            </a>

            <NavLink
                to='/intro-react-vite/sign-up'
                className={`
                ${ context.accountInfo ? "border-gray-400 text-gray-400" : "bg-black text-white"}
                flex justify-center items-center w-full border border-gray-400 rounded-lg  text-gray-400 p-3 "
                `}
            >               
                  
            <button>
              Sign Up
            </button>
            </NavLink>
          </ul>
      </Layout>
     
    )
  }
  
export default SignIn
  