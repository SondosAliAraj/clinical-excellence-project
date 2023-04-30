import React from 'react';
import './style.css'

const Register = () => {
    return (
      <>
        <div className="RegisterContainer d-none d-lg-inline">
          <i class="bi bi-person  personIcon"></i>
          <a  href="#login_register" className='loginRegister'>Login / Register</a>
        </div>
      </>
    );
}
 
export default Register;