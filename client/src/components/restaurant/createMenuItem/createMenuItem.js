import React,{useState} from 'react'
import axios from 'axios'
import {setAlert} from '../../../actions/alert'
import history from '../../../history'
import { connect } from 'react-redux'

const CreateMenuItem = ({setAlert}) => {
  const [formData, setFormData] = useState({
        itemName: '',
        description: '',
        foodType: '',
        image: '',
        price: null
    });

    const { itemName, description, foodType, image, price } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post('/api/menu', formData);
        setAlert('Food Created Successfully !', 'success');
        history.push('/');
    };

  return (
    <div className='column mgt-lg'>
      <h1>Create Food Item</h1>
      <form className='form column mgt-lg' onSubmit={e => onSubmit(e)}>
          <div className='form-input'>
            <input
              onChange={e => onChange(e)}
              type='text'
              placeholder='Name of Food Item'
              name='itemName'
              value={itemName}
              required
            />
          </div>

          <div className='form-input'>
            <input
              onChange={e => onChange(e)}
              type='url'
              placeholder='Image url For Food Item'
              name='image'
              value={image}
              required
            />
          </div>
          <div className='form-input'>
                <select
                  id='inputState'
                  className='form-control'
                  name='foodType'
                  value={foodType}
                  onChange={e => onChange(e)}
                >
                  <option >Food Type</option>
                  <option>Vegetarian</option>
                  <option>Non Vegetarian</option>
                </select>

              </div>
              <div className='form-input' style={{marginTop:10}} >
                <input
                  onChange={e => onChange(e)}
                  type='number'
                  placeholder='Price'
                  name='price'
                  value={price}
                  min='0'
                  step='1'
                  required
                />
              </div>

          <div class='row form-input'>
            <label for='description'>Food Description</label>
            <textarea
              class='form-control'
              id='description'
              rows='2'
              onChange={e => onChange(e)}
              placeholder='Food description'
              name='description'
              value={description}
              required
            />
          </div>
          <input type='submit' className='btn btn-lg mgt-lg' value='Submit' />
        </form>
    </div>
  )
}

export default connect(null,{setAlert})(CreateMenuItem)
