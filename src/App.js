import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="App">
        <header class="App-header">
          <h1 class="header-title">ArboML</h1>
          <h2 class="header-subtitle">Identifique Dengue ou Chikungunya por meio de sintomas</h2>
        </header>

        <main class="App-content">
          <div class="Question">
            <h3 class="Question-title">Você concorda com isso?</h3>
            <div class="Answers">
              <button class="answer answer-no">Não</button>
              <button class="answer answer-yes">Sim</button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
