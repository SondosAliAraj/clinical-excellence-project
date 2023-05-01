import React from 'react';
import './style.css'

const ButtonFill = ({btnText,btnColor}) => {
    return <>
    <button className='btn-md customBtn' style={{backgroundColor:`${btnColor}`}}>{btnText} </button>
    </>
}
 
export default ButtonFill;