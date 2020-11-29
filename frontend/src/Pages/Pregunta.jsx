import React from 'react';
import { Link } from 'react-router-dom';
class Resul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <>
        <div className="Load">
            <h1 className="HeaderPr">¿Desea llenar nuevamente el formulario?</h1>
            <div className="conP">
                <img className="imagP" src="./images/Pregunta.png" alt="..."/>  
                <div className="conBP">
                    <Link className="linkP" to="/Formu">
                        <input className="botonP" type="button" value="SI"/>
                    </Link>
                    <Link className="linkP" to="/buscador">
                        <input className="botonP" type="button"value="NO"/>
                    </Link>
                </div>
            </div>
        </div>
        </> );
    }
}
 
export default Resul;