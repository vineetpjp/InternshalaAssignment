import React,{Fragment, useState} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { login } from '../../actions/auth'
import shouldBeNoAuth from '../utils/shouldBeNoAuth'

const Login = ({login}) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        login({ email, password });
    };

    return (
        <Fragment>
            <h1 className='row center pd-lg'>Login</h1>
        <div className='row center mrt-lg' >
            <form className='form column' onSubmit={e => onSubmit(e)}>
                <div className='form-input'>
                    <input
                    onChange={e => onChange(e)}
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    value={email}
                    required
                    />
                </div>
                <div className='form-input'>
                    <input
                    onChange={e => onChange(e)}
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={password}
                    />
                </div>
                <input type='submit' className='btn btn-lg' value='Login' />
            </form>
        </div>
        <h3 className='row center' >Not signedIn ?  <Link to='/register' > SignUp</Link></h3>
        </Fragment>
    )
}


export default connect(null,{ login })(shouldBeNoAuth(Login));
