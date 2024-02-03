const data = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]


window.addEventListener('load', function () {
  
  data.map((item) => {
    // console.log(item.amount);
    let divBar = document.createElement("div");
    divBar.className = "card__chart-chart-bar";
  
    let divBarBar = document.createElement("div"); 
    divBarBar.className = "card__chart-chart-bar-bar";
    divBarBar.style.height = item.amount + "%";
  
    let divBarMon = document.createElement("div"); 
    divBarMon.className = "card__chart-chart-bar-month";
    divBarMon.innerHTML = item.day;
    
    divBar.appendChild(divBarMon);
    divBar.appendChild(divBarBar);
  
    const bars = document.querySelector(".card__chart-chart");
  
    bars.appendChild(divBar);
  });


  })