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

/*  if(cityChoice == 3.0) {
    cost+=250
  }
  else if(cityChoice == 3.1) {
    cost+=545
  }
  else if(cityChoice == 2.5) {
    cost+=350
  }
  if(wifi.checked== true) {
  cost+=12
  }

  var bagFee = Number(bags.value) * 25
  cost+=bagFee

  total.innerHTML=cost;
} */
  /* if(departures.value == 1 && arrivals.value == 1) {
  // if(departures.value === arrivals.value) {
    console.log("this is also working");
    cost += 0;
  }
  else if(departure.value == 1 && arrival.value == 2) {
    cost += 350
  }
  else if(departure.value == 1 && arrival.value == 3) {
    cost += 250
  }
  else if(departure.value == 2 && arrival.value == 1) {
    cost += 350
  }
  else if(departure.value == 2 && arrival.value == 2) {
    cost += 0
  }
  else if(departure.value == 2 && arrival.value == 3) {
    cost += 545
  }
  else if(departure.value == 3 && arrival.value == 1) {
    cost += 250
  }
  else if(departure.value == 3 && arrival.value == 2) {
    cost += 545
  }
  else if(departure.value == 3 && arrival.value == 3) {
    cost += 0
  } */
