
import './App.css';
import MuestraBandera from './components/bandera';
import Botones from './components/botones';
import MuestraMarcador from './components/muestraMarcador';
import Cronometro from './components/cronometro';

function App() {
  return (
    <div className="App">
      <MuestraBandera></MuestraBandera>
      <Botones></Botones>
      <MuestraMarcador></MuestraMarcador>
    </div>
  );
}

export default App;
