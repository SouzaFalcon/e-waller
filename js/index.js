// transações ficticias cadastradas(criadas manualmente)
var transactions = JSON.parse(localStorage.getItem("@ewaller/transactions"))||[];



// adiciona o corpo da tabela na variavel table
var table = document.querySelector("#table tbody");
// mapeamento das transações
transactions.map((transactions) => {
  var row = document.createElement("tr");
  var title = document.createElement("td");
  title.append(transactions.title);

  var price = document.createElement("td");
  var value = moneyFormat(transactions.currency, transactions.price);
  price.append(value);

  var category = document.createElement("td");
  category.append(transactions.category);

  var date = document.createElement("td");
  date.append(transactions.date);

  row.appendChild(title);
  row.appendChild(price);
  row.appendChild(category);
  row.appendChild(date);

  table.appendChild(row);
});

var addBtn = document.querySelector("#addButton a");
var popup = document.querySelector("#popupbackground");
var closeBtn = document.querySelector("#popup form a");
var form = document.querySelector("form");
addBtn.addEventListener("click", () => {
  //O que vai acontecer quando clicar no botão adicionar
  popup.style.display = "flex";
  popup.style.transition = "display 5s";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  popup.style.transition = "display 5s";
  form.reset();
});
form.addEventListener("submit", (event) => {
  // PREVINE PARA Q A TELA N RECARREGUE
  event.preventDefault();
  
  
  // CAPTURA OS DADOS NO FORMULÁRIO
  var data = new FormData(event.target);

 //desestruturar os dados em váriaveis
  var values = Object.fromEntries (data);
  
  var {title, currency, identifier, price, category} = Object.fromEntries(data)
  //PEGAR A DATA ATUAL NO FORMATO DD/MM/YY
  var date = new Date().toLocaleDateString();
  var transaction = {
    title,
    price,
    category,
    currency,
    identifier,
    id:transactions.length +1 ,
    date,
  }

  transactions.push (transaction);
  localStorage.setItem("@ewallet/transactions", JSON.stringify (transactions));
window.location.reload();
});
// metodos ou funções
function moneyFormat(currency, price) {
  var value = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency,
  }).format(price);
  return value;
}
