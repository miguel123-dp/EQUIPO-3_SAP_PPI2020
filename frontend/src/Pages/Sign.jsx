import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Sign.css';
class Sign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        
    }
    x=()=>{
        let y;
        if(this.props.titulo!="Iniciar sesión"){
            y="/Perfil";
        }else{
            y="/Bform";
        }
        return y;
    }
    render() { 
        return (
        <>
            <div className="Sign">
                <h1 className="HeaderPr">{this.props.titulo}</h1>
                <img className="imagIR"src="./images/inireg.png"/>
                <div className="coninputs">
                    <input type="text" className="entradasIR" placeholder="Usuario"/>
                    <input type="password"className="entradasIR" placeholder="Contraseña"/>
                </div>
                <div className="conredes">
                    <Link to="/principal" className="linkIR">
                        <img className="flecha"src="./images/Retroceder.png"/>
                    </Link>
                        <img className="redes" src="./images/fb.png"/>
                        <img className="redes" src="./images/gm.png"/>
                    <Link to={this.x()} className="linkIR">
                        <img className="flecha"src="./images/Avanzar.png"/>
                    </Link>                                                                            
                </div>
            </div>
        </> );
    }
}
 
export default Sign;