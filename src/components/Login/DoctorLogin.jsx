import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class DoctorLogin extends Component {
  render() {
    return (
        <div data-aos="fade-up" data-aos-delay="200" className='auth-background'>
        <br /><br />
        <div className='' >
                <div className='jumbotron col-lg-4 offset-lg-4 form-box'>
                        <h3 className='text-center form-title'>تسجيل الطبيب</h3>
                        
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
                                 <div> نسيت كلمة المرور؟ <Link to='/forget/password' className='links-buttons'>نسيت</Link></div>  
                                <div className='pb-3'>  مستخدم جديد؟ <Link to='/register/doctor' className='links-buttons'>انشاء حساب</Link></div>
                        </form>
                </div>
        </div>
</div>
    )
  }
}

export default DoctorLogin
