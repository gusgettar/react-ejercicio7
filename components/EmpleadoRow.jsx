import React from 'react';
import { Card } from 'react-bootstrap';
import EmpleadoAvatar from './empleadoAvatar';
import 'bootstrap/dist/css/bootstrap.min.css';
const empleadoRow = ({empleado}) => {
  
    return (
      
    
        <Card className='d-flex flex-row flex-wrap'>
        <EmpleadoAvatar empleadoURL={empleado.pic} altText={empleado.fullName}></EmpleadoAvatar>
        <Card.Body>
          <Card.Title>{empleado.fullName}</Card.Title>
          <Card.Text>
            {empleado.title +" "}
            <Card.Text  className='badge bg-primary'>
              {empleado.department}
              
              </Card.Text> 
              
          </Card.Text>
          
        </Card.Body>
      </Card>
     
     
    );
};

export default empleadoRow;