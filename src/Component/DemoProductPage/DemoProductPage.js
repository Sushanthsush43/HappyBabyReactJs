// src/components/ProductPage.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DemoProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "Jar Mockup",
      description:
        "A baby product jar mockup is a digital or physical representation of a packaging design used for baby food, creams, or powders",
      videoUrl: "https://www.youtube.com/embed/Y_pETgQF1Ag?si=k8yJtWAWRhS-VS5G",
    },
    {
      id: 2,
      name: "Submayur Oil",
      description:
        "Submayur Baby Massage Oil is a gentle and nourishing oil formulated with natural ingredients to keep your baby skin soft, healthy, and hydrated",
      videoUrl: "https://www.youtube.com/embed/JRQoMHe1-7o?si=2h9NHCwCA9H8USrJ",
    },
    {
      id: 3,
      name: "Cetaphil",
      description:
        "Cetaphil Baby Lotion & Wash is designed to keep your baby delicate skin soft, smooth, and protected",
      videoUrl: "https://www.youtube.com/embed/Y_pETgQF1Ag?si=k8yJtWAWRhS-VS5G",
    },
    {
      id: 4,
      name: "Mana Health Mix",
      description:
        "Mana Health Mix is a nutritious blend of wholesome ingredients like grains, millets, and nuts, specially formulated for growing babies and toddlers",
      videoUrl: "https://www.youtube.com/embed/JRQoMHe1-7o?si=2h9NHCwCA9H8USrJ",
    },
    {
      id: 5,
      name: "Gerber",
      description:
        "Gerber Baby Food is a trusted brand offering a wide range of baby cereals, purees, and snacks made with high-quality, organic ingredients",
      videoUrl: "https://www.youtube.com/embed/Y_pETgQF1Ag?si=k8yJtWAWRhS-VS5G",
    },
    {
      id: 6,
      name: "Cerlac Mix",
      description:
        "Nestlé Cerelac Mix is an iron-rich baby cereal fortified with essential nutrients, including vitamins, probiotics, to support baby overall development",
      videoUrl: "https://www.youtube.com/embed/JRQoMHe1-7o?si=2h9NHCwCA9H8USrJ",
    },
  ];

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="my-5">
      <Row className="mb-4 align-items-center">
        <Col md={6} className="text-right">
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search by product name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control-sm me-2"
              style={{ width: "400px",  height: "45px"}}
            />
          </Form>
        </Col>
      </Row>
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} md={6} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-dark">{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div className="ratio ratio-16x9">
                  <iframe
                    src={product.videoUrl}
                    title={`${product.name} Demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DemoProductPage;
