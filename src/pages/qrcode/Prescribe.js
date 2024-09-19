import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

let drugId = 0;
let patientHealthRecords = {
  medical_tests: ["test1", "test2"],
  prescriptions: ["prescription 1", "prescription 2"],
  x_rays: ["x_rays1", "x_rays2"],
  mri_scans: ["mris1", "mris2"],
};

function Prescribe() {
  const [show, setShow] = useState(false);
  const [drug, setdrug] = useState();
  const [prescribed_drug, setprescribed_drug] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handle_drug_adding_in_prescription = () => {
    // alert("Drug added in Precription");
    setprescribed_drug([...prescribed_drug, { id: drugId++, name: drug }]);
    setdrug("");
    console.log(prescribed_drug);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Prescribe
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Prescription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>add drug name</Form.Label>
              <Form.Control  type="email" placeholder="Paracetamol" autoFocus value={drug} onChange={(e) => {
                setdrug(e.target.value);
              }} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Meta data for Medicine </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <h4>Added Medicine</h4>
          <ul>
            {prescribed_drug.map((drug) => (
              <li key={drug.id}>{drug.name}</li>
            ))}
          </ul>
        
          <button onClick={handle_drug_adding_in_prescription}>Add</button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Prescribe;
