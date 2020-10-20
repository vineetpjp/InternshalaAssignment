import React from 'react'
import SpinnerImage from './spinner.gif'

const Spinner = () => {
    return (
        <div className='spinner'>
            <img src={SpinnerImage}  alt='Loading...' />
        </div>
    )
}

export default Spinner
