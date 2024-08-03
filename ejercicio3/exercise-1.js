// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countriess = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul")

for (const item of countriess) {
    
    let li = document.createElement("li")

    li.innerHTML = item;

    ul.appendChild(li)

}

document.body.appendChild(ul)



// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.


const rmove = document.querySelector(".fn-remove-me")

rmove.remove()



// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const insertCars = document.querySelector(`[data-function="printHere"]`)

const ul2 = document.createElement("ul")

for (const item of cars) {

    let li2 = document.createElement("li")

    li2.innerHTML = item;

    ul2.appendChild(li2)

    insertCars.appendChild(ul2)

}







// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title1', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title3', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title4', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];



for (const item of countries) {

const div = document.createElement("div")

const h4 = document.createElement("h4")

const img = document.createElement("img")


h4.innerText = item.title;

img.src = item.imgUrl;

div.appendChild(h4)

div.appendChild(img)
    
document.body.appendChild(div)
}


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const button = document.createElement("button")

button.innerText = "WARING THIS BUTTON REMOVE THE LAST ELEMENT"

document.body.appendChild(button)


const removeLast = () => {

    // let divs = document.querySelectorAll("div")

    // let lastDiv = divs[divs.length - 1];

    let divs = document.querySelector("div:last-of-type")

    divs.remove()



}
 
button.addEventListener("click", removeLast)



// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.



const divs = document.querySelectorAll("div")



for (const item of divs) {
    
    const button2 = document.createElement("button")

    button2.innerText = "WARING THIS BUTTON REMOVE PARETS"

    item.appendChild(button2)


}

// Como esta constate recoge todos los botones, para probar la funcionabilidad del anterior ejercicio, el 1.5 debemos comentarlo

// const buttonss = document.querySelectorAll("button"); 

buttonss.forEach(button => {
    button.onclick = () => {
        const parent = button.parentNode;
        parent.remove();
    };
});
