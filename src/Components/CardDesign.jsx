import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';


function CardDesign({user,id}) {
  return (
    <>
        
                
                    <Card className='bg-light border border-1 border-success transis h-100 pb-4'>
                        <Card.Body>
                        
                            <Card.Title className=" h-25 ">
                                <h1 className="fs-1">{user.name}</h1>
                            </Card.Title>
                            
                            <div className='mt-3'>
                                <Card.Text className='text-muted des-container '>
                                    I work at {user.company.name} and i deal with {user.company.catchPhrase}
                                    while with the aim to {user.company.bs}
                                </Card.Text>
                            </div>

                            <div className='mb-3 mt-4'>
                                <Card.Title className="mb-2 fs-5">General Info</Card.Title>
                                <div className='text-muted'>
                                    <Card.Text className='mb-1'><span>User Name:  </span> <span>{user.username} </span></Card.Text>
                                    <Card.Text className='mb-1'><span>Address:  </span><span>  {user.address.street} {user.address.city}</span></Card.Text>
                                    <Card.Text className='mb-1'><span>Email:  </span><span> {user.email}.</span></Card.Text>
                                    <Card.Text className='mb-1'><span>Phone:  </span><span> {user.phone}</span></Card.Text>
                                </div>
                               
                            </div>
                            

                
                        </Card.Body>

                    </Card>
                

        
        

    
    
    </>
  )
}

export default CardDesign