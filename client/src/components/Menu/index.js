import React, { useState,useEffect } from 'react'
import ItemCard from './itemCard';
import axios from 'axios'
import Spinner from '../layout/spinner'
import { setAlert } from '../../actions/alert'
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart'

const Menu = ({setAlert, auth, history,addToCart}) => {
    const [menu, setMenu] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        (async function() {
        let response = await axios.get('/api/menu');
        setMenu(response.data);
        setLoading(false)
        })();
    }, [setMenu]);

    let CartHandler = item => {
        if (!auth.isAuthenticated) {
            setAlert('Please login first!', 'danger')
            history.push('/login');
        } else if (auth.user.typeAccess == 'user') {
            setAlert(`${item.itemName} added to cart succesfully!`, 'success')
            addToCart(item)
        } else if (auth.user.typeAccess == 'restaurant') {
            setAlert(`Please use User Account!`, 'danger')
        }
    };

    let renderCards = () => {
        return menu.map((item)=>{
            return <ItemCard menu={item} CartHandler={CartHandler} />
        })
    }
    if(isLoading)
        return <Spinner/>
    return (
        <div>
            <div className='row center menu-header'>MENU</div>
            <div className='cards' >
                {renderCards()}
            </div>
        </div>
    )
}

const mapStateToProps = ({auth}) =>({
    auth
})

export default connect(mapStateToProps,{setAlert,addToCart})(Menu)