import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import img from '../../assets/img/doctors/doctors-1.jpg'
class ClinicsDetails extends Component {
    render() {
        return (
            <Fragment className='text-center'>
                <Container className='pt-5 text-center ' data-aos="fade-up" data-aos-delay="200">

                <div className="container section-title" data-aos="fade-up">
        <h2>احجز الآن<br/></h2>
        <p>نحن منصة تربط بين المرضى والعيادات لتسهيل حجز المواعيد والتواصل بينهم بكل سهولة وفعالية.</p>
        </div>
                    <Row className="justify-content-center g-4 Row-Card">
                        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }} className='clinics-card'>
                                <Card.Img variant="top" src={img}  className='card-img-clinics'/>
                                <Card.Body>
                                    <Card.Title>عيادة الأسنان</Card.Title>
                                    <Card.Text>
                                        نقدم خدمات شاملة للعناية بالأسنان باستخدام أحدث التقنيات.
                                    </Card.Text>
                                    <Button variant="primary">المزيد من التفاصيل</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }} className='clinics-card'>
                                <Card.Img variant="top" src={img}  className='card-img-clinics'/>
                                <Card.Body>
                                    <Card.Title>عيادة العيون</Card.Title>
                                    <Card.Text>
                                        فحص شامل للعيون وعلاج مشاكل الرؤية بأحدث الأجهزة.
                                    </Card.Text>
                                    <Button variant="primary">المزيد من التفاصيل</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }} className='clinics-card'>
                                <Card.Img variant="top" src={img}  className='card-img-clinics'/>
                                <Card.Body>
                                    <Card.Title>عيادة الأطفال</Card.Title>
                                    <Card.Text>
                                        رعاية طبية متكاملة للأطفال من جميع الأعمار.
                                    </Card.Text>
                                    <Button variant="primary">المزيد من التفاصيل</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="justify-content-center g-4 Row-Card">
                        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }} className='clinics-card'>
                                <Card.Img variant="top" src={img}  className='card-img-clinics'/>
                                <Card.Body>
                                    <Card.Title>عيادة الجلدية</Card.Title>
                                    <Card.Text>
                                        علاج مشاكل البشرة والشعر بأحدث التقنيات.
                                    </Card.Text>
                                    <Button variant="primary">المزيد من التفاصيل</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }} className='clinics-card'>
                                <Card.Img variant="top" src={img}  className='card-img-clinics'/>
                                <Card.Body>
                                    <Card.Title>عيادة القلب</Card.Title>
                                    <Card.Text>
                                        تشخيص وعلاج أمراض القلب بأيدي أطباء متخصصين.
                                    </Card.Text>
                                    <Button variant="primary">المزيد من التفاصيل</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }} className='clinics-card'>
                                <Card.Img variant="top" src={img}  className='card-img-clinics'/>
                                <Card.Body>
                                    <Card.Title>عيادة النساء</Card.Title>
                                    <Card.Text>
                                        خدمات طبية شاملة للنساء في جميع المراحل العمرية.
                                    </Card.Text>
                                    <Button variant="primary">المزيد من التفاصيل</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="justify-content-center g-4">
                        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }} className='clinics-card'>
                                <Card.Img variant="top" src={img}  className='card-img-clinics'/>
                                <Card.Body>
                                    <Card.Title>عيادة الأنف والأذن والحنجرة</Card.Title>
                                    <Card.Text>
                                        تشخيص وعلاج أمراض الأنف والأذن والحنجرة.
                                    </Card.Text>
                                    <Button variant="primary">المزيد من التفاصيل</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }} className='clinics-card'>
                                <Card.Img variant="top" src={img}  className='card-img-clinics'/>
                                <Card.Body>
                                    <Card.Title>عيادة العظام</Card.Title>
                                    <Card.Text>
                                        علاج مشاكل العظام والمفاصل بأحدث الطرق الطبية.
                                    </Card.Text>
                                    <Button variant="primary">المزيد من التفاصيل</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }} className='clinics-card'>
                                <Card.Img variant="top" src={img}  className='card-img-clinics'/>
                                <Card.Body>
                                    <Card.Title>عيادة الأعصاب</Card.Title>
                                    <Card.Text>
                                        رعاية متخصصة لعلاج أمراض الجهاز العصبي.
                                    </Card.Text>
                                    <Button variant="primary">المزيد من التفاصيل</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ClinicsDetails
