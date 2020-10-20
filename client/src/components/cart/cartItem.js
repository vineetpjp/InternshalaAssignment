import React from 'react'

const cartItem = ({ItemHandler,item}) => {
    const {itemName:name,description,foodType,image,price,quantity,restaurantId} =item;
    const {name:restName} = restaurantId
    const totalPrice = price*quantity;
    let img = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    return (
        <div className='cart-item' >
            <div className='cart-image' >
                <img src={img} alt='Food Image' className='cart-img' />
            </div>
            <div className = '' >
                <div>
                    {name}
                </div>
                <div>
                    From : {restName}
                </div>
            </div>
            <div className='cart-quantity' >
                <button onClick={()=>ItemHandler(item._id,'decrement')} >-</button>
                <div style={{display:'flex'}}> &nbsp;{quantity}&nbsp; </div>
                <button onClick={()=>ItemHandler(item,'increment')}>+</button>
            </div>
            <div>
                TotalPrice : {totalPrice}
            </div>
            <button onClick={()=>{ItemHandler(item._id,'remove')}} className='cart-delete-btn' >
                Delete Item
            </button>
        </div>
    )
}

export default cartItem
