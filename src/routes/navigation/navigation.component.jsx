import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as TLAlogo} from '../../assets/logo.svg';
import  './navigation.styles.scss';

function Navigation () {
  return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to="/">
                <TLAlogo classname="logo" />
            </Link>
            
            <div className='nav-links-container'>
                <Link className='nav-link' to="/shop">SHOP</Link>
                <Link className='nav-link' to="/auth">SIGN IN</Link>
                <Link className='nav-link' to="/contact">CONTACT</Link>
                <Link className='nav-link' to="/about">ABOUT</Link>

            </div>
        </div>
          <Outlet />
      </Fragment>
  );
};

export default Navigation;