import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div dir="rtl">
              <footer id="footer" className="footer light-background">
                      <div className="container footer-top">
                        <div className="row gy-4">
                    
                          <div className="col-lg-4 col-md-6 footer-about">
                            <a href="index.html" className="logo d-flex align-items-center">
                              <span className="sitename">ميديسينا</span>
                            </a>
                            <div className="footer-contact pt-3">
                              <p>شارع تكنولوجيا المعلومات 100</p>
                              <p>الجامعة الهاشمية HU 330127</p>
                              <p className="mt-3">
                                <strong>الهاتف:</strong> <span>+79 10 44 738</span>
                              </p>
                              <p>
                                <strong>البريد الإلكتروني:</strong> <span>medicinahu@gmail.com</span>
                              </p>
                            </div>
                            <div className="social-links d-flex mt-4">
                              <a href="">
                                <i className="bi bi-twitter-x"></i>
                              </a>
                              <a href="">
                                <i className="bi bi-facebook"></i>
                              </a>
                              <a href="">
                                <i className="bi bi-instagram"></i>
                              </a>
                              <a href="">
                                <i className="bi bi-linkedin"></i>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-3 footer-links">
                            <h4>روابط مفيدة</h4>
                            <ul>
                              <li>
                                <a href="#">الرئيسية</a>
                              </li>
                              <li>
                                <a href="#">من نحن</a>
                              </li>
                              <li>
                                <a href="#">الخدمات</a>
                              </li>
                              <li>
                                <a href="#">شروط الخدمة</a>
                              </li>
                              <li>
                                <a href="#">سياسة الخصوصية</a>
                              </li>
                            </ul>
                          </div>

                          <div className="col-lg-2 col-md-3 footer-links">
                            <h4>خدماتنا</h4>
                            <ul>
                              <li>
                                <a href="#">تصميم المواقع</a>
                              </li>
                              <li>
                                <a href="#">تطوير المواقع</a>
                              </li>
                              <li>
                                <a href="#">إدارة المنتجات</a>
                              </li>
                              <li>
                                <a href="#">التسويق</a>
                              </li>
                              <li>
                                <a href="#">تصميم الجرافيك</a>
                              </li>
                            </ul>
                          </div>

                          <div className="col-lg-2 col-md-3 footer-links">
                            <h4>عياداتنا</h4>
                            <ul>
                              <li>
                                <a href="#">عيادة الأسنان</a>
                              </li>
                              <li>
                                <a href="#">عيادة الأطفال</a>
                              </li>
                              <li>
                                <a href="#">عيادة الجلدية</a>
                              </li>
                              <li>
                                <a href="#">عيادة العيون</a>
                              </li>
                              <li>
                                <a href="#">عيادة القلب</a>
                              </li>
                            </ul>
                          </div>

                          <div className="col-lg-2 col-md-3 footer-links">
                            <h4>تواصل معنا</h4>
                            <ul>
                              <li>
                                <a href="#">الدعم الفني</a>
                              </li>
                              <li>
                                <a href="#">الأسئلة الشائعة</a>
                              </li>
                              <li>
                                <a href="#">الشكاوى</a>
                              </li>
                              <li>
                                <a href="#">الاقتراحات</a>
                              </li>
                              <li>
                                <a href="#">اتصل بنا</a>
                              </li>
                            </ul>
                          </div>

                        </div>
                      </div>

                      <div className="container copyright text-center mt-4">
                        <p>
                          © <span>حقوق النشر</span>{' '}
                          <strong className="px-1 sitename">ميديسينا</strong>{' '}
                          <span>جميع الحقوق محفوظة</span>
                        </p>
                        <div className="credits"></div>
                      </div>
              </footer>
      </div>
    );
  }
}

export default Footer;
