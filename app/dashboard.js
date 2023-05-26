import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from "axios";
import NavBarDashboard from "../componenentes/NavBarDashboard";
class Dashboard extends React.Component{
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
            <div>
                <NavBarDashboard/>
               <div className="row">
                   <div className="col-8 bg-primary contenedor-publicacion">
                       <div>
                           <h1>Rincon de la Felicidad</h1>
                           <label className="form-label text-muted">Anote todas las cosas que lo hicieron feliz</label>
                           <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" value={this.state.textArea} onChange={this.onchange.bind(this)}></textarea>
                           <br/>
                           <button className="btn btn-outline-success" onClick={this.agregarText.bind(this)}>Agregar</button>
                       </div>
                       <div>

                       </div>
                   </div>
                   <div className="col-4 bg-success">

                   </div>

               </div>

                <div className="contenedor-item-publicacion">
                    <div className="list-group">
                        {
                            this.state.publicacion.map(item => {
                                return <div>
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
        );
    }
}


export default withRouter(Dashboard);