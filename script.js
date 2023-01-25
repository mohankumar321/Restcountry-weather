fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
    data.forEach(element=>{  
        const countryRequired={
            ...element,
            name        : element.name.common,
            flag        : element.flags.png,
            latlng      : element.capitalInfo.latlng,
            countrycode : element.cca3,
            region      : element.region,
            capital     : element.capital,
        }        
  createCountry(countryRequired)
    });
   
})
.catch((err)=>console.log(err))


let weather=addEventListener("click",getweather)
async function getweather(){
fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=7cc78c06e15accb11dda132f2ba6c343")
.then((res)=>res.json())
.then((data)=>{console.log(data)})
}




function createCountry({name, flag, latlng, countrycode, region, capital}){
    document.body.innerHTML+=`
    <div class="container">
    <img src="${flag}" alt="${name}" class="flag"/>
    <div class="info">
    <h2>${name}</h2>
    <p><span>Region : </span>${region}</p>
    <p><span>Capital: </span>${capital}</p>
    <p><span>Countrycode: </span>${countrycode}</p>
    <p><span>Latlng : </span>${latlng}</p>
    <button class="btn btn-primary" on click>Click For Weather</button>  
   
    <h1>

    </div>`
}

