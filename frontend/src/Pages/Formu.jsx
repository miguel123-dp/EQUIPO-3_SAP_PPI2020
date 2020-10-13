import React from 'react';
import { Link } from 'react-router-dom';
class Formu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Preguntas:[
            "¿TIENES GRIPA O MALESTAR GENERAL?",
            "¿HAS TENIDO CONTACTO CON ALGUIEN QUE TUVO ALGUNO DE ESTOS SINTOMAS?",
            "¿PRESENTA ALGUNA ENFERMEDAD ACTUALMENTE?",
            "¿HAS HECHO VIAJES O IR A ALGUNOS LUGARES DONDE AGLOMERA VARIAS PERSONAS?",
            "¿TE HAN MEDICADO RECIENTEMENTE?",
            "¿TE HAN MEDICADO RECIENTEMENTE?"
            ],
            veri:[
                false,
                false,
                false,
                false,
                false,
                false
            ]
        }        
    }
    componentDidMount(){
        for(let i=0;i<document.getElementsByClassName("si").length;i++){
            document.getElementsByClassName("si")[i].addEventListener("change",()=>{            
            this.state.veri[i]=!this.state.veri[i];
            });        
    }
}
    render() { 
        return ( <>
                <div className="Load">
                    <h1 className="HeaderPr">ENFERMERÍA MÓVIL</h1>
                    <div className="gridform">
                    <div className="c1">Pregunta</div>
                    <div className="c2">Si</div>
                    <div className="c3">No</div>
                    {this.state.Preguntas.map((esito,key)=>{
                        return(
                            <>
                                <div className="c1">
                                    {esito}
                                </div>                                
                                <div className="c2"><input className="si" type="checkbox" name="" id={"si"+key}/></div>
                                <div className="c3"><input type="checkbox" name="" id={"no"+key}/></div>
                            </>
                        );
                    })}</div>
                    <div className="conredes">
                    <Link to="/Bform" className="linkIR">
                        <img className="flecha"src="./images/Retroceder.png"/>
                    </Link>
                    <Link to={()=>{
                        let bol=false;
                        this.state.veri.map((esito,key)=>{
                            if(esito==true){
                                bol=true;
                            }
                        })
                        if(bol){
                            return "/Enfer";
                        }else{
                            return "/Sano";
                        }
                    }} className="linkIR">
                        <img className="flecha"src="./images/Avanzar.png"/>
                    </Link>                                                                            
                </div>
                </div>            
            </> );
    }
}
 

export default Formu;