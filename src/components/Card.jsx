
import React,{useState, useEffect} from "react";  

// import WaffleBerries from "../assets/images/image-waffle-desktop.jpg"
import IncrementQuantityIcon from "/assets/images/icon-increment-quantity.svg"
import DecrementQuantityIcon from "/assets/images/icon-decrement-quantity.svg"
import AddCartIcon from "/assets/images/icon-add-to-cart.svg"

function Card(props){

        let [totalPrice, setTotalPrice] = React.useState(0);
        let [count, setCount] = React.useState(0);
        const [imageSrc, setImageSrc] = React.useState(getImageSrc());
    
        function switchCartBtn(e){
    
            const target = e.target;
    
            if(target.classList.contains('cartBtn')){
                target.classList.add('hideBtn')
                
                const parent = target.closest('.card');
                const activeCartBtn = parent.querySelector('.activeCartBtn');
    
                if(activeCartBtn){
                    activeCartBtn.classList.remove('hideBtn');
    
                    setCount(1);
            }
            
            if(target.classList.contains('activeCartBtn')){
    
                target.classList.add('hideBtn');
    
                const parent = target.closest('.card')
                const cartBtn = parent.querySelector('.cartBtn');
    
                if(cartBtn){
                    cartBtn.classList.remove('hideBtn')
                }
            }
        }}
       
        function handleClick(e){
            const target = e.target;
    
            if(target.classList.contains('increaseItem')){
                
                // count = count + displayFirstCountFun;
                setCount(prevCount => {
                    if(prevCount < 10){
                        console.log('Previous Count: ', prevCount);
                        
                        const newCount = prevCount + 1;
                        setTotalPrice(newCount * props.price)
                        return newCount;
                    }else{
                        alert("Maximum item reached");
                        return prevCount;
                    }
                });
    
                // setTotalItemCount(count)
    
            }else if(target.classList.contains('decreaseItem')){
    
                setCount(prevCount => {
                    if(prevCount > 1){
                        // console.log('Previous Count: ', prevCount);
                        const newCount = prevCount - 1;
                        setTotalPrice(newCount * props.price);
                        return prevCount ;
                    }else{
                        alert("Minimum item is 1");
                        return 1;
                    }
                })
                setTotalItemCount(count)
            }
    
        }
    
        console.log('Total count: ', totalPrice);
    
        function getImageSrc(){
            const width = window.innerWidth;    
    
            if(width > 1024) return props.image.desktop ;
            if(width > 768) return props.image.tablet;
            if(width > 375) return props.image.mobile;
            return props.image.thumbnail
        }
    
        useEffect(()=>{
            function handleResize (){
                setImageSrc(getImageSrc());
            }
    
            window.addEventListener("resize", handleResize);
            return ()=> window.removeEventListener("resize", handleResize);
        },[]);
    
    return (
        <>
            <div className="card w-full md:w-[90%] p-4 rounded-sm flex flex-col justify-center items-center">

                <div className="w-full rounded-lg overflow-hidden"> 
                    {/* <img src={WaffleBerries} alt="waffle with berries" className="bg-center bg-no-repeat bg-cover" /> */}
                    <img 
                        src= {imageSrc} 
                        alt={props.name} 
                        className=" bg-center bg-no-repeat bg-cover" 
                    />
                </div>

                <div className="flex">
                    <button 
                        onClick={switchCartBtn} 
                        className=" cartBtn bg-[var(--rose50)] border-1 hover:border-none sborder-[var(--rose500)] 
                        text-[var(--rose900)] text-sm font-medium px-6 py-2 rounded-full 
                        -mt-5 hover:bg-[var(--red)] hover:text-white transition-all 
                        duration-300 ease-in-out active:translate-y-2 cursor-pointer
                    " >
                        <img 
                            src= {AddCartIcon} 
                            alt="Add to Cart" 
                            className="inline-block mr-1 w-[18px]" 
                        />
                        Add to Cart
                    </button>
                    
                    <div 
                        onMouseLeave={switchCartBtn} 
                        className="activeCartBtn hideBtn  w-[8.75rem] flex justify-between items-center
                        text-[var(--rose900)] text-sm font-medium px-6 py-2 rounded-full 
                        -mt-5 bg-[var(--red)] hover:text-white transition-all 
                        duration-300 ease-in-out active:translate-y-2 
                    ">
                        <button 
                            onClick={handleClick} 
                            className="cartBtnIcon increaseItem">
                                <img src={IncrementQuantityIcon} alt="increment icon" />
                        </button>

                        <span className="countNumber text-[var(--rose900)]">
                            {count}
                        </span>

                        <button onClick={handleClick} className="cartBtnIcon decreaseItem">
                            <img src={DecrementQuantityIcon} alt="decrement icon" />
                        </button>
                    </div>

                </div>

                <div className="w-full mt-2 ">
                    <span className="text-base text-gray-500">{props.category}</span>
                    <h3 className="text-lg font-medium text-[var(--rose900)]">{props.name}</h3>
                    <p className="text-[var(--red)] font-medium ">${props.price.toFixed(2)}</p>
                </div>
            </div>
        </>
    )
}

export default Card;

// i don't know why, but i set the code to be when the first click is made to add to item, then a div pop up with two button, where the user can increase the already added or decrease it. but after the first click to pop up the div so the button can show, when the secondary button pops up, when clicked it does count like it should , now am having problem on how to get the total item user want, the item, and the calculated amount for the increase or decrease of each card item. here is my code " import React from "react";