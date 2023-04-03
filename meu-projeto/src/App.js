import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'vick';
  const newName = name.toUpperCase();
  const url = "https://via.placeholder.com/150"

  function sum(a, b){
    return a + b;
  }

  return (
    <div className="App">
      <h1>olá, {name}!</h1>
      <p>soma: {sum(2, 3)}</p>
      <img src={url} alt="minha imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
