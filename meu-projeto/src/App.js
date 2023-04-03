import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  const nome = 'Theo';

  return (
    <div className="App">
      <SayMyName name="Vick" />
      <SayMyName name="Vyn" />
      <SayMyName name={nome} />
      <Pessoa 
        nome="Theo"
        idade="19"
        profissao="modelo"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
