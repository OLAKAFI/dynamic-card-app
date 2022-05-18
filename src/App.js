import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDesign from './Components/CardDesign';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';



function App({induser}) {

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        // console.log(res.data);
        let data = res.data;
        setUser(data);
    })
    .catch((error) => {
        console.log(error);
    })
  }, []);

  return (
    <>
      <div className=''>
        <div className='container' >
          <h1 className='mt-2 mb-3 display-3 text-success'>UserData Profile</h1>
          <Row xs={1} md={2} lg={3} className="g-4">
            {
              user.map(induser => (
                (
                  <Col>
                    <CardDesign user={induser} key={induser.id}/>
                  
                  </Col>
                  
                )
              ))
            }
          </Row>
          
        </div>

      </div>
    
    
    
    
    </>
    
  )
}


export default App;
