import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddFruit() {
    return (
        <>
            <legend>Create</legend>
            <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formQunatity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCost">
                <Form.Label>Cost</Form.Label>
                <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImageUrl">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Button variant="primary" type="button">
                Submit
            </Button>
            </Form>
        </>
    );
}

export default AddFruit;