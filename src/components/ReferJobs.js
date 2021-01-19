import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import './ReferJobs.css';
import staticimg from '../Images/static-image.jpg';

const ReferJobs = () => {


    return (
        <>
        <div className="header_section">
            <div className="display_flex"><img src={staticimg} /><p>IT Referrals</p></div>
            <div className="anchor_section">
                <a>Login</a>
                <a>AboutUs</a>
            </div>
        </div>
        <div>
        <div className="referral_header_banner">
                    <img src={staticimg} />
                    <h2><span className="refer_a">Refer a</span><br/>JOB</h2>
                </div>
        </div>
            <Card className="form_card">
                <Card.Body>
                    <h4> Refer a Job</h4>
                    <Form >
                        <Form.Group controlId="CompanyName">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Company Name" required />
                        </Form.Group>

                        <Form.Group controlId="ContactPerson">
                            <Form.Label>Contact Person at Company</Form.Label>
                            <Form.Control type="text" placeholder="Enter Contact Person at Company" required />
                        </Form.Group>

                        <Form.Group controlId="JobTitle">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Job Title" required />
                        </Form.Group>

                        <Form.Group controlId="Category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter Job Title" required />
                        </Form.Group>

                        <Form.Group controlId="Duration">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control type="text" placeholder="Enter Duration" required />
                        </Form.Group>

                        <Form.Label className="textarea_label">Job Description</Form.Label>
                        <textarea rows='5' className="textArea_field" placeholder="Enter Job Description or attach a Job Description File below" required />

                        <Form.Group>
                            <Form.Label>Job Link<span className="optional_color"> * (optional)</span></Form.Label>
                            <span>
                                <Form.File className="file_input" id="FormControlFile" required />
                                <Button variant="primary" type="submit" className="upload_btn">
                                    Upload
                    </Button>
                            </span>
                        </Form.Group>

                        <h3 className="h3_title">Create a Frofile</h3>

                        <Form.Group controlId="UserName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name" required />
                        </Form.Group>

                        <Form.Group controlId="EmailId">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Email" required />
                        </Form.Group>

                        <Form.Group controlId="Password1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Your Password" required />
                        </Form.Group>
                        <div align="center">
                            <Button variant="primary" type="submit" className="submit_btn">
                                Submit
                    </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <div>
                <Footer />
            </div>
        </>
    )
}
export default ReferJobs;