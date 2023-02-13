import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");

  const getUrl  = (count)=> {
    return `https://pokeapi.co/api/v2/pokemon?limit=${count}`;
  }
});


fetch(getUrl(10))
.then((response)=>response.json)
.then((data)=>
{
  data.results.map((x)=>{
    let newLi = document.createElement("li");
        newLi.innerHTML = x.name;
        ul.appendChild(newLi);
  })
}
).catch((e)=> console.log(e))
