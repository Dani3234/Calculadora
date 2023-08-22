function clic(val) {
    const num = document.getElementById("input");
    num.value += val;
}

function delete_one(val) {
    const num2 = document.getElementById("input");
    num2 = num2.pop;
    console.log(num2)
}