



function ch() {
    let disp = document.getElementById("image1");
    if (disp.src.match("./imgs/1.jpg")) {
        disp.src = "./imgs/33.jpg";
        disp.style.transform = "scale(1.1)";
    } else {
        disp.src = "./imgs/1.jpg";
    }
}

let img = document.querySelector(".secon");
let bn2 = document.querySelector("#left");

// onclick="document.getElementById('soc').src='./imgs/6.jpg'"



function che() {
    bn2 = document.getElementById("#soc")
}