import React from 'react';
import {Navbar} from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar fixed="top" bg="light" className="p-t-0 p-b-0">
            <Navbar.Brand href="/">
            <span className="center">
                Aakanshu
                {/* <img alt="Cgl" src={process.env.PUBLIC_URL + '/favicon.ico'} width="90" height="50" className="" />{' '} */}
            </span>
            <span className="center p-tile">
            </span>
            </Navbar.Brand>
            <div className="row w-100 m-0"> 
                <div className="col-12">
                    <div className="offset-6 col-6">
                        <div className="align-right">
                            <div  >
                                Some text
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}