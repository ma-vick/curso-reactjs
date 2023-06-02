import Button from './evento/Button';

export default function Evento({ numero }) {
    function meuEvento(){
        console.log(`fui ativado! ${numero}`);
    }
    
    function outroEvento(){
        console.log(`evento!`);
    }

  return (
    <div>
        <p>clique para disparar um evento:</p>
        <button onClick={meuEvento}>ativar!</button>
        <Button
          event={outroEvento} 
          text="primeiro arquivo"
        />
    </div>
  );
}
