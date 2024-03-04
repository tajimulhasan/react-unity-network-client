import { Form } from 'react-bootstrap';
const AddEvent = () => {
  const handleSubmit = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const picture = e.target.picture.value;
    const data = {name, picture}
    const url = 'https://unity-network-server.onrender.com/allevents';
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })   
    .then(res => res.json())
    .then(data => {
      console.log(data)
      e.target.reset();
    })
  }
    return (
        <div>
            <div className="d-flex justify-content-center">
            <Form onSubmit={handleSubmit} className='w-50'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Image link</Form.Label>
        <Form.Control style={{fontSize: '14px'}}  name='picture' placeholder='Paste your img link' as="textarea" rows={3} />
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