import React from 'react';

function Notfound() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row text-center'>
                <h1 className='fs-4'><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 404 Page Not Found</h1>
                <p>The page your are looking for is not available</p>
            </div>
        </div>
     );
}

export default Notfound;