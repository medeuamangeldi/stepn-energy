import { Fragment } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './navigation.styles.scss';
import {Navbar, Container, Offcanvas, Nav, Col, Row} from 'react-bootstrap';



const Navigation = () => {
    return (
      <Fragment>
        
        {['sm'].map((expand) => (
            <Navbar key={expand} bg="white" expand={expand} className="mb-3">
            <Container fluid="md">
                <Navbar.Brand href="/">
                <Row className='align-items-center'>
                    <Col xs='auto' md='auto' lg='auto'>
                        <img className='logo' src="https://stepn.guide/img/logo.4a5272c7.svg" alt='logo'/>
                    </Col>
                    <Col xs='auto' md='auto' lg='auto'>
                        <span className='title'>STEPN.ENERGY</span>
                    </Col>

                    
                </Row>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="top"
                backdrop={true}
                scroll={true}
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    RESOURCES
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={NavLink} to='/add-result'>Add Your Results</Nav.Link>
                    <Nav.Link as={NavLink} to='/support'>Support Us</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        ))}
        <Outlet />

      </Fragment>
    );
};

export default Navigation;