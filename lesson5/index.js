const divElement = document.createElement("div");

// console.dir(div)

divElement.className = "red";
divElement.setAttribute("id", "red");
divElement.setAttribute("title", "Red Div");
divElement.innerText = "Hello This Div Create With JS Manipulation";
divElement.style.color = "red";

const container = document.querySelector("#container");

container.append(divElement);

// So We Can Create Any HTML Element With Javascript and Manipulate IT.
