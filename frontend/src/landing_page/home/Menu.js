import React from 'react';

function Menu() {
    return (
        <div className='container p-5 text-muted text-center mt-5 mb-5'>
            <div className='row'>
                <div className='col-3'>
                    <i class="fa fa-recycle" aria-hidden="true" style={{ fontSize: "3rem" }}></i>
                    <h1 className='fs-5'>Solid Waste Management</h1>
                </div>
                <div className='col-3'>
                    <i class="fa fa-file" aria-hidden="true" style={{ fontSize: "3rem" }}></i>
                    <h1 className='fs-5'>Reference Document</h1>
                </div>
                <div className='col-3'>
                    <i class="fa fa-search" aria-hidden="true" style={{ fontSize: "3rem" }}></i>
                    <h1 className='fs-5'>Application status</h1>
                </div>
                <div className='col-3'>
                    <i class="fa fa-recycle" aria-hidden="true" style={{ fontSize: "3rem" }}></i>
                    <h1 className='fs-5'>Solid Waste Management</h1>
                </div>
            </div>
            <div className='row mt-5' style={{ paddingTop: "3rem" }}>
                <div className='col-3'>
                    <i class="fa fa-tint" aria-hidden="true" style={{ fontSize: "3rem" }}></i>
                    <h1 className='fs-5'>Water grievance</h1>
                </div>
                <div className='col-3'>
                    <i class="fa fa-archive" aria-hidden="true" style={{ fontSize: "3rem" }}></i>
                    <h1 className='fs-5'>Waste Dumping</h1>
                </div>
                <div className='col-3'>
                    <i class="fa fa-users" aria-hidden="true" style={{ fontSize: "3rem" }}></i>
                    <h1 className='fs-5'>Community</h1>
                </div>
                <div className='col-3'>
                    <i class="fa fa-question-circle-o" aria-hidden="true" style={{ fontSize: "3rem" }}></i>
                    <h1 className='fs-5'>RTI Application</h1>
                </div>
            </div>
        </div>
    );
}

export default Menu;