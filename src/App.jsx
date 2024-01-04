import { useState } from "react";

import "./App.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(0);

  const handleChangeAltura = (e) => {
    setAltura(e.target.value);
  };

  const handleChangePeso = (e) => {
    setPeso(e.target.value);
  };

  const calculaImc = () => {
    const imcValue = (peso / (altura * altura)).toFixed(2);
    setImc(imcValue);
    setAltura("");
    setPeso("");
  };

  const renderImc = () => {
    let classificacao = "";
    switch (true) {
      case imc < 18.5:
        classificacao = "Abaixo do peso";
        break;
      case imc >= 18.5 && imc <= 24.9:
        classificacao = "Normal";
        break;
      case imc >= 25.0 && imc <= 29.9:
        classificacao = "Excesso de peso";
        break;
      case imc >= 30.0 && imc <= 34.9:
        classificacao = "Obesidade Leve (Grau I)";
        break;
      case imc >= 35.0 && imc <= 39.9:
        classificacao = "Obesidade Severa (Grau II)";
        break;
      case imc > 40.0:
        classificacao = "Obesidade Mórbida (Grau III)";
        break;
      default:
        classificacao = "IMC inválido";
        break;
    }

    return (
      <>
        <h3>Resultado: {imc}</h3>
        <h4>Classsificação: {classificacao}</h4>
      </>
    );
  };

  return (
    <main>
      <div className="container">
        <h1>Calculadora IMC</h1>
        <div className="input-container">
          <h2>Informe seus dados</h2>
          <label>
            Altura
            <input
              onChange={handleChangeAltura}
              type="number"
              name="altura"
              placeholder="m"
              value={altura}
            />
          </label>
          <label>
            Peso
            <input
              onChange={handleChangePeso}
              type="number"
              name="peso"
              placeholder="Kg"
              value={peso}
            />
          </label>
          <button onClick={calculaImc}>Calcular</button>
          <div className="render-imc">{!!imc && renderImc()}</div>
        </div>
      </div>
    </main>
  );
}

export default App;
