import React from 'react'

const OrderItem = ({item}) => {
    let {quantity,price,date,menuItemId:{itemName,image},restaurantId:{name},userId} =item;
    const {name:userName} = userId
        date= new Date(date)
    let img = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    return (
        <div className='cart-item' >
            <div className='cart-image' >
                <img src={img} alt='Food Image' className='cart-img' />
            </div>
            {userName&&<div>userName : {userName}</div>}
            <div className = '' >
                <div>
                    {itemName}
                </div>
                <div>
                    From : {name}
                </div>
            </div>
            <div>Quantity: {quantity}</div>
            <div>Price: {price}</div>
            <div>Order Date: {date.getDate()}/{date.getMonth()}/{date.getYear()}</div>
        </div>
    )
}

export default OrderItem
