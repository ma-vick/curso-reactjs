import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();

  function Pessoa(name, lastName){
    this.name = name;
    this.lastName = lastName;
  }

  function cadastrarUsuario(e){
    e.preventDefault();
    const pessoinha = new Pessoa(name, lastName);
    console.log(pessoinha);
  }

  return (
    <div>
        <h1>meu cadastro:</h1>
        <form onSubmit={cadastrarUsuario}>
          <div>
            <label htmlFor="name">digite seu nome: </label>
            <input
              type="text" 
              name="name" 
              id="name" 
              placeholder="Cátia"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">digite sua senha: </label>
            <input 
              type="text" 
              name="lastName" 
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input type="submit" value="cadastrar" />
        </form>
    </div>
  )
}
