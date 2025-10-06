
import OrderConfirmed from "/assets/images/icon-order-confirmed.svg"
import ClassicTiramisu from "/assets/images/image-tiramisu-desktop.jpg"
import VanillaBeanCrèmeBrûlée from "/assets/images/image-creme-brulee-desktop.jpg"
import VanillaPannaCotta from "/assets/images/image-panna-cotta-desktop.jpg"



function CartConfirmed (){
    return (
        <div className="activeCart bg-white  w-full md:w-[400px] 
        h-auto p-6 rounded-sm 
        flex flex-col gap-5
        ">
           <div>
                <img src={OrderConfirmed} alt="img confirmed icon checked"  className="w-[40px]"/>
           </div>

           <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                    Order Confirmed
                </h2>

                <p className="text-[var(--rose300)] text-xs md:text-sm">
                    We hope you enjoy your food
                </p>
           </div>

            {/* order confirmed body */}
            <div className="w-full   bg-[var(--rose100)] rounded-lg p-2">

                {/* confirmed item 1 */}
                <div className="cartItem border-b-1 border-[var(--rose300)]
                flex gap-2
                ">
                    <div className=" w-[50px] h-[45px] overflow-hidden rounded-md">
                        {/* img container */}
                        <img src={ClassicTiramisu} alt="Classic Tiramisu image" 
                        className="w-full h-full bg-cover bg-center bg-no-repeat" />
                    </div>

                    <div className="w-full flex justify-between items-center">
                        <div className="w-full"> 
                            <h3 >Classic Tiramisu</h3>
                            <p>
                                <span className="countRed"><span>1</span>x</span>
                                <span>@$<span>5.50</span></span>
                            </p>

                        </div>

                        <span className="text-sm"> $<span>5.50</span></span>
                    </div>
                </div>

                 {/* confirmed item 2 */}
                <div className="cartItem border-b-1 border-[var(--rose300)]
                flex gap-2
                ">
                    <div className=" w-[50px] h-[45px] overflow-hidden rounded-md">
                        {/* img container */}
                        <img src={VanillaBeanCrèmeBrûlée} alt="Classic Tiramisu image" 
                        className="w-full h-full bg-cover bg-center bg-no-repeat" />
                    </div>

                    <div className="w-full flex justify-between items-center">
                        <div className="w-full"> 
                            <h3 >Vanilla Bean Crème Brûlée</h3>
                            <p>
                                <span className="countRed"><span>4</span>x</span>
                                <span>@$<span>7.00</span></span>
                            </p>

                        </div>

                        <span className="text-sm"> $<span>28.00</span></span>
                    </div>
                </div>

                 {/* confirmed item 3 */}
                <div className="cartItem border-b-1 border-[var(--rose300)]
                flex gap-2
                ">
                    <div className=" w-[50px] h-[45px] overflow-hidden rounded-md">
                        {/* img container */}
                        <img src={VanillaPannaCotta } alt="Classic Tiramisu image" 
                        className="w-full h-full bg-cover bg-center bg-no-repeat" />
                    </div>

                    <div className="w-full flex justify-between items-center">
                        <div className="w-full"> 
                            <h3 >Vanilla Panna Cotta</h3>
                            <p>
                                <span className="countRed"><span>2</span>x</span>
                                <span>@$<span>6.50</span></span>
                            </p>

                        </div>

                        <span className="text-sm"> $<span>13.00</span></span>
                    </div>
                </div>

                     {/* total amount of item confirmed*/}
                 <div className="flex justify-between items-center py-5 px-3" >
                    <p className="text-[var(--rose900)] text-sm " >Order Total</p>
                    <p className="text-lg md:text-2xl font-bold text-[var(--rose900)]" >
                        $<span>46.50</span>
                    </p>
                </div>

            </div>

            <button className="w-full bg-[var(--rose300)] hover:border-none sborder-[var(--rose500)] 
            text-[var(--rose900)] text-sm font-medium px-6 py-2 rounded-full 
            mt-5 hover:bg-[var(--red)] hover:text-white transition-all 
            duration-300 ease-in-out active:translate-y-2 cursor-pointer
            " >
                Start New Order
            </button>
        </div>
    )
}


export default CartConfirmed;

