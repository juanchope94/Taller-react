import React from 'react';
import './App.css';
import Persona from './components/persona/persona';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      persona: {
        nombre: 'cesar camilo',
        apellido: 'loaiza daza',
        edad: 30
      }
    }
  }
  cambiarName(){
    this.setState({persona: {...this.state.persona, nombre:"juan"}})
  }
  render() {
    
    return (
      <div >
       <Persona datos={this.state.persona}/>
       <button onClick={()=>this.cambiarName()}>Cambiar nombre</button>
      </div>

    );
  }
}

export default App;
