import React from 'react';
import { Redirect } from 'react-router-dom';
import './CSS/Principal.css';
class Principal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            red:false,
            datos: []
        }
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.setState({red:true});
            },10000);
    }
    
    render() { 
        return (
        <>
            <div className="Principal">
                <div className="conP">
                    <img className="imagP" src="./images/Principallog.png" alt="..." />  
                </div>
                <h2 className="footerP">Estamos solicitando asistencia espere porfavor</h2>
            </div>
            {this.state.red&&<Redirect to="/Formu"></Redirect>}
        </> );
    }
}
 
export default Principal;