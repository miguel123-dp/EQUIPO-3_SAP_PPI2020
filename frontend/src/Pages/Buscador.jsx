import React from 'react';
import { Link } from 'react-router-dom';
class Buscador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <div className="Sign">
                <h1 className="HeaderPr">Busca diversas enfermedades</h1>
                <img className="imagIR"src="./images/buscador.jpg" alt="..."/>
                <div className="coninputs">
                    <input type="text" className="entradasIR" placeholder="Buscar"/>
                </div>
                <div className="conredes">
                    <Link to="/pregunta" className="linkIR">
                        <img className="flecha"src="./images/Retroceder.png" alt="..."/>
                    </Link>
                    <Link to="/rebus" className="linkIR">
                        <img className="flecha"src="./images/Avanzar.png" alt="..."/>
                    </Link>                                                                            
                </div>
            </div>
            </>
         );
    }
}
 
export default Buscador;