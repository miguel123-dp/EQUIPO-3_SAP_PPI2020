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
            <h1 className="HeaderPr">ENFERMERÍA MÓVIL</h1>
            <div className="conredes">
                    <img className="imagresul"src={this.props.ima} alt="..."/>   
                    <p>{this.props.descripcion}</p>                                                                                 
            </div>
            <div className="conredes">   
                    <p className="imagresul">{this.props.nota}</p> 
                <Link to="/Pregunta" className="linkIR">
                    <img className="flecha"src="./images/Avanzar.png" alt="..."/>
               </Link>                                                                            
            </div>
        </div>
        </> );
    }
}
 
export default Resul;