import axios from "axios";
import Button from 'react-bootstrap/Button';

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Form from 'react-bootstrap/Form';

function UpdateFruit() {
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4000/fruit/${id}`).then((response) => {

        })
    }, []);

    return (
        <>
            <legend>Update</legend>
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
                    <Form.Control type="text" ref={urlImage} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={addFruitHandle}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default UpdateFruit;