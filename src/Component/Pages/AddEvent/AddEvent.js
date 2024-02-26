import React from 'react';
import { Form } from 'react-bootstrap';

const AddEvent = () => {
    return (
        <div>
            <div className="d-flex justify-content-center">
            <Form className='w-50'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Image link</Form.Label>
        <Form.Control style={{fontSize: '16px'}} placeholder='Paste your img link' as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control className='btn addevent-button' type="submit" value="Add Event" style={{backgroundColor: '#FF5B00', color: 'white'}}/>
      </Form.Group>
    </Form>
            </div>
        </div>
    );
};

export default AddEvent;