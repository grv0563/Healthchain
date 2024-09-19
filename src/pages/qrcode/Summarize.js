import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Medical History summary
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Patient ID #12345</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <ol>
            <li> 1. Medical summary point 1</li>
            <li> 2. Medical summary point 2</li>
            <li> 3. Medical summary point 3</li>
            <li> 4. Medical summary point 4</li>
            <li> 5. Medical summary point 5</li>
            <li> 6. Medical summary point 6</li>
            <li> 7. Medical summary point 7</li>
            <li> 8. Medical summary point 8</li>
            <li> 9. Medical summary point 9</li>
        </ol>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

 export default function Summarize() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
      Summarize
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

