import React, { Component, Fragment } from 'react'
import { Button, Card, Container, Nav, Row } from 'react-bootstrap'

import doc_img1 from '../../assets/img/doctors/doctors-1.jpg';
export class DoctorProfile extends Component {
  render() {
    return (
     <Fragment>
        <Container className='doctor-profile'>
            <Row>
                <Card>
                    <Card.Header as="h5">Doctor Profile</Card.Header>
                    <Card.Body className="d-flex align-items-center">
                        <Card.Img variant="top" src={doc_img1} className="card-img-clinics" style={{ width: '150px', height: '150px', marginRight: '20px' }} />
                        <div>
                            <Card.Title>Dr. Mohammad Khan</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Book An Appointment</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Row>



            <Row className='pt-5'>

                        <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Locations</Nav.Link>
                    </Nav.Item>
                   
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>About Me</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                   
                </Card.Body>
                </Card>
            </Row>
        </Container>
     </Fragment>
    )
  }
}

export default DoctorProfile
