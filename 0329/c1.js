"use strict";
let R = null;
let b1 = document.querySelector("#b1");
let chart1 = null; 
async function loadd() {

    let url = 'https://juxinglong.github.io/static/data/states.json';

    let r = await fetch(url); // async
    let rj = await r.json(); // async

    let c1 = document.querySelector("#c1");
    if (chart1 != null) {
        chart1.destroy(); 
    }
    c1.innerHTML = ''; 

    let opts = {
        type: "pie",
        data: {
            labels: rj.map(x => x.st),
            datasets: [
                { data: rj.map(x => x.p) },
            ],
        },
    };

    chart1 = new Chart(c1, opts);

    R = rj;
    console.log(rj);

    Swal.fire("Load data");
}

b1.addEventListener("click", loadd);
