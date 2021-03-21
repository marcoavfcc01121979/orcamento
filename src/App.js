import React, { useEffect, useState } from 'react'
import ControleOrcamento from './components/ControleOrcamento';
import Formulario from './components/Formulario';
import MostraGasto from './components/MostraGasto';
import Pergunta from './components/Pergunta'

function App() {
  const [orcamento, setOrcamento] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrapergunta, setMostrapergunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [criargasto, setCriargasto] = useState(false);

  // useEffect que actualize o restante
  useEffect(() => {
    if(criargasto) {

      // Guardar um novo orçamento
      setGastos([
        ...gastos,
        gasto
      ]);

      // restante do orcamento atual
      const orcamentoRestante = restante - gasto.quantidade;
      setRestante(orcamentoRestante);

      // Resetar a false
      setCriargasto(false)
    }
  },[gasto, criargasto, gastos, restante])


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {mostrapergunta ? (
            <Pergunta 
              setOrcamento={setOrcamento}
              setRestante={setRestante}
              setMostrapergunta={setMostrapergunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  setGasto={setGasto}
                  setCriargasto={setCriargasto}
                />
              </div>

              <div className="one-half column">
                <MostraGasto
                  gastos={gastos}
                />
                <ControleOrcamento
                  orcamento={orcamento}
                  restante={restante}                  
                />
              </div>
            </div>
          )}
      
        </div>
      </header>
    </div>
  );
}

export default App;
