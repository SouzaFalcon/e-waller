var transactions = [
    {
        title: "Desenvolvimento" ,
        price: 5000 ,
        currency: "BRL",
        type: "entrada",
        category: "venda",
        date: "23/07/2021"
    },
    {
        title: "Hospital" ,
        price: 250 ,
        currency: "BRL",
        type: "saida",
        category: "Medicamento",
        date: "23/07/2021",
    },

]

{/* <tr>
                    <td>desenvolvimento </td>
                    <td>R$ 5.000,00</td>
                    <td class="green"> <i data-feather="dollar-sign"></i> Venda</td>
                    <td>13/08/2021</td>
                </tr> */}

var table = document.querySelector("#table tbody");
transactions.map(transactions => { 
    var row = document.createElement ("tr");
    var title = document.createElement ("td");
    title.append(transactions.title);

    var price = document.createElement ("td");
    var value = moneyFormat ( transactions.currency, transactions.price );
    price.append(value);

    var category = document.createElement ("td");
    category.append(transactions.category);
 
    var date = document.createElement ("td");
    date.append(transactions.date);

    row.appendChild(title);
    row.appendChild(price);
    row.appendChild(category);
    row.appendChild(date);
    
    table.appendChild(row);      
} )




var addBtn = document .querySelector("#addButton a") ;
var popup = document .querySelector("#popupbackground");
var closeBtn = document .querySelector("#popup form a")

addBtn.addEventListener("click", ()=>{
//O que vai acontecer quando clicar no botão adicionar
popup.style.display = "flex";
popup.style.transition = "display 5s";
})

closeBtn.addEventListener("click", ()=>{
    popup.style.display = "none";
    popup.style.transition = "display 5s";

})


function moneyFormat(currency, price) {
var value = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency
}).format(price);
return value
}