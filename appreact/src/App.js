import React from "react";
import Produto from "./Produto";
import { GlobalStorage } from "./GlobalContext";
import Limpar from "./Limpar";

// 1 EXERCICIO

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

// const luana = {
//   cliente: "Luana",
//   idade: 27,
//   compras: [
//     { nome: "Notebook", preco: "R$ 2500" },
//     { nome: "Geladeira", preco: "R$ 3000" },
//     { nome: "Smartphone", preco: "R$ 1500" },
//   ],
//   ativa: true,
// };

// const mario = {
//   cliente: "Mario",
//   idade: 31,
//   compras: [
//     { nome: "Notebook", preco: "R$ 2500" },
//     { nome: "Geladeira", preco: "R$ 3000" },
//     { nome: "Smartphone", preco: "R$ 1500" },
//     { nome: "Guitarra", preco: "R$ 3500" },
//   ],
//   ativa: false,
// };

// const App = () => {
//   const dados = mario;

//   const total = dados.compras
//     .map((item) => Number(item.preco.replace("R$ ", "")))
//     .reduce((a, b) => a + b);

//   return (
//     <div>
//       <p>Nome: {dados.cliente}</p>
//       <p>Idade: {dados.idade}</p>
//       <p>
//         Situação:{" "}
//         <span style={{ color: dados.ativa ? "green" : "red" }}>
//           {dados.ativa ? "Ativa" : "Inativa"}
//         </span>
//       </p>
//       <p>Total gastos: R$ {total}</p>
//       {total > 10000 && <p>Você está gastando muito.</p>}
//     </div>
//   );
// };

//------------------------------------------------------------------------//

// 2 EXERCICIO

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
// const produtos = [
//   {
//     id: 1,
//     nome: "Smartphone",
//     preco: "R$ 2000",
//     cores: ["#29d8d5", "#252a34", "#fc3766"],
//   },
//   {
//     id: 2,
//     nome: "Notebook",
//     preco: "R$ 3000",
//     cores: ["#ffd045", "#d4394b", "#f37c59"],
//   },
//   {
//     id: 3,
//     nome: "Tablet",
//     preco: "R$ 1500",
//     cores: ["#365069", "#47c1c8", "#f95786"],
//   },
// ];

// const App = () => {
//   return (
//     <section>
//       {produtos
//         .filter((produto) => Number(produto.preco.replace("R$ ", "")) > 1500)
//         .map((produto) => (
//           <div key={produto.id}>
//             <h1>{produto.nome}</h1>
//             <p>Preço: {produto.preco}</p>
//             <ul>
//               {produto.cores.map((cor) => (
//                 <li key={cor} style={{ backgroundColor: cor, color: "white" }}>
//                   {cor}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//     </section>
//   );
// };

//------------------------------------------------------------------------//

// 3 EXERCICIO

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

// const App = () => {
//   const { pathname } = window.location;
//   let Pagina;

//   if (pathname === "/produtos") {
//     Pagina = Produtos;
//   } else {
//     Pagina = Home;
//   }

//   return (
//     <section>
//       <Header />
//       <Pagina />
//     </section>
//   );
// };

//------------------------------------------------------------------------//

// 4 EXERCICIO

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

// const App = () => {
//   const [dados, setDados] = React.useState(null);
//   const [carregando, setCarregando] = React.useState(null);

//   async function handleClick(event) {
//     setCarregando(true);
//     const response = await fetch(
//       `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
//     );
//     const json = await response.json();
//     setDados(json);
//     setCarregando(false);
//   }

//   return (
//     <div>
//       <button style={{ margin: ".5rem" }} onClick={handleClick}>
//         notebook
//       </button>
//       <button style={{ margin: ".5rem" }} onClick={handleClick}>
//         smartphone
//       </button>
//       <button style={{ margin: ".5rem" }} onClick={handleClick}>
//         tablet
//       </button>
//       {carregando && <p>Carregando...</p>}
//       {!carregando && dados && <Produto dados={dados} />}
//     </div>
//   );
// };

//------------------------------------------------------------------------//

// 5 EXERCICIO

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

// const App = () => {
//   const [produto, setProduto] = React.useState(null);

//   React.useEffect(() => {
//     const produtoLocal = window.localStorage.getItem("produto");
//     if (produtoLocal !== null) setProduto(produtoLocal);
//   }, []);

//   React.useEffect(() => {
//     if (produto !== null) window.localStorage.setItem("produto", produto);
//   }, [produto]);

//   function handleClick({ target }) {
//     setProduto(target.innerText);
//   }

//   return (
//     <div>
//       <h1> Preferência: {produto}</h1>
//       <button onClick={handleClick} style={{ marginRight: "1rem" }}>
//         Notebook
//       </button>
//       <button onClick={handleClick}>Smartphone</button>
//       <Produto produto={produto} />
//     </div>
//   );
// };

//------------------------------------------------------------------------//

// 6 EXERCICIO

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
};

export default App;
