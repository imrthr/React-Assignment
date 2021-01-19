import React from 'react';
import './Home.css';
import welcomeHome from '../Images/WelcomeHome.jpg';
import management from '../Images/project-management.png';
import businessAnalysis from '../Images/Business-Analysis.jpg';
import networkInfra from '../Images/Network-Infrastructure.jpg';
import SoftwareDev from '../Images/Software-Developement.jpg';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <div className="main_banner_section">
                <img src={welcomeHome} className="main_banner_image"  />
                <div className="banner_content_section">
                    <h1>WELCOME TO <span>IT REFERRALS</span>
                        <br />
                    </h1>
                    <h2>What would you like to do ?</h2><br />
                    <div className="button_section">
                        <Link className="nav-link" to='/referjob'>
                            <Button variant="primary" type="button" className="btn btn-primary first-color btn-lg refer-click refer_jobs_button">
                                Refer Jobs
                    </Button>
                        </Link>
                        <Link className="nav-link" to='/'  onClick={e => {
                         let refer_candidate = document.getElementById("refer_candidate");
                         e.preventDefault();
                         refer_candidate && refer_candidate.scrollIntoView({ behavior: "smooth", block: "start" });
                         window.history.pushState("refer_candidate", "refer_candidate","/#refer_candidate");
        }}>
                            <Button variant="primary" type="button" className="btn btn-primary first-color btn-lg refer-click refer_candidate_btn">
                                Refer Candidate
                    </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="gird_row" id="refer_candidate">
                <div className="gird_column">
                    <img src={management} />
                    <h2>PROJECT MANAGEMENT</h2>
                </div>
                <div className="gird_column">
                    <img src={businessAnalysis} />
                    <h2>BUSINESS ANALYSIS</h2>
                </div>
                <div className="gird_column">
                    <img src={networkInfra} />
                    <h2>NETWORKS AND INFRASTRUCTURE</h2>
                </div>
                <div className="gird_column">
                    <img src={SoftwareDev} />
                    <h2>SOFTWARE DEVELOPMENT</h2>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Home;