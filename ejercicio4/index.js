// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const button = document.createElement("button")

button.id = "btnToClick";

button.innerText = "elBotone"

document.body.appendChild(button)

button.onclick = (Event) => {
    console.log(button);
    console.log(Event);
    
    
}



// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.


const allInput = document.querySelectorAll("input")

for (const item of allInput) {
    
 item.addEventListener("focus", (event) => {
    console.log(event);
    console.log(item)
    console.log(item.value);
    
 })
    
}


const aloneInput = document.querySelector(".focus")

 const eventFocus = (a) => {
    console.log(aloneInput.value);
    console.log(allInput);
    console.log(a);
    
    
 }

 aloneInput.addEventListener("focus", eventFocus)






// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.


const otherImput = document.querySelector(".value")


const valueInfo = () => {
    // console.log(otherImput);

     console.log(otherImput.value);
 
}

otherImput.addEventListener("input", valueInfo)


// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement("ul")


for (const item of albums) {
    
    let li = document.createElement("li")

    li.innerText = item;

    ul.appendChild(li)

}

document.body.appendChild(ul)