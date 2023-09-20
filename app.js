function calculateSize() {
    var ratio = document.getElementById("ratio").value;
    var inputA = parseFloat(document.getElementById("inputA").value);
    var inputB = parseFloat(document.getElementById("inputB").value);
    var inputC = parseFloat(document.getElementById("inputC").value);

    var resultA, resultB, resultC;

    if (ratio === "16:9") {
        resultA = (inputB * 9) / 16; // == (inputC*9)/ Math.sqrt(337)
        resultB = (inputA * 16) / 9; // == (inputC *16)/ Math.sqrt(337)
        resultC = (inputA * Math.sqrt(337)) / 9; // == (inputB * Math.sqrt(337))/ 16
    } else if (ratio === "4:3") {
        resultA = (inputB * 3) / 4; // == (inputC *3) / 5
        resultB = (inputA * 4) / 3; // == (inputC * 4) / 5
        resultC = (inputA * 5) / 3; // == (inputB * 5) / 4
    } else if (ratio === "1:1") {
        resultA = inputB; // == inputC / Math.sqrt(2)
        resultB = inputA; // == inputC / Math.sqrt(2)
        resultC = inputA * Math.sqrt(2); // == b* Math.sqrt(2)
    }

    document.getElementById("resultA").textContent =   resultA
    document.getElementById("resultB").textContent =  resultB;
    document.getElementById("resultC").textContent =  resultC;
}

calculateSize();
