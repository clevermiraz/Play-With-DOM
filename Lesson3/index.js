// console.dir(document)

// get Element By Id
let header = document.getElementById("header");

// to change Text there is two way
// textContent Change directly Text
header.textContent = "Miraz";

// innerText Also change Text But Respect To HTML
header.innerText = "Miraz Hossain";

// We can Also Use Query Selector
const item = document.querySelector("#item");

// console.log(item);
item.style.color = "red";
