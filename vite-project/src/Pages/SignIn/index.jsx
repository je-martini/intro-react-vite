import Layout from "../../Components/Layout"
import { NavLink } from "react-router-dom"


function SignIn() {

    return (
      <Layout>
        
          <ul 
            className="w-80 flex flex-col items-center justify-between mt-3"
          >
            <p
              className="mb-8 text-xl font-medium"
            >Welcome</p>

            <li 
              className="flex w-80 justify-start items-center pb-2"
            >
              <span
                className="pr-2"
              >
                  Email:
              </span>
              <input type="email" name="" id="" />
            </li>
            <li
              className="flex w-80 justify-start items-center pt-2"  
            >
              <span
                className="pr-2"
              >
                Password
              </span>
              <input type="password" name="" id="" />
            </li>
            <button
              className=" w-full border border-black rounded-lg bg-black text-white p-3 mb-4 mt-4"
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
                className="flex justify-center items-center w-full border border-gray-400 rounded-lg  text-gray-400 p-3 "
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
  