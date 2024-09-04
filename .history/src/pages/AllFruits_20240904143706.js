import axios from "axios";
import { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function AllFruits() {
    const [allFruits, setAllFruits] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/fruit").then((response) => {
            setAllFruits((previousState) => {
                return response.data;
            });
        })
    },[]);

    
    return (
        <>
            <Row className="mt-2">
                <Col md={{span:4, offset:4}}>
                <Button variant="primary" type="button" onClick={() => navigate("/add-fruit")}>
                    Add a new fruit
                </Button>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                {allFruits.map((item) => (
                    <Col key={item.id}>
                    <Card>
                        <Card.Img variant="top" src={item.urlImage} style={{height: 400}} />
                        <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            Quantity - {item.quantity}
                        </Card.Text>
                        <Card.Text>
                            Cost - {item.cost}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default AllFruits;