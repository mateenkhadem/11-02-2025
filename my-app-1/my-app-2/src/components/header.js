import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';

function Header() {
    return (
        <>
            <h1>
                Example heading <Badge bg="secondary">New</Badge>
            </h1>
        </>
    )
}

export default Header;