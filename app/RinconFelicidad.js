import React from 'react';
import NavBarDashboard from "../componenentes/NavBarDashboard";
import { withRouter } from 'react-router-dom';
import axios from "axios";
class RinconFelicidad extends React.Component{
    constructor() {
        super();
        this.state= {
            publicacion: [],
            nombreUser: "",
            textArea: ""
        }
    }
    componentDidMount() {

        if (!window.localStorage.getItem("token")){
            this.props.history.push("/SignIn");
        }else{
            this.traerdatos();
        }
    }
    traerdatos(){

        let idUser = window.localStorage.getItem("user")

        axios.get("http://localhost:3000/actividades/getTextRF",{
            params: {
                idUsuario:idUser
            }
        }).then(({data})=> {
            this.setState({
                publicacion:data.body
            })
            console.log(this.state.publicacion);
        })
    }
    agregarText(){
        if(this.state.textArea.length>0){
            axios.post("http://localhost:3000/actividades/addTextRF",{
                cosasFeliz:this.state.textArea,
                idUsuario: window.localStorage.getItem("user")
            }).then((data)=> {
                this.setState({
                    textArea: ""
                })
                console.log("se agrego correctamente");
                alert("se agrego")
                this.traerdatos()
            })
        }
    }
    onchange(e){
        this.setState({
            textArea:e.target.value
        })
    }

    render() {
        return (
            <>
                <NavBarDashboard/>
                <br/>
                <div className="row">
                    <div className="col-12 d-flex flex-column align-items-center">
                        <h1>Rincon de la Felicidad</h1>
                        <br/>
                        <div className="contenedor-publicacion4">
                            <div className="row">
                                <label className="form-label text-success text-center">Anote todas las cosas que lo hicieron feliz</label>
                                <div className="m-3"/>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="13" cols="30" value={this.state.textArea} onChange={this.onchange.bind(this)}></textarea>
                            </div>
                            <div className="d-flex justify-content-center m-2">
                                <button className="buttonCiruclar m-0" onClick={this.agregarText.bind(this)}>+</button>
                            </div>
                        </div>
                        <div className="separador2"></div>
                        <div className="contenedor-item-publicacion">
                            <div className="list-group">
                                {
                                    this.state.publicacion.map(item => {
                                        return <div key={item.idrinconFelicidad}>
                                            <label className="list-group-item" key={item.idrinconFelicidad}>
                                                <input className="form-check-input me-1" type="checkbox" value="" />
                                                {item.cosasFeliz}
                                            </label>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}
export default withRouter(RinconFelicidad);