import logo from './logo.svg';
import './App.css';
import MeuComponente from './componentes/MeuComponente';
import OutroComponente from './componentes/OutroComponente';
import Template from './componentes/template';

  function App() {
    return (
      <div className="App">
        <h1>Fundamentos React</h1>
        <MeuComponente/>
        <OutroComponente/>
        <template/>
      </div>
  );
}
export default App;