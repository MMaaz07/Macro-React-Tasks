import { useState } from "react"

export function WishList({ setCart, setTotal }){
    const [products,setProducts]=useState([
        {id:1,name:"Laptop",price:50000},
        {id:2,name:"Mobile",price:20000},
        {id:3,name:"Microwave Oven",price:15000},
        {id:4,name:"Headphones",price:3000},
    ])
    function addToCart(pr){
        setCart(prev => {
        const existing = prev.find(item => item.id === pr.id);

        if (existing) {
          // increase quantity
          return prev.map(item =>
            item.id === pr.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prev, { ...pr, quantity: 1 }];
    });
    setTotal(prev=> prev+pr.price)
    }
    return(
        <div>
            <h1>WishList</h1>
            <div>
                {products.map((pr)=>(
                        <div key={pr.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <p style={{ margin: 0 }}>{pr.name}</p>
                            <span>
                                <button onClick={()=>addToCart(pr)}>Add To Cart</button>
                                <button>Buy Now</button>
                            </span>
                        </div>
                ))}
            </div>
        </div>
    )
}

export function Cart({cart, setCart, setTotal, total}){


    // console.log(cart)
    function increase(id){
        let price=0
        setCart(prev=>
            prev.map(item=>{
                if(item.id==id){
                    price=item.price;
                    return {...item, quantity:item.quantity+1};
                }
                return item;
            })
        )
        setTotal(prev=>prev+price)
    }
    function decrease(id){
        let price=0;
        setCart(prev=>
            prev.map(item=>{
                if(item.id==id){
                    price=item.price;
                    return {...item, quantity:Math.max(1,item.quantity-1)};
                }
                return item;
            })
        )
        setTotal(prev=>prev-price)
    }
    function removePr(id){
        setCart(prev=>
            prev.filter(item=> item.id!==id)
        )
        setTotal(0)
    }
    return(
        <div>
            <h1>Cart</h1>
            {
                cart.map(item=>(
                    <div key={item.id}>
                        <button style={{borderRadius:"100%"}} onClick={()=>increase(item.id)} >+</button>
                        <p key={item.id} style={{display:"inline"}} >{item.name} price: {item.price} Qty: {item.quantity}</p>
                        <button style={{borderRadius:"100%"}} onClick={()=>decrease(item.id)} >-</button>
                        <button style={{borderRadius:"10%", backgroundColor:"red", color:"white"}} onClick={()=>removePr(item.id)} >Remove</button>
                    </div>
                ))
            }
            <h3>Total: {total}</h3>
        </div>
    )
}