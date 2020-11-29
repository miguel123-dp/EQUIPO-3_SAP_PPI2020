import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Formu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      form: {
        id: "",
        res: "",
      },
    };
  }

  peticionGet = () => {
    axios
      .get("https://api-fake-enfermera-movil.vercel.app/questions")
      .then((res) => {
        this.setState({
          datos: res.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPatch = async () => {
    await axios
      .patch(
        `https://api-fake-enfermera-movil.vercel.app/questions/${this.state.form.id}`,
        this.state.form
      )
      .then((response) => {
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  

  componentDidMount() {
    this.peticionGet();
    /*for(let i=0;i<document.getElementsByClassName("si").length;i++){
            document.getElementsByClassName("si")[i].addEventListener("change",()=>{            
                this.setState(state => {
                    const veri = this.state.veri.map(item => item = this.state.veri[i]);
                    return {
                        veri,
                    };
                });
                //this.state.veri[i]=!this.state.veri[i];
            });        
    }*/
  }
  render() {

    var x = () => {
        /*let bol=false;
            this.state.veri.map((esito,key)=>{
                if(esito===true){
                    bol=true;
                }
            })
            if(bol){
                return "/Enfer";
            }else{
                return "/Sano";
            }*/
        var truth,
          lie = 0;
    
        const datos = this.state.datos;
        for (let i = 0; i <= datos.length; i++) {
          if (datos[i].res === true) {
            truth += 1;
          } else {
            lie += 1;
          }
        }
    
        if (truth >= lie) {
          return "/Enfer";
        } else {
          return "/Sano";
        }
      };

    return (
      <>
        <div className="Load">
          <h1 className="HeaderPr">ENFERMERÍA MÓVIL</h1>
          <div className="gridform">
            <div className="c1">Pregunta</div>
            <div className="c2">Si</div>
            <div className="c3">No</div>
            {this.state.datos.map((i) => {
              return (
                <>
                  <div className="c1">{i.q}</div>
                  <div className="c2">
                    <input
                      className="si"
                      type="checkbox"
                      name="res"
                      id={"si" + i.id}
                    />
                  </div>
                  <div className="c3">
                    <input type="checkbox" name="res" id={"no" + i.id} />
                  </div>
                </>
              );
            })}
          </div>
          <div className="conredes">
            <Link to="/Bform" className="linkIR">
              <img className="flecha" src="./images/Retroceder.png" alt="..." />
            </Link>
            <Link to={x} className="linkIR">
              <img className="flecha" src="./images/Avanzar.png" alt="..." />
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Formu;
