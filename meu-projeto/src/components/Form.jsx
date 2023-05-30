export default function Form() {
  function cadastrarUsuario(e){
    e.preventDefault();
    console.log('cadastrou');
  }

  return (
    <div>
        <h1>meu cadastro:</h1>
        <form onSubmit={cadastrarUsuario}>
          <div>
            <label htmlFor="name">digite seu nome:</label>
            <input type="text" name="name" id="name" placeholder="Cátia"/>
          </div>
          <input type="submit" value="cadastrar" />
        </form>
    </div>
  )
}
