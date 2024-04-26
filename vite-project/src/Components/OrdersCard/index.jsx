import { ChevronRightIcon } from "@heroicons/react/24/solid"

const OrdersCard = props => {

    const { totalPrice, totalProducts} = props
    
    

    return(
        <div className="mb-6 mt-2 rounded-lg border-2 border-sky-500 w-80 p-4">
            <div className=" flex justify-between items-center">
                <p className="flex flex-col items-center ml-2">
                    <span className="font-light">01/02/24</span>
                    <span className="mt-2 font-light">{totalProducts} Articles</span>
                </p>
                <p className="flex items-center justify-between gap-2">
                    <span className="p-2 font-mediun text-2xl">${totalPrice}</span>
                    <ChevronRightIcon  className="h-6 w-6 text-white cursor-pointer"/>
                </p>

            </div>

        </div>
    )
}

export { OrdersCard }