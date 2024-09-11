import React from 'react';
import EmpleadoRow from './EmpleadoRow';
import { Row,Col,Container } from 'react-bootstrap';

const empleadoList = ({empleado}) => {
    return (

        <div>
            {
               
                empleado.map((empleado)=>(<EmpleadoRow key={empleado.id} empleado={empleado} />))
                
            }
           </div>
           
    );
};

export default empleadoList;