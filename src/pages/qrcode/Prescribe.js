import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

let drugId = 0;
let descriptionId = 0;

function Prescribe() {
  const [show, setShow] = useState(false);
  const [drug, setdrug] = useState();
  const [prescribed_drug, setprescribed_drug] = useState([]);
  const [metaiformation, setmetaiformation] = useState();
  const [metadatalist, setmetadatalist] = useState([]);

  const handleClose = () => setShow(false);
  const handleSaveChnages = (e) => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handle_drug_adding_in_prescription = () => {
    // alert("Drug added in Precription");
    setprescribed_drug([...prescribed_drug, { id: drugId++, name: drug }]);
    setmetadatalist([
      ...metadatalist,
      { descId: descriptionId++, name: metaiformation },
    ]);
    setdrug("");
    setmetaiformation("");
    console.log(prescribed_drug);
    console.log(metadatalist);
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
              <Form.Control
                type="text"
                placeholder="Paracetamol"
                autoFocus
                value={drug}
                onChange={(e) => {
                  setdrug(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Meta data for Medicine </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={metaiformation}
                onChange={(e) => {
                  setmetaiformation(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
          <h4>Added Medicine</h4>

          <ul>
            {prescribed_drug.map((drug) => (
              <li key={drug.id}>{drug.name}</li>
            ))}
            {metadatalist.map((metaiformation) => (
              <li key={metaiformation.descId}>
                {" "}
                Description: {metaiformation.name}
              </li>
            ))}
          </ul>
          <button onClick={handle_drug_adding_in_prescription}>Add</button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChnages}>
            <a href="/dashboard">Save Changes</a>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Prescribe;
// export const Datashare;
