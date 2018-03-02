import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ArboML</h1>
          <h2 className="App-subtitle">Identifique Dengue ou Chikungunya por meio de sintomas</h2>
        </header>
        <div className="Questions">

          <div className="Question">
            <label>Você tem febre alta?</label>
            <label><input type="radio" name="febre" value="1"/>Sim</label>
            <label><input type="radio" name="febre" value="0"/>Não</label>
          </div>


          <div className="Question">
            <label>Você tem dor de cabeça?</label>
            <label><input type="radio" name="enxantema" value="1"/>Sim</label>
            <label><input type="radio" name="enxantema" value="0"/>Não</label>
          </div>

          <div className="Question">
            <label>Você tem dor de cabeça?</label>
            <label><input type="radio" name="enxantema" value="1"/>Sim</label>
            <label><input type="radio" name="enxantema" value="0"/>Não</label>
          </div>

          <div className="Question">
            <label>Você tem dor de cabeça?</label>
            <label><input type="radio" name="enxantema" value="1"/>Sim</label>
            <label><input type="radio" name="enxantema" value="0"/>Não</label>
          </div>

          <div className="Question">
            <label>Você tem dor de cabeça?</label>
            <label><input type="radio" name="enxantema" value="1"/>Sim</label>
            <label><input type="radio" name="enxantema" value="0"/>Não</label>
          </div>

          <div className="Question">
            <label>Você tem dor de cabeça?</label>
            <label><input type="radio" name="enxantema" value="1"/>Sim</label>
            <label><input type="radio" name="enxantema" value="0"/>Não</label>
          </div>

          <div className="Question">
            <label>Você tem dor de cabeça?</label>
            <label><input type="radio" name="enxantema" value="1"/>Sim</label>
            <label><input type="radio" name="enxantema" value="0"/>Não</label>
          </div>

          <button>Ver</button>
        </div>
      </div>
    );
  }
}

export default App;
