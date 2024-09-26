// Pls don't look at my code. It's ugly.
//0 = optel
//1 = aftrek 


let num1 = 0
let num2 = 0
let bezig = 1
let func = 0

function negate() {
    if (bezig == 1) {
        num1 = -num1
    } else if (bezig == 2) {
        num2 = -num2
    }
    let ResultElement = document.getElementById("result")
    ResultElement.innerHTML = String(-parseInt(ResultElement.innerHTML))
}

function print(msg) {
    console.log(msg)
}

function reset() {
    let ResultElement = document.getElementById("result")
    bezig = 1
    num1 = parseInt(ResultElement.innerHTML)
    num2 = 0
    func = 0
}

function add(number) {
    print("hihihihia")
    let FirstNumbers = []
    let ResultElement = document.getElementById("result")
    FirstNumbers.push(number)
    print(FirstNumbers)
    for (i in FirstNumbers) {
        console.log("hehehe", FirstNumbers)
        ResultElement.innerHTML += String(FirstNumbers[i])
        if (bezig == 1) {
            num1 = parseInt(ResultElement.innerHTML)
        } else if (bezig == 2) {
            num2 = parseInt(ResultElement.innerHTML)
        }
    }
}

function clear() {
    let ResultElement = document.getElementById("result")
    ResultElement.innerHTML = "0"
}
window.onload = function () {
    for (let i = 0; i < 5; i++) {
        document.getElementById(String(i)).addEventListener(onclick, add(i))
    }
    clear()
}

function readyforswitch(id) {
    if (id == 0) {
        set(num1, num2, id)
    }
    else if (id == 1) {
        set(num1, num2, id)
    }
}

function set(eerste, tweede, functie) {
    if (bezig == 1) {
        bezig = 2
        func = functie
        clear()
    } else if (bezig == 2) {
        bezig = 3
        clear()
    }
}

function bereken() {
    if (bezig == 2) {
        if (func == 0) {
            let ResultElement = document.getElementById("result")
            ResultElement.innerHTML = num1 + num2
            print(ResultElement.innerHTML)
            reset()
        } else if (func == 1) {
            let ResultElement = document.getElementById("result")
            ResultElement.innerHTML = num1 - num2
            print(ResultElement.innerHTML)
            reset()
        }
    }
} //source code 
//og code from gudo
