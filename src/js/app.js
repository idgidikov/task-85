import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");

  const url = `https://pokeapi.co/api/v2/pokemon?limit=10`;

fetch(url)
.then((response)=>response.json)
.then((data)=>{
  data.results.forEach((x)=>{
    let newLi = document.createElement("li");
        newLi.innerHTML = x.name;
        ul.appendChild(newLi);
  })
}
).catch((e)=>console.log(e))

})