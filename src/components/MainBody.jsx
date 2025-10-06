
import Card from "./Card";
import Data from "../../data.json"


function MainBody(){

    // const data = JSON.parse(DataJson);
    const cardData = Data.map(item =>{
        return <Card 
            key = {item.id}
            // name = {item.name}
            // category = {item.category}
            // price = {item.price}
            // image = {item.image}    
            {...item}
        />
    })
    
    return (
        <>
            <div className="w-full ">
                <h1 className="text-2xl font-bold">
                    Desserts
                </h1>

                {/* Dessert items */}
                <div className="w-full flex flex-col md:grid grid-cols-3 gap-1  mt-4">
                    {cardData}
                </div>
            </div>
        </>
    )
}


export default MainBody;