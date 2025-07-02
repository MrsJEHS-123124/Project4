import React form 'react';
import {Link} from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function Homepage() {
    return (
        <Container className="text-center mt-5">
        <h1>Welcome to Soul-Fuel</h1>
        <p className="lead">Uplifting scriptures to stregthen your spirit,calm your heart and fuel your soul!</p>
        <Link to="/login">
            <Button variant="primary" size="lg" className="mt-3">
            Log In
            </Button>
        </Link>
        <Link to="/Container">
    );
    }

           
    export default Homepage;