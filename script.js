const div=document.createElement("div");
div.setAttribute("class","container")
fetch("https://restcountries.com/v3.1/all").then((data) => data.json()).then((ele) => {
    for (let i = 0; i < ele.length; i++) {
        const div1 = document.createElement("div")
        div1.innerHTML=`<div class="row col-lg-4 col-sm-12">
        <div class="card h-100">
          <img src="${"ele[i].flags.png"}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>`; 
        div.append(div1)
    }
}) 
document.body.append(div)
