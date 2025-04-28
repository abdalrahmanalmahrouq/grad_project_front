import React, { Component, Fragment } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import img from '../../assets/img/doctors/doctor-10.jpg'
import { clinicsData } from '../../data/clinicsData'; 
import { Link, useParams } from 'react-router-dom';


const allDoctors = Object.values(clinicsData).flat();

function  AppointmentsSchedule  () {
    const { id } = useParams();
    const doctorId = parseInt(id, 10); // Convert id from string to number
    const doctor = allDoctors.find(d => d.id === doctorId);

    if (!doctor) {
        return <div>Doctor not found</div>;
    }
    return (
      <Fragment>
        <Container className='doctor-profile' >
        <Row dir="rtl">
                    <Card>
                        <Card.Header as="h5" className='doctor-title'>ملف الطبيب</Card.Header>
                        <Card.Body className="d-flex align-items-center">
                            <Card.Img
                                variant="top"
                                src={doctor.img}
                                className="card-img-clinics"
                                style={{ width: '150px', height: '150px', marginLeft: '20px' }}
                            />
                            <div>
                                <Card.Title className='doctor-title'>{doctor.name}</Card.Title>
                                <Card.Text>{doctor.clinic}</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>


                <Row className='book-appointment-box'> 

                <div class="schedule-header">
									<div class="row">
										<div class="col-md-12">
										
										
											<div class="day-slot">
												<ul>
													<li class="left-arrow">
														<a href="#">
															<i class="fa fa-chevron-left"></i>
														</a>
													</li>
													<li>
														<span>Mon</span>
														<span class="slot-date">11 Nov <small class="slot-year">2025</small></span>
													</li>
													<li>
														<span>Tue</span>
														<span class="slot-date">12 Nov <small class="slot-year">2025</small></span>
													</li>
													<li>
														<span>Wed</span>
														<span class="slot-date">13 Nov <small class="slot-year">2025</small></span>
													</li>
													<li>
														<span>Thu</span>
														<span class="slot-date">14 Nov <small class="slot-year">2025</small></span>
													</li>
													<li>
														<span>Fri</span>
														<span class="slot-date">15 Nov <small class="slot-year">2025</small></span>
													</li>
													<li>
														<span>Sat</span>
														<span class="slot-date">16 Nov <small class="slot-year">2025</small></span>
													</li>
													<li>
														<span>Sun</span>
														<span class="slot-date">17 Nov <small class="slot-year">2025</small></span>
													</li>
													<li class="right-arrow">
														<a href="#">
															<i class="fa fa-chevron-right"></i>
														</a>
													</li>
												</ul>
											</div>
										
											
										</div>
									</div>
								</div>


                                <div class="schedule-cont">
									<div class="row">
										<div class="col-md-12">
										
											
											<div class="time-slot">
												<ul class="clearfix">
													<li>
														<a class="timing" href="#">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>10:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>11:00</span> <span>AM</span>
														</a>
													</li>
													<li>
														<a class="timing" href="#">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>10:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>11:00</span> <span>AM</span>
														</a>
													</li>
													<li>
														<a class="timing" href="#">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>10:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>11:00</span> <span>AM</span>
														</a>
													</li>
													<li>
														<a class="timing" href="#">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>10:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>11:00</span> <span>AM</span>
														</a>
													</li>
													<li>
														<a class="timing" href="#">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing selected" href="#">
															<span>10:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>11:00</span> <span>AM</span>
														</a>
													</li>
													<li>
														<a class="timing" href="#">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>10:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>11:00</span> <span>AM</span>
														</a>
													</li>
													<li>
														<a class="timing" href="#">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>10:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>11:00</span> <span>AM</span>
														</a>
													</li>
												</ul>
											</div>
											
											
										</div>
									</div>
								</div>
                                <div class="submit-section proceed-btn text-right">
							<Link to={'/register/patient'}  class="btn btn-primary submit-btn"	>حجز موعد</Link>
							</div>
                </Row>
        </Container>
      </Fragment>
    )
  }


export default AppointmentsSchedule
