import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRef } from 'react';


function UpdateFruit() {
    const { id } = useParams();

    const fruitName = useRef("");
    const quantity = useRef("");
    const price = useRef("");
    const urlImage = useRef("");

    console.log("esse é o id "+id);

    useEffect(() => {
        axios.get(`http://localhost:4000/fruit/${id}`).then((response) => {
            fruitName.current.value = response.data.name;
            quantity.current.value = response.data.quantity;
            price.current.value = response.data.cost;
            urlImage.current.value = response.data.urlImage;
        }).catch(error => {
            if (error.response.status === 404) {
              console.error(`Resource not found: ${error.response.statusText}`);
              // handle 404 error, e.g., redirect to a 404 page or display an error message
            } else {
              console.error('Error occurred:', error);
            }
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
                <Button variant="primary" type="button">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default UpdateFruit;