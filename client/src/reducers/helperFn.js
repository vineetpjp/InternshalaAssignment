
export const addToCart = (stateItems,item) =>{
    let {items,totalItems,totalPrice} = stateItems;
   
    totalItems += 1;
    totalPrice += item.price;

    if(items[item._id]){
        items[item._id].quantity += 1;
    }else{
        items = {...items,[item._id]:{...item,quantity:1}};
    }
    return {totalItems,totalPrice,items};
}


export const removeFromCart = (stateItems,id) => {
    let {items,totalItems,totalPrice} = stateItems;
    const price = items[id].price;
    const quantity = items[id].quantity;
    totalItems -= quantity;
    totalPrice -= quantity*price;
    delete items[id]
    return {items,totalItems,totalPrice}
}


export const decrementFromCart = (stateItems,id) => {
    let {items,totalItems,totalPrice} = stateItems;

    if(items[id].quantity>1){
        totalItems -= 1;
        totalPrice -= items[id].price;
        items[id].quantity -=1;
    }else{
        return removeFromCart(stateItems,id);
    }

    return {items,totalItems,totalPrice}
}

