import React from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';
class NavBarDashboard extends React.Component{

    constructor() {
        super();
        this.state={
            nombreUser: ""
        }
    }
    componentDidMount() {
        let idUsuario = window.localStorage.getItem("user");
        console.log(idUsuario);
        axios.get('http://localhost:3000/user/getUserId',{
            params:{
                idUsuario: idUsuario
            }
        }).then(data => {
            this.setState({
                nombreUser: data.data.body[0].nombre
            })
        });
    }

    cerrarSession(){
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        this.props.history.push("/SignIn");
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div>
                            <a className="navbar-brand" href="#"><img src="../imgs/icon.png" alt="" width="40px" height="40px"/>HappyLife</a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav nav-customer">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/dashboard">Rincon de la felicidad</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/BaulRecuerdos">Baul de los Recuerdos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/diario">Diario Emocional</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/CYT">Consejos y Tips</a>
                                </li>
                            </ul>

                        </div>
                        <div className="d-flex justify-content-end align-items-center divButton">
                            <h5>@{this.state.nombreUser}</h5>
                            <button onClick={this.cerrarSession.bind(this)} className="btn btn-outline-success ml-3">salir</button>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
export default withRouter(NavBarDashboard);