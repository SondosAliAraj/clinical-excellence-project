import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <>
        <div className="RegisterContainer d-none d-lg-inline">
          <i class="bi bi-person  personIcon"></i>
          <Link className='text-decoration-none' to="/products"> <a className='loginRegister'>Login / Register</a></Link>
        </div>
      </>
    );
}
 
export default Register;