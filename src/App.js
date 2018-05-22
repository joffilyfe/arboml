import React, { Component } from 'react';
import './App.css';
// var LineChart = require("react-chartjs").Line;
// import Bar from 'react-chartjs';
// var Bar = require("react-chartjs").Bar;
// import Chart from './Chart';

// var typeChart = "bar";

// var chartData = {
//   labels: ["Dengue", "Chikungunya"],
//   datasets: [{
//     label: 'Chance em %',
//     data: [60, 40],
//     backgroundColor: [
//     'rgba(241, 196, 15, 0.2)',
//     'rgba(54, 162, 235, 0.2)',
//     ],
//     borderColor: [
//     'rgba(241, 196, 15, 1)',
//     'rgba(54, 162, 235, 1)',
//     ],
//     borderWidth: 1
//   }]
// };

// var chartOptions = {
//   scales: {
//     yAxes: [{
//       ticks: {
//         beginAtZero:true
//       }
//     }]
//   },
//   barPercentage: 1
// };

var data = [
  {title: "Artralgia", answer: false, display: true},
  {title: "Náuseas", answer: false, display: true },
  {title: "Dor nas Costas", answer: false, display: true },
  {title: "Exantema", answer: false, display: true},
  {title: "Conjuntivite", answer: false, display: false },
  {title: "Hipertensão", answer: false, display: false },
  {title: "Artrite", answer: false, display: false },
]

var algorithms = [
  {"name": "Support Vector Machine", url: "localhost:8000/api/classifier/svm"},
  {"name": "Classification and Regression Tree", url: "localhost:8000/api/classifier/cart"},
  {"name": "Naive Bayes", url: "localhost:8000/api/classifier/nb"},
]


class App extends Component {

  render() {
    var symptoms = data.map( function(symptom) {
      return (
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id={symptom.title} />
            <label className="form-check-label" htmlFor={symptom.title}>Você está com <strong>{symptom.title}</strong>?</label>
        </div>
      )
    });

    var renderAlgorithms = algorithms.map(algorithm => {
      return (
        <option value={algorithm.url}>{algorithm.name}</option>
      )
    });

    return (
      <div className="App">
        <header className="App-header">
          {/*<h1 className="header-title">ArboML</h1>*/}
          <img className="logo" src="/images/logo-1.png" />
          <h2 className="header-subtitle">Triagem com o auxílio de Machine Learning</h2>
        </header>

        <main className="App-content">
          <div className="Description">
            <h3 className="title">O que é o ArboML?</h3>
            <p>Uma ferramenta Web capaz de informar a probabilidade de incidência para às doenças Dengue e Chikungunya por meio dos sintomas informados pelo usuário.</p>
          </div>

          <div className="Question">
            <h3 className="title">Informe os seus sintomas</h3>
            <div>
              <label htmlFor="algorithms">Selecione um algoritmo de classificação</label>
              <select id="algorithms">
                {renderAlgorithms}
              </select>
              <hr />
            </div>
            <div>
              {symptoms}
            </div>
          </div>

          <div className="Result">
            <h3 className="title">Resultado da predição</h3>
            <p className="bestx">Dengue: 29.95%</p>
            <p className="best">Chikungunya: 70.04%</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
