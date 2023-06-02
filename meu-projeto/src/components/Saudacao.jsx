export default function Saudacao({ nome }) {
  function gerarSaudacao(nominho) {
    return `Oii, ${nominho}! Tudo bem?`;
  }

  return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>;
}
