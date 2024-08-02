// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

let div = document.createElement("div")

div.innerText = "El div";

document.body.appendChild(div)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let div2 = document.createElement("div")

let p = document.createElement("p")

p.innerText = "esto es una p"

div2.appendChild(p)

document.body.appendChild(div2)


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.


let div3 = document.createElement("div")


for (let i = 0; i <= 5; i++){

    let p2 = document.createElement("p");

    p2.innerText = "Textoss";

    div3.appendChild(p2)
    
}

document.body.appendChild(div3)



// 2.4 Inserta dinamicamente con javascript en un html una p con el	texto .


const p3 = document.createElement("p")

p3.innerText = 'Soy dinámico!';

document.body.appendChild(p3)



// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.


const h2 = document.querySelector(".fn-insert-here")

h2.insertAdjacentHTML("afterbegin", 'Wubba Lubba dub dub')



// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


const ul = document.createElement("ul")


for (const item of apps) {

    let li = document.createElement("li")

    li.innerText = item;

    ul.appendChild(li)


}


document.body.appendChild(ul)


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me


const rmove = document.querySelectorAll(".fn-remove-me");

for (const item of rmove) {
   
    item.remove()

}


// 2.8 Inserta una p con el texto  entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.


const insert = document.querySelector("div")


insert.insertAdjacentHTML("afterend", "<p> Voy en medio! </p>")





// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here


const insertAll = document.querySelectorAll(".fn-insert-here")


for (const item of insertAll) {

    console.log(item);
    
    item.insertAdjacentHTML("afterbegin", "<p> Voy dentro! </p>")

}


