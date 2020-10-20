import React,{Fragment} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { logout } from '../../actions/auth'


const Navbar = ({auth:{isAuthenticated,isLoading,user},logout}) => {

    return (
        <nav className='navbar row sp-bt' >
            <div className='restlogo'>
               <Link to='/' >FOOD-CHIEF <i class="fas fa-glass-cheers"></i></Link>
            </div>
            <div className='row' >

                {!isAuthenticated&&
                <Fragment>
                <div className='btn' >
                    <Link to='/login' >Login<i class="fas fa-sign-in-alt"></i></Link>
                </div>
                <div className='btn mgl-sm'>
                    <Link to='/register' >Register<i class="fas fa-user-plus"></i></Link>
                </div>
                </Fragment>}
                
                { user && isAuthenticated &&
                <Fragment>

                    {user.typeAccess == 'user'&&<Fragment>
                        <div>
                            <Link to='/userOrders' className='btn mgl-sm' >User Orders <i class="fas fa-sort-amount-up-alt"></i></Link>
                        </div>
                        <div>
                            <Link to='/cart' className='btn mgl-sm' >Cart <i class="fas fa-shopping-cart"></i></Link>
                        </div>
                    </Fragment>}

                    {user.typeAccess == 'restaurant'&&<Fragment>
                        <div>
                            <Link to='/dashboard' className='btn mgl-sm' >Customer Orders <i class="fas fa-layer-group"></i></Link>
                        </div>
                        <div>
                            <Link to='/create-menu-item' className='btn mgl-sm' >Create Food Item <i class="fas fa-plus-square"></i></Link>
                        </div>
                    </Fragment>}
                    <div onClick={()=>logout()} className='btn mgl-sm'>
                        Logout<i class="fas fa-sign-out-alt"></i>
                    </div>
                </Fragment>}

            </div>
        </nav>
    )
}
const mapStateToProps = ({auth})=>({
    auth
})

export default connect(mapStateToProps,{logout})(Navbar)
