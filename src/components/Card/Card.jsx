import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './Card.css';

const CustomCard = ({ title, text, img }) => {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        style={{ width: '25rem', overflow: 'hidden' }}
        className='p-0'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="image-container">
          <Card.Img
            alt={title}
            src={img}
            style={{ width: '100%' }}
            className={hover ? 'hovered-img' : ''}
            onClick={() => {
              handleShow();
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} size='xl' centered>
        <Modal.Header className='d-flex justify-content-center'>
          <Modal.Title style={{ fontSize: '2.5em' }}>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column justify-content-center align-items-center'>
          <Card.Img
            alt={title}
            src={img}
            style={{ width: '100%', borderRadius: '1em', maxWidth: '800px' }}
          />
          <Card.Text className='modal-text mt-3 p-1' style={{ fontSize: '1.5rem', textAlign: 'center' }}>
            {text}
          </Card.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomCard;
