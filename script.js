const div = document.createElement("div");
const div1 = document.createElement("div");
const cardHeader = document.createElement("div");


div.setAttribute("class", "container");
div1.setAttribute("class", "row");
fetch("https://restcountries.com/v3.1/all").then((data) => data.json()).then((ele) => {
    for (i = 0; i < ele.length; i++) {
        const res = document.createElement("div")
        res.setAttribute("class", "col-sm-4")
        res.innerHTML = `<div class="card-header ">
        <h1 class="text-center" id="title">${ele[i].name.common} </h1>
        </div> 
        <img src="${ele[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body id="cbody">
        <h5 class="card-title"> Captial : ${ele[i].capital}</h5>
        <h5 class="card-title">Region : ${ele[i].region}</h5>
        <h5 class="card-title">Lat : ${ele[i].latlng[0]}</h5>
        <h5 class="card-title">Lng : ${ele[i].latlng[1]}</h5>
        <h5 class="card-title">Country Code : ${ele[i].cca3}</h5>
        </div>
        <button type="button" class="btn btn-primary" onclick="weather(${ele[i].name.common})">Click for Weather</button>`
        div1.append(res);
    }
})


div.append(div1);
document.body.append(div);
