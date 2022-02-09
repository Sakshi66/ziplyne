import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function RequestForm() {
  return (
    <div className="form-container">
      <Form>
        <Form.Group className="mb-3 group" controlId="formBasicFirstName">
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group className="mb-3 group" controlId="formBasicLastName">
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>

        <Form.Group className="mb-3 group" controlId="formBasicCompany">
          <Form.Control type="text" placeholder="Company" />
        </Form.Group>

        <Form.Group className="mb-3 group" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 group" controlId="formBasicInfo">
          <Form.Label>What information are you seeking?</Form.Label>
          <Form.Select>
            <option hidden="" value="">
              --Select any one--
            </option>
            <option>I am looking to understand more about DAPs</option>
            <option>
              I have seen another DAP and want to compare against Ziplyne
            </option>
            <option>I am looking to make a decision/purchase of a DAP</option>
          </Form.Select>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          <b>Request A Demo</b>
        </Button>
        <div className="terms">
          <p>
            By submitting you agree to our
            <br />
            <a href="#hero">
              <b>
                <i>Terms of Services</i>
              </b>
            </a>{" "}
            &amp;{" "}
            <a href="#hero">
              <b>
                <i>Privacy Policy</i>
              </b>
            </a>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default RequestForm;
