import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import CartItem from './cartItem';
import { addToCart, decrementItem,placeOrder, removeItem ,getCart } from '../../actions/cart';
import { setAlert } from '../../actions/alert'

const Cart = ({ cart,setAlert,placeOrder, addToCart,getCart, removeItem, decrementItem}) => {

    useEffect(()=>{
        getCart();
    },[])

    if(cart.totalPrice==0){
        return (
            <div className='cart-container' >
                <div>
                    Cart is Empty! 
                </div>
                <div>
                    Add your First Item and Come back !!
                </div>
            </div>
        )
    }
    const ItemHandler = (item,operation) => {
        if(operation=='increment'){
            console.log(item,'addtocart')
            addToCart(item)
            setAlert('Item quantity Incremented :)','success');
        }else if(operation=='decrement'){
            decrementItem(item)
            setAlert('Item quantity Decremented :)','success')
        }else{
            removeItem(item)
            setAlert('Item removed :)','success')
        }
    }

    const renderCart = () => {
        const Items = Object.values(cart.items);
        return Items.map((item)=>{
            return (
                <CartItem ItemHandler={ItemHandler} item={item} />
            )
        })
    }
    return (
        <div>
            
        <div className='cart-container'>
            <div className='cart-header' >
                <div>CART</div>
                <div>Total Amount : &#8377;{cart.totalPrice} </div>
                <div>Happy Tummy :)</div>
            </div>
            {renderCart()}
            <div className='placeOrder' >
            <button onClick={()=>{placeOrder();setAlert('Order Placed Successfully :)','success')}}  >Place Order</button>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = ({cart}) =>({
    cart
})

export default connect(mapStateToProps,{addToCart,placeOrder,setAlert,getCart,removeItem,decrementItem})(Cart)
