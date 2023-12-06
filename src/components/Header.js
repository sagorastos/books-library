import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import Dashboard from "./Dashboard";
import Books from "./Books";
import AddBook from "./AddBook";
import { Routes, Route } from 'react-router-dom'
import ModalAdd from "./ModalAdd";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);


    const toggle = () => setIsOpen(!isOpen);

    return (
        <><Navbar className="bg-body-tertiary">
            <Navbar.Brand className="ms-3" href="/">Books.Library</Navbar.Brand>
            <Navbar.Toggle onClick={toggle} />
            <Navbar.Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar />
                <Link to="/books" className="text-muted me-4" style={{ textDecoration: 'none' }}>Books</Link>
                <Link to="/addbook" className="text-muted me-3" onClick={() => setModalShow(true)} style={{ textDecoration: 'none' }}>Add New Book</Link>
                <ModalAdd
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Navbar.Collapse>
        </Navbar>
            <Outlet /></>

    );
};

export default Header;
