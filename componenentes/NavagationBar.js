import React from 'react';
import { withRouter } from 'react-router-dom';
import Logo from "./Logo";
class NavagationBar extends React.Component{

    openInicioSession(){
        this.props.history.push("/SignIn");
    }
    openRegistrarse(){
        this.props.history.push("/SignUp")
    }

    render() {
        return (
            <>
                <header className="header">
                   <Logo/>
                    <nav>
                        <ul className="nav-items">
                            <li><a href="/">Home</a></li>
                            <li><a href="/aboutUs">Acerca de Nosotros</a></li>
                        </ul>
                    </nav>
                    <div className="contenedor-botones">
                        <button className="boton-Iniciar-session" onClick={this.openInicioSession.bind(this)}>Iniciar Sesion</button>
                        <button className="boton-Iniciar-session" onClick={this.openRegistrarse.bind(this)}>Registrarse</button>
                    </div>
                </header>
            </>
        )
    }
}

export default withRouter(NavagationBar);