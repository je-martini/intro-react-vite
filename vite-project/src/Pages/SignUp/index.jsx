import Layout from "../../Components/Layout"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"


function SignUp() {

  const context = useContext(ShoppingCartContext)

  const sendAccountInfo = () => {

      const accountName = document.getElementById("accountName")
      const accountEmail = document.getElementById("accountEmail")
      const accountPassword = document.getElementById("accountPassword")
      
      const accountInfo = {
        name: accountName.value,
        email: accountEmail.value,
        password: accountPassword.value
      }

      console.log("accountName : ", accountInfo.name,
      "accountEmail : ", accountInfo.email,
      "accountPassword : ", accountInfo.password,
      "all account : ", accountInfo
      )

      if(!context.accountInfo){
        localStorage.setItem("accountInfoInLocalStorage", JSON.stringify(accountInfo))
      }
    }

    return (
      <Layout>
        
          <ul 
            className="w-80 flex flex-col items-center justify-between mt-3"
          >
            <p
              className="mb-8 text-xl font-medium"
            >Sign Up</p>

<li 
              className="flex flex-col w-80 justify-start items-start pb-2"
            >
              <span
                className="pr-2"
              >
                  Name:
              </span>
              <input 
                className="w-full h-8 mt-2 pl-2"
                type="text" name="name" id="accountName" 
              />
            </li>

            <li 
              className="flex flex-col w-80 justify-start items-start pb-2"
            >
              <span
                className="pr-2"
              >
                  Email:
              </span>
              <input 
                className="w-full h-8 mt-2"
                type="email" name="email" id="accountEmail" 

              />
            </li>
            <li
              className="flex flex-col w-80 justify-start items-start pt-2"  
            >
              <span
                className="pr-2"
              >
                Password
              </span>
              <input 
                className="w-full h-8 mt-2"
                type="password" name="password" id="accountPassword" 

              />
            </li>
            
            
            <NavLink
                to='/intro-react-vite/'
                className="flex justify-center items-center w-full border border-black bg-black text-white rounded-lg  p-3 mb-4 mt-4"
            >               
                  
            <button
              onClick={ () => sendAccountInfo()}
            >
              Sign Up
            </button>
            </NavLink>
          </ul>
      </Layout>
     
    )
  }
  
export default SignUp
  