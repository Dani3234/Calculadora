function clic(val) {
    const input = document.getElementById("input");
    input.value += val;
}

function calc() {
    const input = document.getElementById("input");
    const result = eval(input.value);
    
    input.value = result; 
}

function del() {
    const input = document.getElementById("input");
    input.value = ""
}

function del_one() {
    const input = document.getElementById("input")
    input.value = input.value.slice(0, -1);
}