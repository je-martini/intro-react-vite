import  Layout  from "../../Components/Layout"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function MyAccount() {
  const context = useContext(ShoppingCartContext)

  let accountInfoParse;
  let accountEmail;
  let accountPassword;
  let accountName;

  
    
  if(context.accountInfo) {
    accountInfoParse = JSON.parse(context.accountInfo)
    accountEmail = accountInfoParse.email
    accountPassword = accountInfoParse.password
    accountName = accountInfoParse.name
  }


    return (
      <Layout>
          <ul 
            className="w-80 flex flex-col items-center justify-between mt-3"
          >
            <p
              className="mb-8 text-xl font-medium"
            >My Account</p>

            <li 
              className="flex w-80 justify-start pb-2"
            >
              <p
                className="pr-2"
              >
                  Name:
              </p>
              <p
                className=""
              >
                {accountName}
              </p>
              
            </li>
            <li
              className="flex w-80 justify-start pt-2"  
            >
              <p
                className="pr-2"
              >
                Email
              </p>
              <p>
              {accountEmail}
              </p>
            </li>

           
            <button
              className="w-full border-2 border-black rounded-lg  p-3 mt-8"
            >
              Edit
            </button>
          </ul>
      </Layout>
     
    )
  }
  
export default MyAccount 
  