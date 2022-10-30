import React from 'react';
import {Container} from "react-bootstrap";
import { Routes, Route} from "react-router-dom";
import Catalog from "../views/catalog";
import '../index.css'

function Home() {
    return (
        <Container fluid className="Home">
            <Routes>
                <Route path="/catalog" element={<Catalog />} />
                <Route path="*" element={<Catalog />} />
            </Routes>
        </Container>
    );
}

export default Home;