import React from 'react';
import '../../node_modules/animate.css/animate.min.css';

function Home(props) {    
    return (
        <>
            <div className="container-fluid mt-contain">
                <div className="forms-width mt-3 p-3 bg-green text-dark border-radius shadow-lg animate__animated animate__zoomIn">
                    <div className="text-center">
                        <h1 className="text-white animate__animated animate__zoomIn">Home Page</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;