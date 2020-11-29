import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Principal.css';
class Perfil extends React.Component {
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
                    <img className="imagP imagPer" src="./images/perfil.png" alt="..."/>  
                    <div className="conBP">
                        <input type="text" className="entradasIR" placeholder="Nombre De Usuario"/>
                        <input type="text" className="entradasIR" placeholder="# De Contacto"/>
                        <input type="text" className="entradasIR" placeholder="Localizacion"/>
                    </div>
                </div>
                <div className="conredes">
                    <Link to="/Sign" className="linkIR">
                        <img className="flecha"src="./images/Retroceder.png" alt="..."/>
                    </Link>
                    <Link to="/Bform" className="linkIR">
                        <img className="flecha"src="./images/Avanzar.png" alt="..."/>
                    </Link>                                                                            
                </div>
            </div>
        </> );
    }
}
 
export default Perfil;