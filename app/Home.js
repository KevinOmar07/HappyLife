import React from "react";
import { withRouter } from 'react-router-dom';
import NavagationBar from "../componenentes/NavagationBar";
import Footer from "../componenentes/Footer";
class Home extends React.Component{


    render() {
        return (
            <>
                <NavagationBar/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center letra-presentacion p-4 animate__animated animate__fadeIn">
                        <h1>HappyLife la plataforma virtual <br/>Que Fomenta<br/> la Felicidad y Alegria</h1></div>
                    <div className="col-12 d-flex justify-content-center descripcion-text">
                        <p>Con la ayuda de happy junto con terapia
                            psicoanalitica<br/>    Contribuye al tratamiento
                            de la ansiedad<br/>
                        </p>
                    </div>
                    <div className="col-12 d-flex justify-content-center boton-registrarse">
                        <l><a className="nav-link" href="/SignUp"><button>Registrate</button></a></l>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-baseline pt-5 pl-5">
                        <div className="text-center text-danger font-weight-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                            <p>Amor</p>
                        </div>
                        <div className="separador">

                        </div>
                        <div className="text-center text-primary font-weight-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-emoji-laughing-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5c-.218 0-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5zm5.331 3a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zm-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5c-.218 0-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.235z"/>
                            </svg>
                            <p>Felicidad</p>
                        </div>
                        <div className="separador">

                        </div>
                        <div className="text-center text-success font-weight-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-stars" viewBox="0 0 16 16">
                                <path
                                    d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
                            </svg>
                            <p>Divercion</p>
                        </div>

                    </div>
                </div>
                <div className="pl-5 pt-2 d-flex align-items-center justify-content-center pr-5">
                    <div className="animacion-img">
                        <img className="animate__animated animate__backInLeft" src="https://cdn.dribbble.com/users/2155177/screenshots/14712406/media/6bcacf899d6346d8420cd18ad5be79dc.png?compress=1&resize=800x600" alt="fondo" width="550px" height="400px"/>
                    </div>
                    <div className="letra-presentacion2">
                        <h3>
                            Las personas nacidas entre<br/> los años 2000 a 2005
                        </h3>
                        <p>
                            somos aquellas a las cuales la sociedad las llama,<br/>
                            la generación Z, la cual se le autodefine como aquella<br/>
                            generación  más inútilmente preparada, pues aunque es <br/>
                            cierto que somos expertos en el uso de la tecnología y <br/>
                            otros ámbitos respecto a la educación, somos incapaces de<br/>
                            cambiar un neumático de un automóvil o realizar algún <br/>
                            trámite bancario , entre otras cosas.
                        </p>
                    </div>
                </div>
                <div className="pl-5 pt-2 d-flex align-items-center justify-content-center pr-5 pt-4">
                    <div className="letra-presentacion2 pl-5">
                        <h3>
                            HappyLife<br/>
                        </h3>
                        <p>
                            una plataforma que funciona como un auxiliar<br />
                            en el tratamiento de estas enfermedades<br/>
                            centrándose en fomentar buenos hábitos en<br/>
                            las personas, los cuales aumentan la autoestima,<br/>
                            la seguridad en uno mismo, cualidades que<br/>
                            fortalecen nuestra capacidad de interactuar<br/>
                            con las personas de forma real. Todo esto<br/>
                            mediante tareas, como el diario emocional<br/>
                            el rincón de felicidad y el baúl de agradecimiento.<br/>
                            Junto con la ayuda de Happy nuestro guía virtual<br/>
                        </p>
                    </div>
                    <div className="">
                        <img src="https://cdn.dribbble.com/users/2155177/screenshots/9071719/media/d48fc2b10716299cbe50efd33366c442.png?compress=1&resize=800x600" alt="" width="550px" height="400px"/>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
}
export default withRouter(Home);