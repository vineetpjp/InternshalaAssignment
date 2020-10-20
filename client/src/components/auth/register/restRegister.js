import React,{useState} from 'react';
import { connect } from 'react-redux';
import { register } from '../../../actions/auth';
import { setAlert } from '../../../actions/alert'

const RestRegister = ({register,setAlert}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        typeAccess: 'restaurant'
    });

    const { name, email, password } = formData;
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        if (password.length < 4) {
        setAlert('Password length is less than 4', 'danger');
        } else {
        register(formData);
        }
    };
    
    
    return (
        <div className='column center mgt-lg'>
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
          <input type='submit' className='btn btn-lg mgt-lg' value='Register' />
        </form>
        </div>
    )
}

export default connect(null,{register,setAlert})(RestRegister)
