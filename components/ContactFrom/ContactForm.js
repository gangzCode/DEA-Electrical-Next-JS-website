import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import axios from "axios";


const ContactForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            let tempData = forms;
            tempData.type = "CONTACT"
            axios.post('../api/sendEmail', tempData).then(response => {
                //console.error(response)
                alert("Form successfully submitted. We will get in touch with you shortly!");
                // todo show success
                validator.hideMessages();
                setForms({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    message: ''
                })
            }).catch(error => {
                console.error(error)
                alert("Form submission failed. Please try again later.");
                // todo show error
            });
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Name" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Email" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your phone" />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.subject}
                            type="text"
                            name="subject">
                            <option>Residential</option>
                            <option>Commercial</option>
                            <option>Industrial</option>
                            <option>Institutional</option>
                        </select>
                        {validator.message('subject', forms.subject, 'required')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        type="text"
                        name="message"
                        placeholder="Message">
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn"><i className="fa fa-angle-double-right"
                    aria-hidden="true"></i> Submit Now</button>
            </div>
        </form>
    )
}

export default ContactForm;
