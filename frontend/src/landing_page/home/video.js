import React from 'react';
function Video() {
    return (
        <div className='conatiner p-5' style={{ backgroundColor: "#e6e6e6" }}>
            <div className='row'>
                <div className='col-5'>
                    <h1 style={{ backgroundColor: "#4169E1", color: "white", textAlign: "center", borderBottom: "5px solid orange" }} className='fs-3'>Recent Announcements</h1>
                    <p className='mt-3 p-2 fs-5'><i class="fa fa-chevron-right" aria-hidden="true"></i> Join the Clean City Initiative! Keep your neighborhood waste-free and report garbage dumping through complaint portal<img src='media/images/new-star.gif' /></p>
                    <p className='mt-3 p-2 fs-5'><i class="fa fa-chevron-right" aria-hidden="true"></i> Streetlight malfunction? Register your complaint online and get live status updates!<img src='media/images/new-star.gif' /></p>
                    <p className='mt-3 p-2 fs-5'><i class="fa fa-chevron-right" aria-hidden="true"></i> Water supply maintenance on 30th October — supply will remain affected in Prayagraj Zone 2 from 9 AM to 4 PM<img src='media/images/new-star.gif' /></p>
                </div>
                <div className='col-7' style={{paddingLeft:"2rem"}}>
                    <video
                        src="media/videos/pray.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            borderRadius: "2px"
                        }}
                    ></video>

                </div>
            </div>
        </div>
    );
}

export default Video;