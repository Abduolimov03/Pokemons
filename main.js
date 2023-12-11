// var pokemonArray = pokemons
// let elWrapper = document.quarySelector(".wrapper")
let elHeader = document.querySelector(".header");
let elContainer = document.querySelector(".container");
let elHeader__wrapper = document.querySelector(".header__wrapper")
let elList = document.querySelector(`.list`);
let elSelect = document.querySelector(".candy-select");
let elForm = document.querySelector(".form-one");
const elInput = document.querySelector(".search-input")
let elSortSelect = document.querySelector(".sort-select")


let candies = [];
renderUi(pokemons);

function renderUi(array) {

    elList.innerHTML= "";
    
    array.forEach((item)=>{
            let newLi = document.createElement("li");
            newLi.classList.add("item");
        
            let newH2 = document.createElement("h2");
            newH2.textContent =item.name;
            newLi.appendChild(newH2);
        
            let newImg = document.createElement("img");
            newImg.src =item.img;
            newImg.width = "200";
            newImg.height = "200"
            newLi.appendChild(newImg);
        
            let newP = document.createElement("namess");
            newP.textContent =item.type;
            newLi.appendChild(newP);
        
            let newPi = document.createElement("height");
            newPi.textContent =item.height;
            newLi.appendChild(newPi);
        
            let newPP = document.createElement("weight");
            newPP.textContent =item.weight;
            newLi.appendChild(newPP)

            let newP2 =document.createElement("age");
		// avg_spawns: 25.3,
        newP2.textContent = item.avg_spawns;
            newLi.appendChild(newP2);

            // let newP3 =document.createElement("age");
            // newP3.textContent = item.candy_count;
            // newLi.appendChild(newP2);



        
        
        
        
        
            elList.appendChild(newLi)
        
            
      });
}

function candy () {
    pokemons.forEach(function (item) {
        if (!candies.includes(item.candy)) {
            candies.push(item.candy)
        }
    })


candies.forEach((item) =>{
    const option = document.createElement("option");

    option.textContent = item;
    elSelect.append(option);
})}
candy();


elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const selectValue = elSelect.value;

if (select.value === "all") {
      renderUi(pokemons)
}else{
    let filteredArr = pokemons.filter((item)=>
    {
        return item.candy === selectValue;
    })
    renderUi(filteredArr)
}
})

elInput.addEventListener("input", function(evt){
    let title = evt.target.value;
    console.log(title);

    let filteredArr = pokemons.filter((item) =>{
        return item.name.includes(title);
    })
    renderUi(filteredArr)
})

elSortSelect.addEventListener("change" , function (evt){
    let sortValue = evt.target.value;
    if (sortValue == "A-z") {
        AZ([...pokemons] , true)
    }else if (sortValue == "z-A") {
        AZ([...pokemons] , false)
    }else if (sortValue == "a-u") {
        
    }else{

    }
});

function AZ(array , bool) {
    array.sort((a,b) =>{
        if (a.name > b.name) {
            return bool ? 1 : -1;
        }
        if (a.name < b.name) {
            return bool ? -1 : 1;
        }
        return 0 ;
    })
    renderUi(array)
}

function Age(array , bool){
    array.sort((a ,b )=>{
        return bool ? a.avg_spawns - b.avg_spawns : b.avg_spawns - a.avg_spawns;
    })
    renderUi(array)
}


