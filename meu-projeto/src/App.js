import './App.css';
import Frase from './components/Frase';
import Evento from './components/Evento';
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';
import Form from './components/Form';

function App() {
  const nome = 'Theo';

  return (
    <div className="App">
      <Frase />
      <Frase />
      <SayMyName name="Vick" />
      <SayMyName name="Vyn" />
      <SayMyName name={nome} />
      <Pessoa 
        nome="Theo"
        idade="19"
        profissao="modelo"
        foto="https://via.placeholder.com/150"
      />
      <List />
      <Evento numero="1" />
      <Evento numero="2" />
      <Form />
    </div>
  );
}

export default App;
