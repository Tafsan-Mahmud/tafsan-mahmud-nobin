import React from 'react';
import './Blog.css';
import Footer from '../Footer/Footer';
import pic1 from './1_HSisLuifMO6KbLfPOKtLow.jpeg';
import pic2 from './Fundamentals-of-JavaScript-Part-2.png';
import pic3 from './rtaImage.png';
import Navbar from '../Navbar/Navbar';

const Blog = () => {
    return (
        <div className="blog-bg">
            <Navbar></Navbar>
            <h1 className="text-center">My Blogs</h1>
            <div className="container pt-4 pb-4">
                <div class="row row-cols-1 row-cols-md-3 g-5  pt-4 pb-4">
                    <div class="col">
                        <div class="card card-blog h-100">
                            <div className="img-card">
                                <img src={pic2} class="card-img-top" alt="" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Learn About Javascript</h5>
                                <p class="card-text"><strong>JavaScript</strong> ,[8] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[9] JavaScript is high-level, often just-in-time compiled, and multi-paradigm.</p>
                            </div>
                            <div class="card-footer">
                                <a href="https://tafsanmahmudnobin090.medium.com/learn-about-javascript-2e17246f9c49" target="_blank" rel="noreferrer"><button type="button" class="btn btn-outline-danger">Learn More</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card card-blog h-100">
                            <div className="img-card">
                                <img src={pic1} class="card-img-top" alt="" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">What is React ?</h5>
                                <p class="card-text"><strong>React</strong> is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.</p>
                            </div>
                            <div class="card-footer">
                                <a href="https://tafsanmahmudnobin090.medium.com/what-is-react-4c570560083b" target="_blank" rel="noreferrer"><button type="button" class="btn btn-outline-danger">Learn More</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card card-blog h-100">
                            <div className="img-card">
                                <img src={pic3} class="card-img-top" alt="" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">About Google Analytics</h5>
                                <p class="card-text"><strong>Google</strong> Analytics is a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand.</p>
                            </div>
                            <div class="card-footer">
                                <a href="https://tafsanmahmudnobin090.medium.com/about-google-analytics-1cf27c0dca4d" target="_blank" rel="noreferrer"><button type="button" class="btn btn-outline-danger bg">Learn More</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;