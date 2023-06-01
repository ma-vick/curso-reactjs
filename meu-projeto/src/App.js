import './App.css';
import Frase from './components/Frase';
import Evento from './components/Evento';
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';

function App() {
  const nome = 'Theo';
  const meusItens = ['React', 'Vue', 'Angular'];

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
      <Condicional />
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
