import React, { Component, Fragment } from 'react'
import { Container, Form, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class PatientRegisterStep1 extends Component {
    render() {
        return (
                <div>
                                <br /><br />
                                <div className='' >
                                        <div className='jumbotron col-lg-4 offset-lg-4 form-box'>
                                                <h3 className='text-center form-title'>تسجيل المريض</h3>
                                                
                                                <form dir='rtl'>
                                                        <div className="form-group">
                                                                <label htmlFor="fullName">الاسم الكامل</label>
                                                                <input type="text" className="form-control" placeholder="أدخل الاسم الكامل" name='fullName' required />
                                                        </div>
                                                        <div className="form-group">
                                                                <label htmlFor="email">البريد الإلكتروني</label>
                                                                <input type="email" className="form-control" name='email' placeholder="أدخل البريد الإلكتروني" required />
                                                                <small id="emailHelp" className="form-text text-muted"></small>
                                                        </div>
                                                        <div className="form-group">
                                                                <label htmlFor="mobileNumber">رقم الهاتف</label>
                                                                <input type="text" className="form-control" placeholder="أدخل رقم الهاتف" name='mobileNumber' required />
                                                        </div>
                                                        <div className="form-group">
                                                                <label htmlFor="birthDate">تاريخ الميلاد</label>
                                                                <input type="date" className="form-control" name='birthDate' required />
                                                        </div>
                                                        <div className="form-group">
                                                                <label htmlFor="address">العنوان</label>
                                                                <input type="text" className="form-control" placeholder="أدخل العنوان" name='address' required />
                                                        </div>
                                                        <div className="form-group">
                                                                <label htmlFor="password">كلمة المرور</label>
                                                                <input type="password" className="form-control" name='password' placeholder="أدخل كلمة المرور" required />
                                                        </div>
                                                        <div className="form-group">
                                                                <label htmlFor="passwordConfirmation">تأكيد كلمة المرور</label>
                                                                <input type="password" className="form-control" name='passwordConfirmation' placeholder="أعد إدخال كلمة المرور" required />
                                                        </div>
                                                        
                                                        <Link to='/register/patient/page2'  >التالي</Link>
                                                        <br />
                                                        لديك حساب؟ <Link to='/register/patient/page2'>تسجيل الدخول</Link>
                                                </form>
                                        </div>
                                </div>
            </div>
        )
    }
}

export default PatientRegisterStep1
