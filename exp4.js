let n;
const e = 1.6e-19;

function printWelcomeMessage() {
    console.log("******************************************************");
    console.log("*                                                    *");
    console.log("*          Welcome to the Physics Experiments        *");
    console.log("*                Practical File Program              *");
    console.log("*                                                    *");
    console.log("******************************************************");
    console.log("");
}

function printFinalMessage() {
    console.log("");
    console.log("******************************************************");
    console.log("*                                                    *");
    console.log("*          Thank you for using the Physics           *");
    console.log("*                Experiments Program!                *");
    console.log("*                                                    *");
    console.log("******************************************************");
    console.log("");
    console.log("We hope you found these simulations insightful and educational.");
    console.log("Your feedback is valuable to us. Please let us know your thoughts and suggestions.");
    console.log("Thank you!");
}

function generateInputs() {
    n = parseInt(document.getElementById("numReadings").value);
    if (isNaN(n) || n < 1) {
        alert("Please enter a valid number of readings (n >= 1).");
        return;
    }

    let wavelengthInputs = document.getElementById("wavelengthInputs");
    let frequencyInputs = document.getElementById("frequencyInputs");
    let gradientInputs = document.getElementById("gradientInputs");

    wavelengthInputs.innerHTML = "<h3>Wavelength (L in nm):</h3>";
    frequencyInputs.innerHTML = "<h3>Frequency (x):</h3>";
    gradientInputs.innerHTML = "<h3>Potential Gradient (y):</h3>";

    for (let i = 0; i < n; i++) {
        wavelengthInputs.innerHTML += `<label for="L${i + 1}">L${i + 1}: </label><input type="text" id="L${i + 1}"><br>`;
        frequencyInputs.innerHTML += `<label for="x${i + 1}">x${i + 1}: </label><input type="text" id="x${i + 1}"><br>`;
        gradientInputs.innerHTML += `<label for="y${i + 1}">y${i + 1}: </label><input type="text" id="y${i + 1}"><br>`;
    }

    // Change button text to "Regenerate Inputs"
    let generateBtn = document.getElementById("generateBtn");
    generateBtn.textContent = "Regenerate Inputs";
}

function parseInput(value) {
    let parsedValue = parseFloat(value);
    if (isNaN(parsedValue) && value.includes('e')) {
        parsedValue = parseFloat(value.split('e')[0]) * Math.pow(10, parseFloat(value.split('e')[1]));
    }
    return parsedValue;
}
// Project: Physics Experiment Website
// Author: tal
// Website: shezad.com


function calculateResults() {
    // Clear previous results
    let output = document.getElementById("results");
    output.innerHTML = "";

    let wavelengthArr = [];
    let frequencyArr = [];
    let gradientArr = [];
    let resultArr = [];
    let sumResult = 0;

    for (let i = 0; i < n; i++) {
        let wavelength = parseInput(document.getElementById(`L${i + 1}`).value);
        let frequency = parseInput(document.getElementById(`x${i + 1}`).value);
        let gradient = parseInput(document.getElementById(`y${i + 1}`).value);

        if (isNaN(wavelength) || isNaN(frequency) || isNaN(gradient)) {
            alert("Please enter valid numeric values.");
            return;
        }

        wavelengthArr.push(wavelength);
        frequencyArr.push(frequency);
        gradientArr.push(gradient);
    }

    // Sum of frequencies
    let sumF = frequencyArr.reduce((a, b) => a + b, 0);
    output.innerHTML += `<p>Sum of frequencies (x): ${sumF}</p>`;

    // Sum of potential gradients
    let sumV = gradientArr.reduce((a, b) => a + b, 0);
    output.innerHTML += `<p>Sum of potential gradients (y): ${sumV}</p>`;

    // Multiply and sum frequency and gradient arrays
    for (let i = 0; i < n; i++) {
        resultArr[i] = frequencyArr[i] * gradientArr[i];
        sumResult += resultArr[i];
    }

    output.innerHTML += "<p>Frequency * Potential Gradient (xy):</p>";
    for (let i = 0; i < n; i++) {
        output.innerHTML += `<p>x${i + 1} * y${i + 1} = ${resultArr[i]}</p>`;
    }
    output.innerHTML += `<p>Sum of products: ${sumResult}</p>`;

    // Sum of squares of frequencies
    let sumSquareResult = 0;
    for (let i = 0; i < n; i++) {
        resultArr[i] = frequencyArr[i] * frequencyArr[i];
        sumSquareResult += resultArr[i];
    }

    output.innerHTML += "<p>Square of frequencies (x^2):</p>";
    for (let i = 0; i < n; i++) {
        output.innerHTML += `<p>(x^2)${i + 1} = ${resultArr[i]}</p>`;
    }
    output.innerHTML += `<p>Sum of squares: ${sumSquareResult}</p>`;

    // Calculate m and c
    let sumX = frequencyArr.reduce((a, b) => a + b, 0);
    let sumY = gradientArr.reduce((a, b) => a + b, 0);
    let sumXY = 0;
    for (let i = 0; i < n; i++) {
        sumXY += frequencyArr[i] * gradientArr[i];
    }
    let sumX2 = 0;
    for (let i = 0; i < n; i++) {
        sumX2 += frequencyArr[i] * frequencyArr[i];
    }
    
    let m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    let c = (sumY * sumX2 - sumX * sumXY) / (n * sumX2 - sumX * sumX);
    
    output.innerHTML += `<p>Calculated m: ${m}</p>`;
    output.innerHTML += `<p>Calculated c: ${c}</p>`;

    let h = m * e; // Planck constant
    let w = -c * 1; // Work function

    output.innerHTML += `<p>Planck constant (h): ${h} J/s</p>`;
    output.innerHTML += `<p>Work function (w): ${w} V</p>`;

    printFinalMessage();
}
