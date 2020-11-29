import React from 'react';
import { Link } from 'react-router-dom';
class Rebus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <>
        <div className="Load">
            <h1 className="HeaderPr">Dolor de cabeza</h1>
            <div className="conP">
                <div className="conBP">
                    <img className="imagP" src="./images/Dcabeza.png" alt="..."/>
                    <p>
                        Se le recomienda: <br/>
                        __________________ <br/>
                        __________________
                    </p>
                </div>                  
                <div className="conBP">
                    <Link className="linkP" to="/buscador">
                        <input className="botonP" type="button" value="Volver a buscar"/>
                    </Link>                    
                    <Link className="linkP" to="/asitencia">
                        <input className="botonP" type="button"value="Solicitar asistencia"/>
                    </Link>
                    <Link className="linkP" to="/Principal">
                        <input className="botonP" type="button"value="Salir"/>
                    </Link>
                </div>
            </div>
        </div>

        </> );
    }
}
 
export default Rebus;