import axios from "axios";
import { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AllFruits() {
    const [allFruits, setAllFruits] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/fruit").then((response) => {
            setAllFruits((previousState) => {
                return response.data;
            });
        })
    },[]);

    
    return (
        <>
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