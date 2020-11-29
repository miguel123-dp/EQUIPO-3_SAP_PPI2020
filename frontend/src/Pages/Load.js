import React from 'react';
import { Redirect } from 'react-router-dom';
import './CSS/Load.css';
class Load extends React.Component {
    componentDidMount(){
        setTimeout(() => {
            this.setState({red:true});
            },5000);
    }
    constructor(props) {
        super(props);
        this.state = { red:false }
    }
    render() { 
        return (
        <>
            <div className="Load">
                <img src="./images/Loadlog.png"  className="Loadimg" alt="..."/>
                <h1 className="Loadtext">ENFERMERIA MOVIL</h1>
            </div>
            {this.state.red&&<Redirect to="/principal"></Redirect>}
        </> );
    }
}
 
export default Load;