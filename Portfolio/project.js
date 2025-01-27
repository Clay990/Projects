
let dod = document.querySelectorAll(".d");
let dode = document.querySelector("h2")
let body = document.body

let dark = document.getElementById("dark");
dark.onclick = () => {
    if (body.style.backgroundColor == "rgb(212, 255, 223)") {
        body.style.backgroundColor = "black";
        let a=0;
        for(dods of dod) {
            dod[a].style.color = "white";
            dode.style.color = "white";
            a++;
            dark.setAttribute("src", "src/img/light.png")
        }
    } else {
        body.style.backgroundColor = "#d4ffdf";
        let a=0;
        for(dods of dod) {
            dod[a].style.color = "black";
            dode.style.color = "black";
            a++;
            dark.setAttribute("src", "src/img/dark.png")
        }
    }
   


}