import React from 'react';
import NavBarDashboard from "../componenentes/NavBarDashboard";

class ConsejosYTips extends React.Component{

    render() {
        return (
            <>
                <NavBarDashboard/>
                <h4 className="text-center">Algunos Consejos y Tips</h4>
                <br/>
                <br/>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="mr-5 card-blue d-flex flex-column justify-content-center align-items-center ">
                            <div>
                                <img src="https://cdn.dribbble.com/users/1931354/screenshots/10160401/media/7f2b90c34447c230c0c644f6e1690943.jpg?compress=1&resize=800x600" width="200px" alt=""/>
                                <h2 className="text-center">El arte</h2>
                                <p className="text-center">Puede ayudarte a mejorar <br/> el bienestar emocional y social<br/><br/><a className="nav-link" href="https://www.laestrella.com.pa/cafe-estrella/cultura/200504/arte-terapia-contrarrestar-estres-ansiedad"><button className="btn btn-dark">Mas informacion</button></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="ml-5 card-yellow d-flex flex-column justify-content-center align-items-center">
                            <div>
                                <img src="https://cdn.dribbble.com/users/2155177/screenshots/11144699/media/b15fb1f2eb268f8640da73311b7e9515.png?compress=1&resize=800x600" width="200px" alt=""/>
                                <h2 className="text-center">La musica</h2>
                                <p className="text-center">Puede ayudarte a relajarte<br/> como el tipo de musica jazz <br/> entre otros muchos mas generos<br/><br/><a className="nav-link" href="https://www.psicologos.com.co/articulos/la-musica-un-remedio-para-la-ansiedad"><button className="btn btn-dark">Mas informacion</button></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="mr-5 card-green d-flex flex-column justify-content-center align-items-center">
                            <div>
                                <img src="../imgs/Nature-rafiki.png" width="200px" alt=""/>
                                <h2 className="text-center">La naturaleza</h2>
                                <p className="text-center">Dar un pasea por el parque <br/> o el bosque, ayuda a sentirte <br/> en paz o relajado<br/><br/><a className="nav-link" href="https://www.goredforwomen.org/es/healthy-living/healthy-lifestyle/stress-management/spend-time-in-nature-to-reduce-stress-and-anxiety"><button className="btn btn-dark">Mas informacion</button></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="ml-5 card-purple d-flex flex-column justify-content-center align-items-center">
                            <div>
                                <img src="../imgs/Creative%20thinking-bro.png" width="200px" alt=""/>
                                <h2 className="text-center">Pensamientos</h2>
                                <p className="text-center">Concentrarte en las cosas <br/>positivas, aleja las <br/> preocupaciones<br/><br/><a className="nav-link" href="https://www.mayoclinic.org/es-es/healthy-lifestyle/stress-management/in-depth/positive-thinking/art-20043950"><button className="btn btn-dark">Mas informacion</button></a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="card-pink d-flex flex-column justify-content-center align-items-center">
                            <div>
                                <img src="../imgs/Dreamer-rafiki.png" width="200px" alt=""/>
                                <h2 className="text-center">Dormir</h2>
                                <p className="text-center">Dormir lo adecueda genera<br/>un cuerpo y mennte<br/>saludable<br/><br/><a className="nav-link" href="https://clinicadeansiedad.com/soluciones-y-recursos/prevencion-de-la-ansiedad/sueno-y-ansiedad-recomendaciones-para-dormir-bien/#:~:text=Trate%20de%20hacer%20agradable%20el%20momento%20de%20irse%20a%20dormir.&text=Establezca%20una%20rutina%20placentera%20antes,de%20manzanilla%20o%20de%20valeriana."><button className="btn btn-dark">Mas informacion</button></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div><br/></div>
            </>
        );
    }
}

export default ConsejosYTips;