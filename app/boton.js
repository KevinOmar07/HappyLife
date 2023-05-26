import React from 'react';
import SideBar from "./SideBar";
class Boton extends React.Component{

    render() {
        return (
            <div className="bg-info">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid row">
                        <a className="navbar-brand col-6" href="#ll">Navbar</a>
                        <div className="col-6">
                            <SideBar/>
                        </div>
                    </div>
                </nav>


                <div className="row">
                    <div className="col-2">
                        <p>
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Button with data-bs-target
                            </button>
                        </p>
                        <div className="collapse" id="collapseExample">
                            AAAAA
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Boton;