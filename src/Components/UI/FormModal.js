import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './FormModal.scss';

const FormModal = forwardRef((props, ref) => {



  //Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  //Values from form
  const [vals, setvals] = useState([])

  useImperativeHandle(ref, () => ({
    handleShowInParent(parentVals) {
      setShow(true)
      setvals(parentVals);
    }

  }))
  // console.log(vals)

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title 
          className='modalTitle'>
          Thank you!<br/>
          <span className='titleName'>{vals.yourName}</span>
          </Modal.Title>

        </Modal.Header>
        <Modal.Body className='text-center modalBody'>
          
          <div>
            
            <p>We have Recieved your message <span className='values'>
            "{vals.yourMessage}"
            </span> and we will contact you through your number <span className='values'>"{vals.phone}"</span> very soon. Feel free to check
            your email <span className='values'>"{vals.email}"</span> for our latest offers that might be within your budget <span className='values'>"{vals.budget}"</span></p>
            
          </div>
        
        </Modal.Body>
        <Modal.Footer>
          <Button className='modalBtn' onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
})

export default FormModal;