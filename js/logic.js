function fareMe() {
  var cityChoice = Number(departures.value) + Number(arrivals.value)
  var cost = 0;
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
  switch(Number(seating.value)) {
    case 1:
      cost+=200
      break;
    case 2:
      cost+=500
      break;
  }
  if(wifi.checked== true) {
  cost+=12
  }
  var bagFee = Number(bags.value) * 25
  cost+=bagFee
  total.innerHTML=cost;
}
