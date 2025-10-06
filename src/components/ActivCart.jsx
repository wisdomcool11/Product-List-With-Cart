
import DecrementQuantityIcon from "/assets/images/icon-remove-item.svg"
import CarbonNeutralIcon from "/assets/images/icon-carbon-neutral.svg"


export default function ActiveCart (){
    return (
        <div className="activeCart bg-white w-full md:w-[400px] h-auto p-6 rounded-sm ">
            <h2 className="text-[var(--red)] text-lg md:text-xl font-bold">
                Your Cart (<span>7</span>)
            </h2>

            {/* cart body */}
            <div>
                {/* item */}
               <div className=" cartItem relative border-b-1 border-[var(--rose100)]">
                    <h3 >Classic Tiramisu</h3>
                    <p>
                        <span className="countRed"><span>1</span>x</span>
                        <span>@$<span>5.50</span></span>
                        <span> $<span>5.50</span></span>
                    </p>
                    <button type="button" className="border-1 border-[var(--rose300)] 
                    absolute right-2.5 bottom-3.5 w-5 h-5 p-1 rounded-full hover:bg-[var(--red)] 
                    transition-all hover:border-none cursor-pointer
                    duration-300 ease-in-out active:translate-y-2 active:shadow-b-lg " >

                        <img src={DecrementQuantityIcon} alt="remove item icon" className="
                            bg-center bg-no-repeat bg-cover bg-transparent 
                        "/>

                    </button>
               </div>

               <div className="cartItem relative border-b-1 border-[var(--rose100)]">
                    <h3 >Vanilla Bean Crème Brûlée</h3>
                    <p>
                        <span className="countRed"><span>4</span>x</span>
                        <span>@$<span>7.00</span></span>
                        <span> $<span>28.00</span></span>
                    </p>

                    <button type="button" className="border-1 border-[var(--rose300)] 
                    absolute right-2.5 bottom-3.5 w-5 h-5 p-1 rounded-full hover:bg-[var(--red)] 
                    transition-all hover:border-none cursor-pointer
                    duration-300 ease-in-out active:translate-y-2 active:shadow-b-lg " >

                        <img src={DecrementQuantityIcon} alt="remove item icon" className="
                            bg-center bg-no-repeat bg-cover bg-transparent 
                        "/>

                    </button>
               </div>

               <div className="cartItem relative border-b-1 border-[var(--rose100)]">
                    <h3 >Vanilla Panna Cotta</h3>
                    <p>
                        <span className="countRed"><span>2</span>x</span>
                        <span>@$<span>6.00</span></span>
                        <span> $<span>13.00</span></span>
                    </p>

                    <button type="button" className="border-1 border-[var(--rose300)] 
                    absolute right-2.5 bottom-3.5 w-5 h-5 p-1 rounded-full hover:bg-[var(--red)] 
                    transition-all hover:border-none
                    duration-300 ease-in-out active:translate-y-2 active:shadow-b-lg cursor-pointer " >

                        <img src={DecrementQuantityIcon} alt="remove item icon" className="
                            bg-center bg-no-repeat bg-cover bg-transparent 
                        "/>

                    </button>
               </div>

            </div>

            <div className="flex flex-col gap-3">
                {/* cart footer */}
                <div>
                    <div className="flex justify-between items-center py-5 px-3" >
                        <p className="text-[var(--rose900)] text-sm " >Order Total</p>
                        <p className="text-lg md:text-2xl font-bold text-[var(--rose900)]" >
                            $<span>46.50</span>
                        </p>
                    </div>

                    <div className="w-full bg-[var(--rose100)] rounded-lg
                    flex justify-center items-center gap-2 h-[60px] p-3 text-xs
                    ">
                        <img src={CarbonNeutralIcon} alt="carbon-neutral icon" />
                        <p>This is a carbon-neutral delivery</p>
                    </div>

                </div>

                <button className="bg-[var(--rose300)] hover:border-none sborder-[var(--rose500)] 
                text-[var(--rose900)] text-sm font-medium px-6 py-2 rounded-full 
                 hover:bg-[var(--red)] hover:text-white transition-all 
                duration-300 ease-in-out active:translate-y-2 cursor-pointer
                " >
                    Confirm Order
                </button>
            </div>
        </div>
    )
}

