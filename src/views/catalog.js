import React, {useState} from 'react';
import { Container, Row, Col, Accordion, Form, Button, FormControl, Table } from 'react-bootstrap';
import '../index.css'
import initial_products from '../data/products'
import initial_categories from "../data/categories";

let categories = [];
if (localStorage.getItem('categories')){
    categories = localStorage.getItem('categories').split(",");
}
else {
    categories = initial_categories
}

let products = [];
if (localStorage.getItem('products')){
    products = JSON.parse(localStorage.getItem('products'));
}
else {
    products = initial_products
}

const productKeys = [
    "Nombre",
    "Precio",
    "Cantidad",
    "Descripción",
    "Categoria"
];

function Catalog() {
    console.log("products",products)
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [amount, setAmount] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    function newCategory() {
        console.log("CREAR CATEGORIA", category)
        categories.push(category)
        localStorage.setItem('categories', categories);
        console.log("categories",categories)
        return;
    }

    function newProduct() {
        console.log("CREAR PRODUCTO", name, description, price, amount, selectedCategory)
        products.push({
            nombre: name,
            descripcion: description,
            precio: price,
            cantidad: amount,
            categoria: selectedCategory,
        })
        localStorage.setItem('products', JSON.stringify(products));
        console.log("producto",categories)
        return;
    }

    return (
        <Container fluid className="Catalog">
            <Row>
                <Col sm={3} className="Catalog-Menu" >
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Crear Categoría</Accordion.Header>
                            <Accordion.Body>
                                <Form onSubmit={newCategory}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Ingrese nuevo nombre para una categoría</Form.Label>
                                        <Form.Control
                                            placeholder="Nombre de categoría"
                                            required
                                            onChange={(e) => setCategory(e.currentTarget.value)}
                                        />
                                        <Form.Text className="text-muted">
                                            Las categorías agrupan los productos
                                        </Form.Text>
                                    </Form.Group>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                    >
                                        Enviar
                                    </Button>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Crear Producto</Accordion.Header>
                            <Accordion.Body>
                                <Form onSubmit={newProduct}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            placeholder="Nombre de producto"
                                            required
                                            onChange={(e) => setName(e.currentTarget.value)}
                                        />


                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Control
                                            placeholder="Descripción"
                                            required
                                            as="textarea"
                                            onChange={(e) => setDescription(e.currentTarget.value)}
                                        />


                                        <Form.Label>Precio</Form.Label>
                                        <Form.Control
                                            placeholder="Precio"
                                            required
                                            type="number"
                                            onChange={(e) => setPrice(e.currentTarget.value)}
                                        />


                                        <Form.Label>Cantidad</Form.Label>
                                        <Form.Control
                                            placeholder="Cantidad"
                                            required
                                            type="number"
                                            onChange={(e) => setAmount(e.currentTarget.value)}
                                        />


                                        <Form.Label>Ingrese datos para un producto</Form.Label>
                                        <FormControl
                                            required
                                            as="select"
                                            placeholder="Categoría de producto"
                                            onChange={(e) => setSelectedCategory(e.currentTarget.value)}
                                        >
                                            {categories.map((category, ) => (
                                                <option key={category}>{category}</option>
                                            ))}
                                        </FormControl>

                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Enviar
                                    </Button>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col sm={9} className="Catalog-Data" >
                    <Table responsive striped bordered hover size="sm" variant="light">
                        <thead>
                        <tr>
                            {productKeys.map((key, index) => (
                                <td key={index}>{key}</td>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product, index) => (
                            <tr>
                                <td>{product.nombre}</td>
                                <td>{product.precio}</td>
                                <td>{product.cantidad}</td>
                                <td>{product.descripcion}</td>
                                <td>{product.categoria}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default Catalog;