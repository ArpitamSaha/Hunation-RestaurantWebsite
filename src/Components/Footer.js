import React from 'react'
import logo from './images/Hunation(Dark).png'

function Footer() {
  return (
    <>
        <footer className="footer pb-5" id="footer" style={{backgroundColor:"#06283D"}}>
        <a class="navbar d-block text-center my-5 pt-4 pb-0" href="/"><img src={logo} style={{width:"25rem",height:"8rem"}} alt="Logo"/></a>
            <div className="container">
                <div className="row text-light">
                    <div className="col-3">
                        <h5 className="page-footer-title text-light fw-normaler" style={{fontFamily: "Tangerine, cursive"}}>Opening hours</h5>
                            <p className="mb-0 text-light fw-normal "><small>Sunday is a holiday</small></p>
                            <p className="mb-0 text-light fw-normal "><small>Opens everyday at 8am</small></p>
                            <p className="mb-0 text-light fw-normal "><small>Breakfast : 8am - 11am</small></p>
                            <p className="mb-0 text-light fw-normal "><small>Lunch : 12pm - 3pm</small></p>
                            <p className="mb-0 text-light fw-normal "><small>Dinner : 7pm - 12am</small></p>
                    </div>
                    <div className="col-md-3 h-100" id="location">
                        <h5 className="page-footer-title mt-3 mt-md-0 text-light fw-normaler" style={{fontFamily: "Tangerine, cursive"}}>Location</h5>
                        <p className="mb-0 text-light fw-normal "><small>Hunation</small></p>
                        <p className="mb-0 text-light fw-normal "><small>Sector-19</small></p>
                        <p className="mb-0 text-light fw-normal "><small>Calafornia, USA</small></p>
                        <p className="mb-0 text-light fw-normal "><small>Phone : (123) 6969-6969</small></p>
                        <p className="mb-0 text-light fw-normal "><small>Email-Id : info@gandc.com</small></p> 
                    </div>

                    <div className="col-md-3 h-100 border-left-white text-light">
                        <h5 className="page-footer-title mt-3 mt-md-0" style={{fontFamily: "Tangerine, cursive"}}>Follow Us</h5>
                        <div className="mb-4 ">
                            <a className="footer-social" href="https://www.instagram.com/im.arpitam_saha/" aria-label="instagram" target="_blank" rel='noreferrer'><i class="fab fa-instagram me-2"></i></a>
                            <a className="footer-social" href="https://twitter.com/tripathy_binay" aria-label="twitter" target="_blank" rel='noreferrer'><i class="fab fa-twitter me-2"></i></a>
                            <a className="footer-social" href="https://www.snapchat.com/add/binay_tripathy" aria-label="snapchat" target="_blank" rel='noreferrer'><i class="fab fa-snapchat me-2"></i></a>
                        </div>
                    </div>
                    <div className="col-md-3 h-100 border-left-custom">
                        <h5 className="page-footer-title mt-3 mt-md-0 text-light fw-normaler" style={{fontFamily: "Tangerine, cursive"}}>NewsLetter</h5>
                        <p className="fw-normal text-light"> 
                            <small> Complete the form to receive information on the latest events,
                            news and special offers at Hunation.</small>
                        </p>
                        <form id="newsletter-form">
                            <label className="sr-only" for="formEmail">Email</label>
                            <input type="email" className="form-control form-control-sm rounded " id="formEmail" placeholder="name@example.com"/>
                            <button type="submit" className="btn btn-light btn-sm btn-block mt-2 text-dark">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
        <footer className="footer bg-dark" >
            <div className="page-footer-copyright container-fluid text-center mt-0 p-3 text-light" id="rights">
            <small> © 2022 Hunation - The Hungry Nation All rights reserved.<br/>
                    Design &amp; Developed by <a href="https://github.com/ArpitamSaha">Arpitam Saha</a>.<br/>
                    Muchas Gracias.</small>
            </div>
        </footer>
        
    </>
    )
}

export default Footer