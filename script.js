let lista = [];
let insertButton = document.getElementById("insert");
let stampButton = document.getElementById("stamp");
let deleteButton = document.getElementById("delete");
let elemento = "";
let padre = document.getElementById("bloccoLista");

insertButton.addEventListener("click",

    ()=>{

        elemento = prompt("inserisci elemento alla lista");
        lista.push(elemento);
    }
)

stampButton.addEventListener("click",

    ()=>{

        let i = 0
        while(i < lista.length){

            let elementoIesimo = lista[i]

            let figlio = document.createElement("li")

            figlio.append(elementoIesimo);

            padre.append(figlio);

            i++;
        }
    }

)

deleteButton.addEventListener("click",

    ()=>{
        lista = [];
        padre.innerHTML = "";
    }

)