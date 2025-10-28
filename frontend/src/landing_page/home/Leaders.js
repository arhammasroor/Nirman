import React from 'react';

function Leaders() {
    return (
        <div className='conatainer'>
            <div className='row'>
                <div style={{ display: "flex", backgroundColor: "  #FFFFF0" }} className=' col' >
                    <img src='media/images/PMmodi.jpg' style={{ width: "100px", height: "110px" }} />
                    <div className='mt-4' style={{ justifyContent: "center" ,marginLeft:"2rem" }}>
                        <h1 className='fs-5 text-left' style={{}}>Shri Narendra Modi</h1>
                        <p>Prime Minister of India</p>
                    </div>

                </div>
                <div style={{ display: "flex", backgroundColor: "#FFFFF0" }} className=' col' >
                    <img src='media/images/images.webp' style={{ width: "100px", height: "110px" }} />
                    <div className='mt-4' style={{ justifyContent: "center" ,marginLeft:"2rem"}}>
                        <h1 className='fs-5 text-left' style={{}}>APJ Abdul Kalam</h1>
                        <p>Former President of India
                        </p>
                    </div>

                </div>
                <div style={{ display: "flex", backgroundColor: "#FFFFF0"}} className=' col' >
                    <img src='media/images/president.jpg' style={{ width: "100px", height: "110px" }} />
                    <div className='mt-4' style={{ justifyContent: "center" ,marginLeft:"2rem" }}>
                        <h1 className='fs-5 text-Left' style={{}}>Droupadi Murmu
                        </h1>
                        <p>President of India</p>
                    </div>

                </div>
                <div style={{ display: "flex", backgroundColor: "#FFFFF0" }} className=' col' >
                    <img src='media/images/indra.webp' style={{ width: "100px", height: "110px" }} />
                    <div className='mt-4' style={{ justifyContent: "center" ,marginLeft:"2rem"}}>
                        <h1 className='fs-5 text-left' style={{}}>Indra Gandhi</h1>
                        <p>Former Prime Minister of India
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Leaders;