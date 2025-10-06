

import IllustrateEmptyCart from "/assets/images/illustration-empty-cart.svg";


function EmptyCart(){
    return (
        <>
            <div className="bg-white w-full md:w-[400px] h-[200px] p-4 rounded-sm mb-2 ">
                
                <h2 className="text-[var(--red)] text-md  md:text-lg font-bold">
                    Your Cart (<span>0</span>)
                </h2>

                {/* Empty cart image */}
                <div className=" ">
                    {<img src={IllustrateEmptyCart} alt="empty cart" className="mx-auto my-4 w-[80px] " />}
                </div>

                <p className="text-center text-[var(--rose500)] text-sm">
                    Your added items will appear here
                </p>
            </div>
        </>
    )
}


export default EmptyCart;
