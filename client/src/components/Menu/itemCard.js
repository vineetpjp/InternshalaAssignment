import React from 'react'

const itemCard = ({CartHandler,menu}) => {
    return (
        <div className='card-column'>
        <div className='card'>
            <div className='image card-header'>
                <img src={menu.image} alt={menu.itemName} />
            </div>
            <div className='card-des' >
                <h3 style={{color:'goldenrod'}} >{menu.itemName}</h3>
                <p>{menu.description}</p>
                <h5>Restaurant: {menu.restaurantId.name}</h5>
                <div className='row sp-bt'>
                    <button onClick={(e) => CartHandler(menu)} className='card-btn' >Add to Cart</button>
                    <div>Price :&#8377; {menu.price} </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default itemCard
