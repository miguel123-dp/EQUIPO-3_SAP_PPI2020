import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Sign.css";
import axios from "axios";

class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      form: {
        id: "",
        username: "",
        password: "",
        Phone: "",
        Dir: "",
      },
      y: "",
      z: "",
    };
  }

  peticionGet = () => {
    axios
      .get("https://api-fake-enfermera-movil.vercel.app/user")
      .then((res) => {
        this.setState({
          datos: res.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPost = async () => {
    delete this.state.form.id;
    await axios
      .post("https://api-fake-enfermera-movil.vercel.app/user", this.state.form)
      .then((response) => {
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
    return this.x();
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

  usuarioMatch = async (user, pass) => {
      let m = this.state.datos;
    const un = await m.find(
      (name) => name.username === user
    );
    const pd = await m.find(
      (word) => word.password === pass
    );
    const usernameLog = this.state.form.username;
    const passwordLog = this.state.form.password;

    if (un.username === usernameLog && pd.password === passwordLog) {
      return "/Bform";
    } else {
      return "/Log";
    }
  };

  SignOrLog = () => {
    let y = this.state.form.username;
    let z = this.state.form.password;
    if (this.props.titulo !== "Iniciar sesión") {
      return (
        <Link
          to="/Perfil"
          className="linkIR"
          onClick={() => this.peticionPost()}
        >
          <img className="flecha" src="./images/Avanzar.png" alt="..." />
        </Link>
      );
    } else {
      return (
        <Link to={this.usuarioMatch(y, z)} className="linkIR">
          <img className="flecha" src="./images/Avanzar.png" alt="..." />
        </Link>
      );
    }
  };

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    const datosForm = this.state.form;
    const datos = this.state.datos;
    console.log(datos);

    return (
      <>
        <div className="Sign">
          <h1 className="HeaderPr">{this.props.titulo}</h1>
          <img className="imagIR" src="./images/inireg.png" alt="..." />
          <div className="coninputs">
            <input
              type="text"
              name="username"
              className="entradasIR"
              placeholder="Usuario"
              onChange={this.handleChange}
              value={datosForm ? datosForm.username : ""}
              required
            />
            <input
              type="password"
              name="password"
              className="entradasIR"
              placeholder="Contraseña"
              onChange={this.handleChange}
              value={datosForm ? datosForm.password : ""}
              required
            />
          </div>
          <div className="conredes">
            <Link to="/principal" className="linkIR">
              <img className="flecha" src="./images/Retroceder.png" alt="..." />
            </Link>
            <img className="redes" src="./images/fb.png" alt="..." />
            <img className="redes" src="./images/gm.png" alt="..." />

            {this.SignOrLog()}
          </div>
        </div>
      </>
    );
  }
}

export default Sign;
