// console.log("HELLO");
// setTimeout(function () {
//     console.log("THIS IS");
// }, 2000);
// console.log("DOG");
let isX = true;
let matrex = [[], [], []];
let i = 0;
let iswin = false;
function XorO() {
    if (isX) {
        isX = false;
        return "X";
    } else {
        isX = true;
        return "O";
    }
}
// win();
function clr() {
    let x = document.getElementById("clr").value;
    if (x == "restart") {
        let a = document.querySelectorAll(".area");
        for (let i = 0; i < a.length; i++) {
            a[i].textContent = "";
            a[i].style.color = "black";
        }
        console.log(...matrex);
        matrex = [[], [], []];
        console.log(...matrex);
        i = 0;
        iswin = false;
        document.getElementById("interface").style.display = "none";
    } else {
        document.getElementById("interface").style.display = "none";
    }
}
function win(x, y) {
    if (matrex[0][0] == matrex[1][1] && matrex[1][1] == matrex[2][2]) {
        console.log("you win");
        win_line(x, y, "d");

        iswin = true;
    } else if (matrex[0][2] == matrex[1][1] && matrex[1][1] == matrex[2][0]) {
        console.log("you win");
        win_line(x, y, "-d");
        iswin = true;
    } else {
        if (matrex[0][y] == matrex[1][y] && matrex[1][y] == matrex[2][y]) {
            console.log("you win");
            iswin = true;
            win_line(x, y, "c");
        } else if (
            matrex[x][0] == matrex[x][1] &&
            matrex[x][1] == matrex[x][2]
        ) {
            console.log("you win");
            iswin = true;
            win_line(x, y, "r");
        } else {
        }
    }
}
function win_line(x, y, p) {
    for (let i = 0; i < 3; i++) {
        if (p == "c") {
            document.getElementById("area" + i + y).style.color =
                "rgb(0, 255, 0)";
        } else if (p == "r") {
            document.getElementById("area" + x + i).style.color =
                "rgb(0, 255, 0)";
        } else if (p == "-d") {
            document.getElementById("area" + i + (2 - i)).style.color =
                "rgb(0, 255, 0)";
        } else if (p == "d") {
            document.getElementById("area" + i + i).style.color =
                "rgb(0, 255, 0)";
        }
    }
    setTimeout(function () {
        document.getElementById("interface").style.display = "block";
        document.getElementById("clr").value = "restart";
        console.log("THIS IS");
    }, 1000);
}
function palce(x, y) {
    if (matrex[x][y] == undefined && !iswin) {
        i++;
        let xo = XorO();
        console.log(xo);
        matrex[x][y] = xo;
        document.getElementById("area" + x + y).textContent = xo;
        if (i >= 5) {
            win(x, y);
        }
    }
}

// document.getElementById('area0').textContent = 'x';

document.getElementById("area00").onclick = function () {
    palce(0, 0);
};
document.getElementById("area01").onclick = function () {
    palce(0, 1);
};
document.getElementById("area02").onclick = function () {
    palce(0, 2);
};
document.getElementById("area10").onclick = function () {
    palce(1, 0);
};
document.getElementById("area11").onclick = function () {
    palce(1, 1);
};

document.getElementById("area12").onclick = function () {
    palce(1, 2);
};
document.getElementById("area20").onclick = function () {
    palce(2, 0);
};
document.getElementById("area21").onclick = function () {
    palce(2, 1);
};
document.getElementById("area22").onclick = function () {
    palce(2, 2);
};
