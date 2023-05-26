import React from "react";
import FormSignUp from "./formSignUp";
import SlideSignUp from "./slideSignUp";
import Input from "./input";
import Update from "immutability-helper";


class SignUp extends React.Component{

    constructor() {
        super();
        this.state = {
            nombre: '',
            nombreUsuario:'',
            email: '',
            contrasena:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){

        let field = e.target.name;
        let value = e.target.value;

        this.setState(Update(this.state,{
            [field] : {$set : value}
        }))

        console.log(value+ " "+ field);
    }

    render() {
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5 border min-vh-100">
                        <br/>
                       <div>
                           <h1>Crear Cuenta</h1>
                       </div>
                        <Input label="Nombre" type="text" name="nombre" placeholder="ingrese su Nombre" valor={this.state.nombre} onChange={this.handleChange}/>
                        <Input label="Nombre Usuario" type="text" name="nombreUsuario" placeholder="ingrese su Nombre de Usuario" valor={this.state.nombreUsuario} onChange={this.handleChange}/>
                        <Input label="Email" type="text" name="email" placeholder="ingrese su email" valor={this.state.email} onChange={this.handleChange}/>
                        <Input label="Contraseña" type="password" name="contrasena" placeholder="ingrese su contraseña" valor={this.state.contrasena} onChange={this.handleChange}/>
                        <FormSignUp nombre={this.state.nombre} nombreUsuario={this.state.nombreUsuario} email={this.state.email} contrasena={this.state.contrasena}/>
                    </div>
                    <div className="col-7 border SlideSignUp-body-color">
                        <SlideSignUp/>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUp;