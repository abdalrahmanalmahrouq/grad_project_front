import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import doc_img1 from '../../assets/img/doctors/doctors-1.jpg';
import doc_img2 from '../../assets/img/doctors/doctors-2.jpg';
import doc_img3 from '../../assets/img/doctors/doctors-3.jpg';
import TopPageDetails from '../TopPageDetails/TopPageDetails';

const clinicsData = {
    kids: [
        { name: 'د. أحمد علي', clinic: 'عيادة الأطفال', img: doc_img1 ,id:1 },
        { name: 'د. سارة محمد', clinic: 'عيادة الأطفال', img: doc_img2 ,id:2 },
        { name: 'د. خالد حسن', clinic: 'عيادة الأطفال', img: doc_img3 ,id:3 },
    ],
    eyes: [
        { name: 'د. ليلى رؤوف', clinic: 'عيادة العيون', img: doc_img1 ,id:4 },
        { name: 'د. محمد عادل', clinic: 'عيادة العيون', img: doc_img2 ,id:5 },
    ],
    teeth: [
        { name: 'د. رنا يوسف', clinic: 'عيادة الأسنان', img: doc_img1 ,id:6 },
        { name: 'د. سامي إبراهيم', clinic: 'عيادة الأسنان', img: doc_img2 ,id:7 },
    ],
    women: [
        { name: 'د. هدى أحمد', clinic: 'عيادة النساء', img: doc_img1 ,id:8 },
        { name: 'د. منى خالد', clinic: 'عيادة النساء', img: doc_img2 ,id:9 },
    ],
    heart: [
        { name: 'د. عمرو سعيد', clinic: 'عيادة القلب', img: doc_img1 ,id:10 },
        { name: 'د. ياسمين فؤاد', clinic: 'عيادة القلب', img: doc_img2 ,id:11 },
    ],
    skin: [
        { name: 'د. كريم حسن', clinic: 'عيادة الجلدية', img: doc_img1 ,id:12 },
        { name: 'د. ندى إبراهيم', clinic: 'عيادة الجلدية', img: doc_img2 ,id:13 },
    ],
    neurology: [
        { name: 'د. سامر يوسف', clinic: 'عيادة الأعصاب', img: doc_img1 ,id:14 },
        { name: 'د. ليلى محمود', clinic: 'عيادة الأعصاب', img: doc_img2 ,id:15 },
    ],
    orthopedic: [
        { name: 'د. خالد سامي', clinic: 'عيادة العظام', img: doc_img1 ,id:16 },
        { name: 'د. رامي أحمد', clinic: 'عيادة العظام', img: doc_img2 ,id:17 },
    ],
    ear: [
        { name: 'د. فاطمة علي', clinic: 'عيادة الأنف والأذن', img: doc_img1 ,id:18 },
        { name: 'د. حسن يوسف', clinic: 'عيادة الأنف والأذن', img: doc_img2 ,id:19 },
    ],
    interior: [
        { name: 'د. أحمد مصطفى', clinic: 'عيادة الباطنة', img: doc_img1 ,id:20 },
        { name: 'د. سعاد محمد', clinic: 'عيادة الباطنة', img: doc_img2 ,id:21 },
    ],
    chest: [
        { name: 'د. خالد عبد الله', clinic: 'عيادة الجهاز التنفسي', img: doc_img1 ,id:22 },
        { name: 'د. مروة حسين', clinic: 'عيادة الجهاز التنفسي', img: doc_img2 ,id:23 },
    ],
    digestive: [
        { name: 'د. سامي إبراهيم', clinic: 'عيادة الجهاز الهضمي', img: doc_img1 ,id:24 },
        { name: 'د. هناء علي', clinic: 'عيادة الجهاز الهضمي', img: doc_img2 ,id:25 },
    ],
};

const titles = {
    kids: 'عيادات الأطفال',
    eyes: 'عيادات العيون',
    teeth: 'عيادات الأسنان',
    women: 'عيادات النساء',
    heart: 'عيادات القلب',
    skin: 'عيادات الجلدية',
    neurology: 'عيادات الأعصاب',
    orthopedic: 'عيادات العظام',
    ear: 'عيادات الأنف والأذن',
    interior: 'عيادات الباطنة',
    chest: 'عيادات الجهاز التنفسي',
    digestive: 'عيادات الجهاز الهضمي',
};

function AllClinics() {
    const { directory } = useParams();
    const doctors = clinicsData[directory] || []; // Get doctors for this clinic

    return (
        <>    
            <TopPageDetails pageTitle={titles[directory] || 'العيادات'} />
            <Container className="pt-5 text-center">
                <Row className="justify-content-center g-4 row-card">
                    {doctors.map((doctor, index) => (
                        <Col key={index} lg={4} md={6} sm={12} className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <Card style={{ width: '18rem' }} className="clinics-card">
                                <Card.Img variant="top" src={doctor.img} className="card-img-clinics" />
                                <Card.Body>
                                    <Card.Title dir="rtl">{doctor.name}</Card.Title>
                                    <Card.Text>
                                        {doctor.clinic}
                                    </Card.Text>
                                    <Button variant="primary" href={"/doctor/profile/"+doctor.id}>المزيد</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default AllClinics;
