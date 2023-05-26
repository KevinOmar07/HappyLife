import React from "react";
import Logo from "../componenentes/Logo";
import Input from "./input";
import Update from "immutability-helper";
import axios from "axios";
import DatePicker from "react-datepicker";
import { withRouter } from 'react-router-dom';


class SignUp2 extends React.Component{
    constructor() {
        super();
        this.state = {
            nombre: '',
            nombreUsuario:'',
            email: '',
            contrasena:'',
            fecha: new Date(),
            terminos : false,
        }
        this.correoOk = false
        this.handleChange = this.handleChange.bind(this);
    }
    onChange(e){
        this.setState({
            fecha:e
        })
    }

    handleChange(e){

        let field = e.target.name;
        let value = e.target.value;

        this.setState(Update(this.state,{
            [field] : {$set : value}
        }))

    }
    registrarUser(){

        if(this.state.nombre.length > 0 && this.state.nombreUsuario.length > 0 && this.state.email.length > 0 && this.state.contrasena.length > 0 && this.correoOk == true){

            axios.post('http://localhost:3000/user/signup',{
                nombre:this.state.nombre.toString(),
                correo: this.state.email.toString(),
                password: this.state.contrasena.toString(),
                nombreUsuario: this.state.nombreUsuario.toString(),
                fechaNacimiento: this.state.fecha.toDateString()
            }).then(dataRes => {
                console.log(dataRes.data.body);
                console.log(dataRes.data);
                if (dataRes.data.status === true){
                    alert("Cuenta creada correctamente")
                    this.props.history.push('/SignIn');
                }else{
                    alert(dataRes.data.message);
                }
            })
        } else {
            alert("Campos vacios o correo ocupado")
        }
    }

    validarCorreo(e){
        if(this.state.email.length > 0){
            axios.get('http://localhost:3000/user/validarCorreo', {
                params: {
                    correo : this.state.email
                }
            }).then(dataRes =>{
                if(dataRes.data.status === true){
                    this.email.innerHTML = dataRes.data.message
                    this.correoOk = false
                } else{
                    this.email.innerHTML = dataRes.data.message
                    this.correoOk = true
                }
            })
        } else {
            this.email.innerHTML = ' '
            this.correoOk = false
        }

        e.preventDefault()
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-6 fondo-secion1">
                        <div>
                            <a className="nav-link" href="/"><Logo/></a>
                        </div>
                      <div className="contenedor-form animate__animated animate__fadeInLeft font-weight-bold">
                          <h2>Crear Cuenta</h2>
                         <div>
                             <Input label="Nombre" type="text" name="nombre" placeholder="ingrese su Nombre" valor={this.state.nombre} onChange={this.handleChange}/>
                             <Input label="Nombre Usuario" type="text" name="nombreUsuario" placeholder="ingrese su Nombre de Usuario" valor={this.state.nombreUsuario} onChange={this.handleChange}/>
                             <label className="form-label">Email</label>
                             <br/>
                             <input className="form-control" type="text" name="email" placeholder="ingrese su email" valor={this.state.email} onBlur={this.validarCorreo.bind(this)} onChange={this.handleChange}/>
                             <label ref={self=> this.email = self}></label>

                             <Input label="Contraseña" type="password" name="contrasena" placeholder="ingrese su contraseña" valor={this.state.contrasena} onChange={this.handleChange}/>

                         </div>
                      </div>
                        <div className="d-flex justify-content-center">
                            <p>Fecha de cumpleaños</p>
                            <div className="pl-2"><DatePicker  selected={this.state.fecha} onChange={this.onChange.bind(this)} />
                            </div>
                        </div>
                      <div className="boton-registrarse d-flex justify-content-center pt-4">
                          <button className="btn btn-outline-primary" onClick={this.registrarUser.bind(this)}>Registrarse</button>
                      </div>
                    </div>
                    <div className="col-6 fondo-img">
                        <div className="pt-5 pr-5 animate__animated animate__fadeInRight">
                            <img src="https://cdn.dribbble.com/users/2883819/screenshots/7434881/media/6bfb29ad7819c11c0b08273c5e94b551.png?compress=1&resize=800x600" alt="" width="100%" height="100%"/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default withRouter(SignUp2);