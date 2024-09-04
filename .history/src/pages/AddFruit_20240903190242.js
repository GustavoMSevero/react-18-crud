import Form from 'react-bootstrap/Form';

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
            </Form>
        </>
    );
}

export default AddFruit;