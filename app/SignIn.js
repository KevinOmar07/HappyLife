import React from "react";

import Registrarse from "./Registrarse";
import Input from "./input";
import SlideSignIn from "./SlideSignIn";
import RecoverPass from "./RecoverPass";
import Update from "immutability-helper";
import Logo from "../componenentes/Logo";


class SignIn extends React.Component{
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        }
        this.onChange = this.onChange.bind(this);
    }


    onChange(e){
        let field = e.target.name;
        let value = e.target.value;

        this.setState(Update(this.state,{
            [field] : {$set : value}
        }))

    }

    render() {
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-7 border SlideSignIn-body-color">
                        <SlideSignIn/>
                    </div>
                    <div className="col-5 border min-vh-100 pt-5">
                        <br/>

                       <div className="text-right">

                           <div className='row pt-5'>
                               <li className='nav-item col-6 position-absolute top-10 end-0 translate-middle-y'><a className="nav-link" href="/"><p className="logo"><Logo/></p></a></li>
                           </div>
                           <br/>

                       </div>
                        <h1 className="pt-5">Inicio de sesion</h1>
                        <Input label="email" type="text" name="email" placeholder="ingrese su email" valor={this.state.email} onChange={this.onChange}/>
                        <Input label="password" type="password" name="password" placeholder="ingrese su password" valor={this.state.password} onChange={this.onChange}/>
                        <RecoverPass email={this.state.email} password={this.state.password}/>
                        <Registrarse />
                    </div>
                </div>
            </div>
        )
    }
}
export default SignIn;