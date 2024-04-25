import { XMarkIcon } from "@heroicons/react/24/solid"

const OrdersCard = props => {

    const { totalPrice, totalProducts} = props
    
    

    return(
        <div className="flex justify-between items-center mb-6 border-black">
            <p>
                <span>01.02.24</span>
                <span>{totalPrice}</span>
                <span>{totalProducts}</span>


            </p>

        </div>
    )
}

export { OrdersCard }