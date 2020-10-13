import React from 'react';
import ReactDOM from 'react-dom';
import Load from './Pages/Load';
import Principal from './Pages/Principal';
import Sign from './Pages/Sign';
import Bform from './Pages/Bform';
import Formu from './Pages/Formu';
import Resul from './Pages/Resul';
import Pregunta from './Pages/Pregunta';
import Rebus from './Pages/Rebus';
import Buscador from './Pages/Buscador';
import Asistencia from './Pages/Asistencia';
import Perfil from './Pages/Perfil';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router >
            <Switch >
                <Route path="/Sano" >
                  <Resul ima="./images/Salud.png"descripcion="SIGUETE CUIDANDO DESDE CASA" nota="#JUNTOSPODEMOSMÁS"/>
                </Route>
                <Route path="/perfil" >
                  <Perfil/>
                </Route>
                <Route path="/rebus" >
                  <Rebus/>
                </Route>
                <Route path="/asitencia" >
                  <Asistencia/>
                </Route>
                <Route path="/Enfer" >
                  <Resul ima="./images/Enfermo.png"descripcion="¡DEBES COMUNICARTE CON UN HOSPITAL CERNANO!" nota="Toma las medidas de precaucion recomendadas"/>
                </Route>                
                <Route path="/buscador" >
                  <Buscador/>
                </Route>                
                <Route path="/Pregunta" >
                  <Pregunta/>
                </Route>
                <Route path="/Formu" >
                  <Formu/>
                </Route>
                <Route path="/Bform" >
                  <Bform/>
                </Route>
                <Route path="/Log" >
                  <Sign titulo="Iniciar sesión"/>
                </Route>
                <Route path="/Sign" >
                  <Sign titulo="Registrarse"/>
                </Route>
                <Route path="/principal" >
                  <Principal />
                </Route>             
                <Route path="/" >
                    <Load />
                </Route>
            </Switch>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

