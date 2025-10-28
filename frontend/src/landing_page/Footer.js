import React, { useEffect } from 'react';
import L from "leaflet";
import "leaflet.heat";

function Footer() {
    useEffect(() => {
        const mapContainer = document.getElementById("map");
        if (!mapContainer) return;
        if (!mapContainer._leaflet_id) {
            const map = L.map("map").setView([25.4920, 81.8639], 15);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "&copy; OpenStreetMap contributors",
            }).addTo(map);

            L.marker([25.4920, 81.8639])
                .addTo(map)
                .bindPopup("<b>MNNIT Prayagraj</b><br>Motilal Nehru National Institute of Technology")
                .openPopup();
        }
    }, []);
    return (
        <footer style={{ backgroundColor: "#4169E1", color: "white" }} className='border-top text-white'>
            <div className='container fixed'>
                <div className='row mt-5'>

                    <div className='col-4 border-end' style={{ color: "white" }}>
                        <h1 className='fs-2'>Quick Links</h1>
                        <div className='row'>
                            <div className='col' style={{ color: "white" }}>
                                <a href='' className='text-white text-decoration-none d-block mb-2'><i class="fa fa-caret-right" aria-hidden="true"></i> Site Map</a>
                                <a href='' className='text-white text-decoration-none d-block mb-2'><i class="fa fa-caret-right" aria-hidden="true"></i>Official link</a>
                                <a href='' className='text-white text-decoration-none d-block mb-2'><i class="fa fa-caret-right" aria-hidden="true"></i>Terms and Conditions</a>
                                <a href='' className='text-white text-decoration-none d-block mb-2'><i class="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a>
                                <a href='' className='text-white text-decoration-none d-block mb-2'><i class="fa fa-caret-right" aria-hidden="true"></i>Feedback</a>
                                <a href='' className='text-white text-decoration-none d-block mb-2'><i class="fa fa-caret-right" aria-hidden="true"></i>Download</a>
                                <a href='' className='text-white text-decoration-none d-block mb-2'><i class="fa fa-caret-right" aria-hidden="true"></i>Submit your complaint</a>
                            </div>
                            <div className='col'>
                                <a href='' className='text-white text-decoration-none d-block mb-2'><i class="fa fa-caret-right" aria-hidden="true"></i>Photo Gallery</a>
                                <a href='' className='text-white text-decoration-none d-block mb-2'><i class="fa fa-caret-right" aria-hidden="true"></i>Other Section</a>
                                <a href='' className='text-white text-decoration-none d-block mb-2'><i class="fa fa-caret-right" aria-hidden="true"></i>Website Policy</a>
                                <a href='' className='text-white text-decoration-none d-block mb-2'><i class="fa fa-caret-right" aria-hidden="true"></i>Help</a>
                                <a href='' className='text-white text-decoration-none d-block mb-2'><i class="fa fa-caret-right" aria-hidden="true"></i>Video Gallery</a>
                                <a href='' className='text-white text-decoration-none d-block mb-2'><i class="fa fa-caret-right" aria-hidden="true"></i>GIGW-Certificate</a>
                                <a href='' className='text-white text-decoration-none d-block mb-2'><i class="fa fa-caret-right" aria-hidden="true"></i>Track your complaint</a>

                            </div>

                        </div>
                    </div>

                    <div className="col-4 border-end">
                        <h1 className='fs-2'>Address</h1>
                        <p> Dr. S.P.M. Civic Centre, Minto Rd, SKD Basti, Press Enclave, Ajmeri Gate, New Delhi, Delhi, 110002</p>
                        <p><i class="fa fa-caret-right" aria-hidden="true"></i> Mobile App : Unified Mobile App, MCD311 App</p>
                        <p><i class="fa fa-caret-right" aria-hidden="true"></i>Email Id : mcd-ithelpdesk[at]mcd[dot]nic[dot]in</p>
                        <p><i class="fa fa-caret-right" aria-hidden="true"></i>Helpline Number : 155305</p>
                        <p>FOLLOW US:<i class="fa fa-facebook-official fs-4 mx-2" aria-hidden="true"></i><i class="fa fa-instagram fs-4" aria-hidden="true"></i><i class="fa fa-envelope fs-4 mx-2" aria-hidden="true"></i><i class="fa fa-linkedin-square fs-4" aria-hidden="true"></i></p>

                    </div>

                    <div className="col-4">
                        <h1 className='fs-2'>Map</h1>
                        <div id="map" style={{ height: "30vh", width: "110%" }}></div>

                    </div>

                </div>

            </div>
            <div style={{ display: "flex", gap: "1rem" ,backgroundColor:"	#F5F5F5" ,justifyContent:"center"}} className='p-3'>
                <div style={{ width: "200px", backgroundColor: "white" ,display: "flex", justifyContent:"center", height:"4rem"}}>
                    <img src='media/images/mygov.svg' style={{ width: "100px" }} />
                </div>

                <div style={{ width: "200px", backgroundColor: "white" ,display: "flex", justifyContent:"center",height:"4rem" }}>
                    <img src='media/images/G20.svg' style={{ width: "100px" }} />
                </div>

                <div style={{ width: "200px", backgroundColor: "white",display: "flex", justifyContent:"center",height:"4rem" }}>
                    <img src='media/images/PM-india.svg' style={{ width: "100px" }} />
                </div>

                <div style={{ width: "200px", backgroundColor: "white", display: "flex", justifyContent:"center",height:"4rem" }}>
                    <img src='media/images/Digital-india.svg' style={{ width: "100px" }} />
                </div>

                <div style={{ width: "200px", backgroundColor: "white",display: "flex", justifyContent:"center",height:"4rem" }}>
                    <img src='media/images/national-portal.svg' style={{ width: "100px" }} />
                </div>
                <div style={{ width: "200px", backgroundColor: "white" ,display: "flex", justifyContent:"center",height:"4rem"}}>
                    <img src='media/images/@gov.svg' style={{ width: "150px" }} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;