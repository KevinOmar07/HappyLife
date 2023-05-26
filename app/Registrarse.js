import React from "react";

class Registrarse extends React.Component{
    render() {
        return(
            <div>
                <p className="text-center pt-3" >¿No tienes cuenta?</p>
                <p className="text-center"><a href="/SignUp" className="sin-decoracion Registrar-Button" >Crear Cuenta</a></p>
            </div>
        )
    }
}
export default Registrarse;