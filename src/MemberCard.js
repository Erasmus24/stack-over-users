import { Modal, show, Button} from 'react-bootstrap';
import {useState} from 'react';

const MemberCard =({display_name, profile_image , reputation})=>{
    const [show, setShow]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    return(
        <div className="card text-center  mb-3" style={{background: 'linear-gradient(to top, #ffcc80 29%, #e65100 70%)'}} >
            <div className="card-body" style={{margin: '2px', borderRadius: '25px'}} >
              <img className="card-img-top" src={profile_image } alt="Stack Overflow Memeber" />
              <h3>{display_name}</h3>
              <h5>Reputation: {reputation}</h5>
              <div className="card-body" >
                  <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>
                  <Modal show={show} onHide={handleClose} >
                      <Modal.Header closeButton>
                        <Modal.Title><h3>I am {display_name}.</h3></Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{background: '#ffd180'}}>
                      <img className="card-img-top" style={{width:'14rem'}} src={profile_image } alt=" Stack Overflow Memeber" />
                      <h3>{display_name}</h3>
                      <h4>Reputation: {reputation}</h4>       
                     
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="primary" >Like</Button>
                          <Button variant="warning" >Follow</Button>
                      </Modal.Footer>
                  </Modal>
              </div>
            </div>
        </div>
    )
}

export default MemberCard;