const div = document.createElement("div");
div.setAttribute("class", "container col-sm-12")
fetch("https://restcountries.com/v3.1/all").then((data) => data.json()).then((ele) => {
    for (let i = 0; i < ele.length; i++) {
        const div1 = document.createElement("div")
        div1.innerHTML = `<div class="card col-lg-4" id="lg">
            <div class="card-header" id="head">${ele[i].name.common}</div>
            <div class="card-body">
            <img src="${ele[i].flags.png}" class="card-img-top" alt="...">
            <h5 class="card-title ">Capital:${ele[i].capital}</h5>
            <h5 class="card-title">Region:${ele[i].region}</h5>
            <h5 class="card-title">Country code:${ele[i].altSpellings[0]}</h5>  
          </div>
      </div>`;
        div.append(div1)
    }
})
document.body.append(div)
