import React from 'react';


const empleadoAvatar = ({empleadoURL,altText}) => {
   
    return (
        

        <img src={empleadoURL} alt={altText} className='avatar' />
        
        
    );
};

export default empleadoAvatar;