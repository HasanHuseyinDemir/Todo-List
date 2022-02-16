const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventlisteners(); // uygulama başlayınca aktif olur

function eventlisteners(){
    form.addEventListener("submit",addNewItem);
    taskList.addEventListener("click",deleteItem);
}

function addNewItem(e){ // yeni item eklemeye yarar
    if(input.value == ""){  
        alert("Add New Item"); //burada boş bırakılan input değerini uyarı olarak verir 
    }

    const listeElemani = document.createElement("li");
    listeElemani.className="list-group-item list-group-item-secondary";
    listeElemani.appendChild(document.createTextNode(input.value)); // input içine yazılan veriyi liste elemanını içine text olarak aktarmış olur.

    const aElementi = document.createElement("a"); 
    aElementi.classList="delete-item float-right"; //a nın class ı
    aElementi.setAttribute("href","#"); 
    aElementi.innerHTML= "<i class='fas fa-times'></i>";
    console.log(listeElemani);

    listeElemani.appendChild(aElementi);// burada liste elemanının içine a elementini yerleştirmiş olduk.
    taskList.appendChild(listeElemani); // burada ise liste elemanını listeye eklemiş olduk :) 
    e.preventDefault(); // formun sürekli submit olmasını engeller
}

function deleteItem(e){
    if(e.target.className==="fas fa-times"){
        e.target.parentElement.parentElement.remove();
        console.log(e.target);
        
    }
    e.preventDefault();
}