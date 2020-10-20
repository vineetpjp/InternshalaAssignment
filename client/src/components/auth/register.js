import React,{Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import shouldBeNoAuth from '../utils/shouldBeNoAuth';
import RestRegister from './register/restRegister';
import UserRegister from './register/userRegister';

const Register = () => {
    const [user, setUser] = useState(true)
    
    const isActive = (path)=>{
        if(path=='user'&&user || path=='rest'&&!user )
            return 'active';
        else 
            return '';
    } 

    const Switch = () =>{
        setUser(!user)
    }
    return (
        <div>
            <div className='row center pd-lg' >
                <button onClick={Switch} className={`btn ${isActive('user')}`} >User Registration</button>
                <button onClick={Switch} className={`btn mgl-sm ${isActive('rest')}`} >Restaurant Registration</button>
            </div>
            
                {!user&&<RestRegister/>}
            
                {user&&<UserRegister/>}

            
            <h3 className='row center' >Already SignedIn? <Link to='/login' >LogIn here</Link></h3>
        </div>
    )
}

export default shouldBeNoAuth(Register)
