import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class PatientLogin extends Component {
  render() {
    return (
        <div data-aos="fade-up" data-aos-delay="200" className='auth-background'>
        <br /><br />
        <div className='' >
                <div className='jumbotron col-lg-4 offset-lg-4 form-box'>
                        <h3 className='text-center form-title'>تسجيل المريض</h3>
                        
                        <form dir='rtl' >
                              
                                <div className="form-group">
                                        <label htmlFor="email">البريد الإلكتروني</label>
                                        <input type="email" className="form-control" name='email' placeholder="أدخل البريد الإلكتروني" required />
                                        <small id="emailHelp" className="form-text text-muted"></small>
                                </div>
                              
                               
                             
                                <div className="form-group">
                                        <label htmlFor="password">كلمة المرور</label>
                                        <input type="password" className="form-control" name='password' placeholder="أدخل كلمة المرور" required />
                                </div>
                               
                                
                                <button className='btn btn-primary'>  <Link to='' className='links-buttons'  >تسجيل</Link> </button>
                                <br />
                                مستخدم جديد؟ <Link to='/register/patient' className='links-buttons'>انشاء حساب</Link>
                        </form>
                </div>
        </div>
</div>
    )
  }
}

export default PatientLogin
