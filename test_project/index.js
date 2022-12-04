const hourEl = document.getElementById("hour");
const minuteEL = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

//setting the attrebutes constant by recalling their id tag

function Clock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = " PM";
  }

  h = h < 10 ? "0" + h : h;

  m = m < 10 ? "0" + m : m;
  
  s = s < 10 ? "0" + s : s;


  hourEl.innerText = h;
  minuteEL.innerText = m;
  secondEl.innerText = s;
  ampmEl, (innerText = "ampm")
  setTimeout(()=>{
    Clock()
}, 1000)
}

Clock();