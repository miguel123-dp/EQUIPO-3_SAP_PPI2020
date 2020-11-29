import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Principal.css';
class Principal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
        <>
            <div className="Principal">
                <h1 className="HeaderPr"> BIENVENIDO A ENFERMERÍA MÓVIL</h1>
                <div className="conP">
                    <img className="imagP" src="./images/Principallog.png" alt="..."/>  
                    <div className="conBP">
                        <Link className="linkP" to="/Log">
                            <input className="botonP" type="button" value="INICIAR SESIÓN"/>
                        </Link>
                        <Link className="linkP" to="/Sign">
                            <input className="botonP" type="button"value="REGISTRARSE"/>
                        </Link>
                    </div>
                </div>
                <h2 className="footerP">Salvando vidas desde casa</h2>
            </div>
        </> );
    }
}
 
export default Principal;