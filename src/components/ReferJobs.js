import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import './AssignForm.css'

const ReferJobs=()=>{


    return(
        <>
        <Card>
  <Card.Body>
        <h1> Refer a Job</h1>
    <Form >
          <Form.Group  controlId="CompanyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Company Name"  required />
                    </Form.Group>

                    <Form.Group controlId="ContactPerson">
                        <Form.Label>Contact Person at Company</Form.Label>
                        <Form.Control type="text" placeholder="Enter Contact Person at Company" required />
                    </Form.Group>

                    <Form.Group controlId="JobTitle">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Job Title" required/>
                    </Form.Group>

                    <Form.Group controlId="Category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Enter Job Title" required />
                    </Form.Group>

                    <Form.Group controlId="Duration">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control type="text" placeholder="Enter Duration" required />
                    </Form.Group>

                    <Form.Group controlId="JobDescription">
                        <Form.Label>Job Description</Form.Label>
                        <textarea rows='5'  placeholder="Enter Job Description" required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.File id="FormControlFile" label="Job Link" required/>
                        <Button variant="primary" type="submit">
                        Upload
                    </Button> 
                    </Form.Group>

                    <h1>Create a Frofile</h1>

                    <Form.Group controlId="UserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" required/>
                    </Form.Group>

                    <Form.Group controlId="EmailId">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" required/>
                    </Form.Group>

                    <Form.Group controlId="Password1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Password" required/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>                  
            </Form>
            </Card.Body>
</Card>
            <div>
                <Footer/>
            </div>
        </>
    )
}
export default ReferJobs;