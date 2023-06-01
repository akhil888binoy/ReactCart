import React from 'react'

const Home=()=>{
    const productList=[{
        name:"macBook",
        price: 12000, 
        imgSrc: "asd",
        id:"asasdfgh"
    },
    {
        name:"samsung",
        price: " 130000",
        imgSrc: "asd",
        id:"asasddddfgh"
    }

]

return (
    <div className="home">
        {
            productList.map(i=>{
                <ProductCard key={i.id} imgSrc={i.name} ></ProductCard>
            })
        }
    </div>
)
        
}


const ProductCard=({name,id,price,handler,imgSrc})=>(
    <div className='productCard'> 
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=>handler()}>Add to cart</button>
    
    </div>
)
export default Home