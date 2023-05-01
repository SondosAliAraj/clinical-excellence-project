import React from 'react';
import './style.css'

const SectionSubHeader = ({subHeader}) => {
    return <>
    <div className="subHeader">
        <p>{subHeader}</p>
    </div>
    </>;
}
 
export default SectionSubHeader;