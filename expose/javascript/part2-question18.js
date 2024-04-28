function findTime(){
  d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

setInterval(findTime, 1000);
