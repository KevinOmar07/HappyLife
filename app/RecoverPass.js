import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';

class RecuperarPass extends React.Component{

    constructor() {
        super();
        this.state={
            statusAlert: false
        }
    }

    componentDidMount() {
        if (window.localStorage.getItem("token")){
            this.props.history.push("/dashboard");
        }
    }

    viewUser(){

       if(this.props.email.length>0 && this.props.password.length>0){
           axios.post('http://localhost:3000/user/signin',{
                         //http://localhost:3000/user/signin
               correo: this.props.email,
               pass: this.props.password
           }).then(dataRes => {

               if (dataRes.data.status === true){
                   window.localStorage.setItem('token',dataRes.data.token);
                   window.localStorage.setItem('user',dataRes.data.body[0].idUsuario);
                   this.props.history.push('/dashboard');
                   alert("Bienvenido " + dataRes.data.body[0].nombreUsuario);
               }else{
                   alert(dataRes.data.message);
               }


           })

        /*   axios.post('http://localhost:3000/user/signin',{
               correo: this.props.email,
               pass: this.props.password
           }).then(dataRes => {
               console.log(dataRes);
               console.log(dataRes.data);
               if (dataRes.data.status === true){
                  // this.props.history.push('/home');
                   alert(dataRes.data);
               }else{
                   alert(dataRes.data.message);
               }
           })*/



       }else{
           alert("Correo o contraseña vacios "+this.props.email);
       }
    }

    render() {
        return(
            <div>
                <p className="text-right pt-3"><a href="#" className="sin-decoracion">¿olvidaste tu contraseña?</a></p>
                <div>
                    <button className="boton-signin" onClick={this.viewUser.bind(this)} type="submit"> Iniciar sesion </button>
                </div>
                <br/>
            </div>

        )
    }
}
export default withRouter(RecuperarPass);