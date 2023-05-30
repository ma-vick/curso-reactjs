import { useState } from 'react';

export default function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e){
    e.preventDefault();
    setUserEmail(email);
  }

  function limparEmail(){
    setUserEmail('');
  }

  return (
    <div>
        <h2>cadastre o seu e-mail</h2>
        <form>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='digite o seu e-mail'
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" onClick={enviarEmail}>enviar e-mail</button>
          {userEmail && (
            <div>
              <p>o e-mail do usuário é: {userEmail}</p>
              <button onClick={limparEmail}>limpar e-mail</button>
            </div>
          )}
        </form>
    </div>
  )
}
