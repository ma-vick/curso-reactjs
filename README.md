# curso de ReactJS 💙

[curso de react do canal Matheus Battisti - Hora de Codar:](https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO)

## 01 - introdução

1. instalação do Node.js

### o que é React?

- uma **biblioteca JS** para criação de interfaces;

- utilizado para construir **SPAs** (Single Page Application);

- baseado em **componentes**;

- utiliza o **JSX** para renderizar o HTML;

- aplica o **Virtual DOM** *(é um conceito de programação onde uma representação ideal, ou “virtual”, da interface do usuário é mantida em memória e sincronizada com o DOM “real” por uma biblioteca como o ReactDOM.)* para realizar as alterações de DOM;

- podemos **adicionar a um projeto** ou criar um projeto com ele.


## 02 - instalando o React (create-react-app)

- para instalar o React vamos utilizar uma ferramenta chamada [Create React App](https://create-react-app.dev/)

``` npx create-react-app my-app ```

#### estrutura

***npx*** - é o executor de pacote usado pelo npm para executar pacotes no lugar de uma instalação global.

***create-react-app*** - script.

***my-app*** - nome do projeto.

após criado o projeto, você pode inicia-lo com: ``` npm start ```


## 03 - entendendo o JSX

- o **JSX** é como um HTML, porém dentro do código JavaScript;

- é a principal maneira de se escrever HTML com o React;

- podemos **interpolar variáveis**, inserindo ela entre {};

- é possível também **executar funções** em JSX;

- inserir **valores em atributos de tags** também é válido em JSX.

*TODOS OS ELEMENTOS JSX DEVEM ESTAR ENVOLTAS EM UM PAI*

## 04 - criando componentes no React

### componentes

- permite **dividir a aplicação** em partes;

- os componentes **renderizam JSX**, assim como App.js (que é um componente);

- precisamos **criar um arquivo** de componente e **importá-lo** onde precisamos utilizar.

> existe uma regra para nomear componentes em ReactJS chamado *PascalCase*, em que a todas as palavras devem começar com letra maiúscula.

> componentes devem ser REUTILIZÁVEIS.

## 05 - trabalhando com props

### props

- as **props** são valores passados para componentes;

- podemos deixá-los **dinâmicos**, assim **mudando a execução** por causa do valor da prop;

- o valor é passado como um **atributo** na chamada do componente;

- e precisa ser **resgatado dentro de uma propriedade/argumento** chamada props na função de definição do compenente;

<hr/>

**Props** podem ser usadas da seguinte maneira:

```js
function Pessoa(props) {
  return (
    <div>
        <img src={props.foto} alt={props.nome} />
        <h2>nome: {props.nome}</h2>
        <p>idade: {props.idade}</p>
        <p>profissão: {props.profissao}</p>
    </div>
  );
} 
```

Porém é nítida a repetição da palavra 'props' no código, dessa maneira podemos usar a desestruturação para informar quais serão as propriedades usadas, assim resultando no seguinte:

```js
function Pessoa({nome, idade, profissao, foto}) {
  return (
    <div>
        <img src={foto} alt={nome} />
        <h2>nome: {nome}</h2>
        <p>idade: {idade}</p>
        <p>profissão: {profissao}</p>
    </div>
  );
}
```

## 06 - CSS modules

### adicionando CSS

- o CSS pode ser adicionado de **forma global** na aplicação, por meio do arquivo index.css por exemplo;

- porém é possível estilizar a **nível de componentes**, utilizando o *CSS modules*;

- *Componente.module.css*;

## 07 - React Fragments

### fragmentos

- os **React Fragments** permitem a criação de um componente sem elemento pai;

- o propósito é **descomplicar os nós do DOM**;

- a sintaxe é **<>** e **</>**;

exemplo:

```js
export default function Item(props) {
  return (
    <>
      <li>{props.marca}</li>
    </>
  );
}
```

## 08 - Avançando em props

- podemos **definir tipos para as props**, realizando uma espécie de validação;

- definimos em um objeto chamado propTypes no próprio componente;

- utilizando o objeto **defaultProps** podemos *definir um valor padrão*.

## 09 - Eventos no React (onCLick, onChange e onSubmit)

- Os *eventos de React* são os mesmos eventos do DOM;

- O evento é *atrelado a uma tag* que irá executá-lo;

- Geralmente um *método* é atribuído ao evento, e deve ser criado no componente.