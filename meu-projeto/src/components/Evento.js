export default function Evento({ numero }) {
    function meuEvento(){
        console.log(`fui ativado! ${numero}`);
    }

  return (
    <div>
        <p>clique para disparar um evento:</p>
        <button onClick={meuEvento}>ativar!</button>
    </div>
  );
}
