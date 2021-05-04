import React from 'react';
import emailjs from 'emailjs-com';
import './Contacts.css';
import location from './location.png';
import email from './emaill.png';
import call from './call.png';
import logo1 from './1.jpg';
import logo2 from './2.png';
import logo3 from './3.png';
import logo4 from './4.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';



const Contacts = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_dzyrk8k', e.target, 'user_nfQgY0BQLcbxZcgMTKvh9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }
    return (
        <div>
            <section className="contact">
                <Navbar></Navbar>
                <div className="container">
                    <h1 className="text-center pt-3">Contact With Me</h1>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 pt-3">
                            <h4>Send a Message</h4>
                            <div className="formBox">
                                <form onSubmit={sendEmail}>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                                        <input name="name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="name" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Subject</label>
                                        <input name="subject" type="text" class="form-control" id="exampleFormControlInput1" placeholder="subject" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" name="description" rows="3" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-danger">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Contacts;