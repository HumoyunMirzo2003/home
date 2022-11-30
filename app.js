let body = document.querySelector("body");

setInterval(() => {
    let a = Math.floor(Math.random() * 255);
    let s = Math.floor(Math.random() * 255);
    let d = Math.floor(Math.random() * 255);
    

    body.style.backgroundColor = `rgb(${a}, ${s}, ${d})`;;
  }, 3000);










let chiroq = document.querySelector("#chiroq");

chiroq.style.width = "500px";
chiroq.style.height = "500px";
chiroq.style.textAlign = "center";


setInterval(() => {
  let src = chiroq.getAttribute("src");
  if (src === "./img/och.png") {
    chiroq.setAttribute("src", "./img/yon.png");
  } else {
    chiroq.setAttribute("src", "./img/och.png");
  }
}, 2000);
