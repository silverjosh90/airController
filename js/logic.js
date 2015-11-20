var cost = 0;
function finalCost(){
  cityVal();
  seatVal();
  seatVal();
  wifiVal();
  bagVal();
  total.innerHTML=cost;
}

function cityVal() {
  var cityChoice = Number(departures.value) + Number(arrivals.value)
  switch(cityChoice) {
    case 3.0:
      cost+=250;
      break;
    case 3.1:
      cost+=545
    case 2.5:
      cost+=350
      break;
  }
}

function seatVal() {
  switch(Number(seating.value)) {
    case 1:
      cost+=200
      break;
    case 2:
      cost+=500
      break;
  }
}
function wifiVal(){
  if(wifi.checked== true) {
  cost+=12
  }
}
function bagVal(){
  var bagFee = Number(bags.value) * 25
  cost+=bagFee
}
