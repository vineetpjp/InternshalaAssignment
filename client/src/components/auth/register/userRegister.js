import React, {useState} from 'react'
import {connect} from 'react-redux'
import { register } from '../../../actions/auth';
import { setAlert } from '../../../actions/alert'

const UserRegister = ({register,setAlert}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        foodPreference: '',
        typeAccess: 'user'
    });

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const { name, email, password, foodPreference,typeAccess } = formData;
    const onSubmit = async e => {
        console.log(formData)
        e.preventDefault();
        if (password.length < 4) {
        setAlert('Password length is less than 4', 'danger');
        } else {
        register(formData);
        }
    };

    
    return (
        <div className='column pd-lg mrt-lg' >
            <form className='form column' onSubmit={e => onSubmit(e)}>
            <div className='form-input'>
                <input
                value={name}
                onChange={e => onChange(e)}
                type='text'
                placeholder='* Name'
                name='name'
                required
                />
            </div>
            <div className='form-input'>
                <input
                value={email}
                onChange={e => onChange(e)}
                type='email'
                placeholder='* Email Address'
                name='email'
                required
                />
            </div>
            <div className='form-input'>
                <input
                value={password}
                onChange={e => onChange(e)}
                type='password'
                placeholder='* Password'
                name='password'
                minLength='4'
                />
            </div>
            <div className='form-input'>
                <label for='inputState'>Food Preference</label>
                <select
                id='inputState'
                className='form-control'
                name='foodPreference'
                value={foodPreference}
                onChange={e => onChange(e)}
                >
                <option >Select Preference</option>    
                <option >Vegetarian</option>
                <option>Non Vegetarian</option>
                </select>
            </div>
            <input type='submit' className='btn btn-lg mgt-lg' value='Register' />
            </form>
        </div>
    )
}

export default connect(null,{register,setAlert})(UserRegister)
