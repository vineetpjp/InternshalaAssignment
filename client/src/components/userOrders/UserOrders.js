import React,{useEffect,useState} from 'react';
import axios from 'axios'
import OrderItem from './OrderItem';

const UserOrders = () => {
    const [data, setData] = useState([]);

    const fetchOrders = async() =>{
        const response = await axios.get('/api/order/user');
        console.log(response.data);
        setData(response.data)
    }
    useEffect(()=>{
        fetchOrders()
    },[])

    if(data==[]){
        return (
            <div className='card-container' >   
                No Previous Orders
            </div>
        )
    }

    const renderOrders = () =>{
            return data.map((item)=>{
            return (
                <OrderItem item={item} />
            )
        })
    }

    return (
        <div className='cart-container'>
            <div className='cart-header' >
                <div>ORDERS</div>
                <div>Happy Tummy :)</div>
            </div>
            <div>
                {data&&renderOrders()}
            </div>
        </div>
    )
}

export default UserOrders
