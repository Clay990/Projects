let img = document.querySelectorAll("img");
let win = document.getElementById("srt")
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let compute = document.getElementById("compute");
let ywin = 0;
let cwin = 0;
let com = 0;
let user = 0;
function checkid() {
    rock.removeAttribute("id", "loss")
    rock.removeAttribute("id", "win")
    paper.removeAttribute("id", "loss")
    paper.removeAttribute("id", "win")
    scissor.removeAttribute("id", "loss")
    scissor.removeAttribute("id", "win")
}
function gamedraw() {
    compute.innerText = "YOU " + ywin + "  COM " + cwin;
}
function userloss() {
    cwin += 1;
    compute.innerText = "YOU " + ywin + "  COM " + cwin;
}
function userwin() {
    ywin += 1;
    compute.innerText = "YOU " + ywin + "  COM " + cwin;
}
rock.onclick = () => {
    setTimeout(() => {
        checkid()
    }, 400);
    user = 0;
    com = Math.floor(Math.random() * 3);
    if (user == com) {
        win.innerText = "Draw! Rock and rock just sit there... staring.";
        gamedraw();
        rock.setAttribute("id", "loss")
    } else if (com == 1) {
        win.innerText = "Rock gets ambushed by a sneaky sheet of paper—unfair!";
        userloss()
        rock.setAttribute("id", "loss")
        paper.setAttribute("id", "win")
    } else {
        win.innerText = "Rock smashes scissors like a boss!";
        userwin()
        rock.setAttribute("id", "win")
        scissor.setAttribute("id", "loss")
    }
}
paper.onclick = () => {
    setTimeout(() => {
        checkid()
    }, 400);
    user = 1;
    com = Math.floor(Math.random() * 3);
    if (user == com) {
        win.innerText = "Draw! Paper and paper just chill—flat and fabulous!";
        gamedraw();
        paper.setAttribute("id", "loss")
    } else if (com == 2) {
        win.innerText = "Paper gets shredded into tissues by scissors!";
        userloss()
        paper.setAttribute("id", "loss")
        scissor.setAttribute("id", "win")
    } else {
        win.innerText = "Paper hugs rock into submission—aww, so sweet!";
        userwin()
        rock.setAttribute("id", "loss")
        paper.setAttribute("id", "win")
    }
}
scissor.onclick = () => {
    setTimeout(() => {
        checkid()
    }, 400);
    user = 2;
    com = Math.floor(Math.random() * 3);
    if (user == com) {
        win.innerText = "Draw! It's a tie! Literally. No one folds, snips, or smashes.";
        gamedraw();
        scissor.setAttribute("id", "loss")
    } else if (com == 0) {
        win.innerText = "Scissors snap under the weight of mighty rock!";
        userloss()
        scissor.setAttribute("id", "loss")
        rock.setAttribute("id", "win")
    } else {
        win.innerText = "Scissors turn paper into a modern art masterpiece!";
        userwin()
        paper.setAttribute("id", "loss")
        scissor.setAttribute("id", "win")
    }
}
