import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import img from '../../assets/img/doctors/doctors-1.jpg'
import kid_img from '../../assets/img/clinics/kids.jpg'
import eyes_img from '../../assets/img/clinics/eyes.jpg'
import teeth_img from '../../assets/img/clinics/teeth.jpg'
import women_img from '../../assets/img/clinics/women.jpg'
import heart_img from '../../assets/img/clinics/heart.jpg'
import skin_img from '../../assets/img/clinics/skinjpg.jpg'
import bone_img from '../../assets/img/clinics/bone.jpg'
import ears_img from '../../assets/img/clinics/earsjpg.jpg'
import neuron_img from '../../assets/img/clinics/neuron.jpg'
import interior_img from '../../assets/img/clinics/interiorjpg.jpg'
import chest_img from '../../assets/img/clinics/chest.jpg'
import digestive_img from '../../assets/img/clinics/digestive.jpg'

class ClinicsDetails extends Component {
    render() {
        return (
            <Fragment className='text-center' >
            <Container className='pt-5 text-center ' data-aos="fade-up" data-aos-delay="200">

            <div className="container section-title" data-aos="fade-up">
        <h2>احجز الآن<br/></h2>
        <p>نحن منصة تربط بين المرضى والعيادات لتسهيل حجز المواعيد والتواصل بينهم بكل سهولة وفعالية.</p>
        </div>
                <Row className="justify-content-center g-4 row-card" data-aos="fade-up" data-aos-delay="200">
                <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className='clinics-card'>
                    <Card.Img variant="top" src={teeth_img}  className='card-img-clinics'/>
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
                    <Card.Img variant="top" src={eyes_img}  className='card-img-clinics'/>
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
                    <Card.Img variant="top" src={kid_img}  className='card-img-clinics'/>
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

                <Row className="justify-content-center g-4 row-card" data-aos="fade-up" data-aos-delay="200">
                <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className='clinics-card'>
                    <Card.Img variant="top" src={skin_img}  className='card-img-clinics'/>
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
                    <Card.Img variant="top" src={heart_img}  className='card-img-clinics'/>
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
                    <Card.Img variant="top" src={women_img}  className='card-img-clinics'/>
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

                <Row className="justify-content-center g-4" data-aos="fade-up" data-aos-delay="200">
                <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className='clinics-card'>
                    <Card.Img variant="top" src={ears_img}  className='card-img-clinics'/>
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
                    <Card.Img variant="top" src={bone_img}  className='card-img-clinics'/>
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
                    <Card.Img variant="top" src={neuron_img}  className='card-img-clinics'/>
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

                <Row className="justify-content-center g-4" data-aos="fade-up" data-aos-delay="200">
                <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className='clinics-card'>
                    <Card.Img variant="top" src={digestive_img} className='card-img-clinics'/>
                    <Card.Body>
                        <Card.Title>عيادة الجهاز الهضمي</Card.Title>
                        <Card.Text>
                        تشخيص وعلاج أمراض الجهاز الهضمي والكبد.
                        </Card.Text>
                        <Button variant="primary">المزيد من التفاصيل</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className='clinics-card'>
                    <Card.Img variant="top" src={chest_img} className='card-img-clinics'/>
                    <Card.Body>
                        <Card.Title>عيادة الصدر</Card.Title>
                        <Card.Text>
                        علاج أمراض الجهاز التنفسي والرئة.
                        </Card.Text>
                        <Button variant="primary">المزيد من التفاصيل</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className='clinics-card'>
                    <Card.Img variant="top" src={interior_img} className='card-img-clinics'/>
                    <Card.Body>
                        <Card.Title>عيادة الباطنية</Card.Title>
                        <Card.Text>
                        تقديم خدمات طبية شاملة للأمراض الباطنية.
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
