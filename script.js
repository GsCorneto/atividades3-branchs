const num1 = document.getElementById("i1")
const num2 = document.getElementById("i2")

const multiplicação = function(){
    let total = num1 * num2
    let out = document.getElementById("total")
    out.innerHTML = total
    }

const divi = function(){
    let total = num1 / num2
    let out = document.getElementById("total")
    out.innerHTML = total
    }
