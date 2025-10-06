

import MainBody from "./MainBody";
import EmptyCart from "./EmptyCart";
import ActiveCart from "./ActivCart";
import CartConfirmed from "./CartConfirmed";

function Main(){
    return (
        <>
        {/* divided the page into two parts */}
            <main  >

                <section className="w-full flex flex-col md:flex-row gap-5" >
                    <MainBody /> 
                    <EmptyCart />
                </section>
                
                {/* <div className="flex flex-col gap-2">
                    <ActiveCart />
                    <CartConfirmed />
                </div> */}

                
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
                    Coded by <a href="#">Wizdom Aghabie</a>.
                </div>
            </main>
        </>
    )
}


export default Main;