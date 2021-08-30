import React from 'react';
import '../../node_modules/animate.css/animate.min.css';
import SideBar from './SideBar';

function HomeUser(props) {
    return (
        <>
            <div className="container-fluid mt-contain">
                <div className="row h-100">
                    <div className="col-md-3 col-lg-2 px-0">
                        <SideBar />
                    </div>
                    <div className="col-md-9 col-lg-10 scrolled">
                        <div className="forms-width m-3 p-3 bg-green text-dark border-radius shadow-lg animate__animated animate__zoomIn">
                            <div className="text-center">
                                <h1 className="text-white animate__animated animate__zoomIn">Home Page</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeUser;