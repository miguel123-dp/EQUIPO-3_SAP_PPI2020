import React from 'react';
import { Link } from 'react-router-dom';
class Bform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <div className="Load">
                    <h1 className="HeaderPr">ENFERMERÍA MÓVIL</h1>
                    <img className="imagBf" src="./images/Bform.png" alt="..."/>
                    <Link className="botonP" to="/Formu">
                        <input className="botonP" type="button" value="Llene el formulario"/>
                    </Link>
                </div>
            </>
         );
    }
}
 
export default Bform;