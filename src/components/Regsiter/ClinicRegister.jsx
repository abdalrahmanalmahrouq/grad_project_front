import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ClinicRegister extends Component {
  render() {
    return (
        <div data-aos="fade-up" data-aos-delay="200" className='auth-background'>
        <br /><br />
        <div className='' >
                <div className='jumbotron col-lg-4 offset-lg-4 form-box'>
                        <h3 className='text-center form-title'>إنشاء حساب عيادة</h3>
                        
                        <form dir='rtl'>
                                <div className="form-group">
                                        
                                        <label htmlFor="fullName">اسم العيادة</label>
                                        <input type="text" className="form-control" placeholder="أدخل اسم العيادة" name='fullName' required />
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
                                
                                <button className='btn btn-primary'>  <Link to='' className='links-buttons'  >تسجيل</Link> </button>
                                <br />
                             <div className='pb-3'>   لديك حساب؟ <Link to='/login/clinic' className='links-buttons'>تسجيل الدخول</Link></div>
                        </form>
                </div>
        </div>
</div>
    )
  }
}

export default ClinicRegister
