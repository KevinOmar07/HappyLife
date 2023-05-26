import React from "react";
import NavagationBar from "../componenentes/NavagationBar";
import Footer from "../componenentes/Footer";

class AboutUs extends React.Component{
    render() {
        return (
            <>
                <NavagationBar/>
                <div className="text-danger textP">
                    <h3 className="txtQuienesSomos">¿Quienes somos?<br/></h3>
                </div>
                <div className="textP animate__animated animate__fadeInRight">
                    <br/>
                    <br/>
                    <h1>Somos una <span className="text-info">plataforma</span></h1>
                    <h1>que funciona como auxiliar en el</h1>
                    <h1>tratamiento <span className="txtTrastornos">transtornos</span></h1>
                    <h1 className="txtTrastornos">mentales.</h1>
                    <br/>
                    <h4 className="txtEspecializados">Especilizados en la ansiedad y drepresion</h4>
                </div>
                <div className="imagen1 ">
                    <img src="../imgs/aboutUs1.jpeg"/>
                </div>
                <br/>
                <br/>

                <div>
                    <div className="textS animate__animated animate__fadeInLeft">
                        <h1>Nos centramos en <span className="textoFomentar">fomentar</span></h1>
                        <h1>buenos <span className="text-info">hábitos</span> en en las personas.</h1>
                        <br/>
                        <br/>
                        <h4>Los cuales aumentan la seguridad en uno</h4>
                        <h4>mismo, gracias al aumento del autoestima </h4>
                        <br/>
                        <br/>
                        <h1><span className="text-info">Cualidades</span> que fortalcen</h1>
                        <h1>Nuestra capacidad de interactuar</h1>
                        <h1>con las <span className="txtEspecializados">personas</span> de forma real</h1>
                    </div>
                    <div className="imagen2">
                        <img src="../imgs/aboutUs2.jpeg"/>
                    </div>
                </div>

                <Footer/>
            </>
        )
    }
}

export default AboutUs