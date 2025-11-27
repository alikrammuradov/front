function calculate(operation) {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let res = 0;

    if (operation === '+') res = n1 + n2;
    if (operation === '-') res = n1 - n2;
    if (operation === '*') res = n1 * n2;

    if (operation === '/') {
        if (n2 === 0) {
            alert("0-a bölmək olmaz!");
            return;
        }
        res = n1 / n2;
    }

    document.getElementById("result").value = res;
}
