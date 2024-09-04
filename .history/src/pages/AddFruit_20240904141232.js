import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';

function AddFruit() {

    const fruitName = useRef("");
    const quantity = useRef("");
    const price = useRef("");
    const imageUrl = useRef("");

    return (
        <>
            <legend>Create</legend>
            <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" ref={fruitName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formQunatity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" ref={quantity} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCost">
                <Form.Label>Cost</Form.Label>
                <Form.Control type="number" ref={price} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImageUrl">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" ref={imageUrl} />
            </Form.Group>
            <Button variant="primary" type="button">
                Submit
            </Button>
            </Form>
        </>
    );
}

export default AddFruit;