import React from 'react';
import NavBarDashboard from "../componenentes/NavBarDashboard";
import update from 'immutability-helper'
import axios from "axios";


class DiarioEmocional extends React.Component{

    constructor() {
        super();
        this.state = {
            descripcioEmocion: "",
            motivoEmocion: "",
            idUser: " "
        }
    }

    componentDidMount() {
        let idUsuario = window.localStorage.getItem("user");
        this.setState({
            idUser: idUsuario
        })
    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    guardarEmociones(e){
        if(this.state.descripcioEmocion.length >0 && this.state.motivoEmocion.length >0){
            axios.post('http://localhost:3000/actividades/diary',{
                descripcionEmocion: this.state.descripcioEmocion.toString(),
                motivoEmocion: this.state.motivoEmocion.toString(),
                idUsuario: this.state.idUser
            }).then(dataRes => {

                if (dataRes.data.status === true){
                    this.setState({
                        descripcioEmocion: " ",
                        motivoEmocion: " ",
                    })
                    alert("Agregado");

                }else{
                    alert(dataRes.data.message);
                }
            })
        }
    }

    render(){
        return(
            <div>
                <NavBarDashboard/>
                <h1 className="text-center">Diario Emocional</h1>
                <br/>
                <div className = "contenedor-publicacion3">
                   <div className="d-flex justify-content-center">
                       <div className="pr-5">
                           <label>Describe todas las emociones que experimentaste durante el dia</label>
                           <textarea className = "form-control" id = "exampleFormControlTextarea2" rows = "4" name="descripcioEmocion"  value={this.state.descripcioEmocion} onChange={this.changeField.bind(this)}></textarea>
                       </div>
                       <div>
                           <label> Identifica el motivo de esta emocion </label>
                           <textarea className = "form-control" id = "exampleFormControlTextarea2" rows = "4" name="motivoEmocion"  value={this.state.motivoEmocion} onChange={this.changeField.bind(this)}></textarea>
                       </div>
                   </div>
                    <label className="pt-4"> RECUERDA QUE LAS EMOCIONES, SOLAMENTE SON EMOCIONES Y NO AFECTAN LA REALIDAD </label>
                </div>

               <div className="d-flex justify-content-center">
                   <button className = "buttonCiruclar" onClick={this.guardarEmociones.bind(this)}> + </button>
               </div>

                <div className="d-flex justify-content-center align-items-center pt-4">
                  <div>
                      <img src="imgs/img25.jpeg" alt="" srcSet=""/>
                  </div>
                   <div>
                       <h4>Al final todo estara bien, y si no esta bien,<br/> no hemos llegado al final</h4>
                   </div>
                </div>
            </div>
        );
    }
}

export default DiarioEmocional;