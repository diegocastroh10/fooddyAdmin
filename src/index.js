import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import MainNavbar from "./components/navbar";
import Home from "./routers/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Fooddy</title>
            <link rel="canonical" href="/favicon.ico"  />
        </Helmet>
        <MainNavbar/>
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
    </React.StrictMode>
);