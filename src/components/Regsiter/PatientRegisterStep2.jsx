import React, { Component } from 'react';

export class PatientRegisterStep2 extends Component {
    render() {
        return (
            <div >
                <br /><br />
                <div>
                    <div className="jumbotron col-lg-4 offset-lg-4 form-box">
                        <h3 className="text-center form-title">تسجيل المريض</h3>

                        <form  dir="rtl">
                            <div className="form-group">
                                <label htmlFor="bloodType">فصيلة الدم</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="أدخل فصيلة الدم"
                                    name="bloodType"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="birthDate">تاريخ الميلاد</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="birthDate"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="allergies">هل لديك حساسية؟</label>
                                <textarea
                                    className="form-control"
                                    name="allergies"
                                    placeholder="أدخل أي حساسية"
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="chronicDiseases">هل لديك أمراض مزمنة؟</label>
                                <textarea
                                    className="form-control"
                                    name="chronicDiseases"
                                    placeholder="أدخل أي أمراض مزمنة"
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="previousSurgeries">هل أجريت أي عمليات جراحية سابقة؟</label>
                                <textarea
                                    className="form-control"
                                    name="previousSurgeries"
                                    placeholder="أدخل أي عمليات جراحية سابقة"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">
                                إرسال
                            </button>
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PatientRegisterStep2;
