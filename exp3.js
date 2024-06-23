document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById('output');
    const cornerInputs = document.getElementById('cornerInputs');
    const generateButton = document.getElementById('generateButton');
    const sidebar = document.getElementById('sidebar');

    let numReadings = 0;

    function generateCornerInputs() {
        numReadings = parseInt(document.getElementById('numReadings').value);
        if (isNaN(numReadings) || numReadings < 1) {
            alert("Please enter a valid number of readings (numReadings >= 1).");
            return;
        }

        cornerInputs.innerHTML = "";
        for (let i = 0; i < numReadings; i++) {
            cornerInputs.innerHTML += `<div class="input-group">
                <label for="P${i + 1}">Enter distance between corners P${i + 1}P${i + 1}': </label>
                <input type="number" id="P${i + 1}" step="0.01">
            </div>`;
        }
        generateButton.innerText = "Regenerate Inputs";
    }

    window.calculateDiffraction = function() {
        let wavelength = convertToNumber(document.getElementById("wavelength").value);
        let distance = parseFloat(document.getElementById("distance").value);
        numReadings = parseInt(document.getElementById("numReadings").value);

        if (isNaN(wavelength) || isNaN(distance) || isNaN(numReadings) || numReadings < 1) {
            alert("Please enter valid input for wavelength, distance, and number of readings.");
            return;
        }

        let P = [];
        let y = [];
        let div = [];
        let rad = [];
        let radDegrees = [];
        let d = [];
        let sin = [];

        for (let i = 0; i < numReadings; i++) {
            P[i] = parseFloat(document.getElementById(`P${i + 1}`).value);
            if (isNaN(P[i])) {
                alert(`Please enter valid input for P${i + 1}.`);
                return;
            }
            // Project: Physics Experiment Website
            // Author: tal
            // Website: shezad.com
           

            y[i] = P[i] / 2;
            div[i] = y[i] / distance;
            rad[i] = Math.atan(div[i]);
            radDegrees[i] = rad[i] * (180 / Math.PI);
            sin[i] = Math.sin(rad[i]);

            if (Math.abs(sin[i]) < 1e-6) {
                alert(`The angle for P${i + 1} is too small. Please enter valid input for P${i + 1}.`);
                return;
            }

            d[i] = (i + 1) * wavelength / sin[i];
            d[i] = d[i] * Math.pow(10, 5); // Convert to 10^-5 format
        }

        output.innerHTML = "";
        for (let i = 0; i < numReadings; i++) {
            let d_formatted = d[i].toFixed(0);
            output.innerHTML += `<p>y${i + 1} = ${y[i].toFixed(2)} cm,Angle of diffraction( theta${i + 1}) = ${radDegrees[i].toFixed(3)} degrees, sin(theta${i + 1}) = ${sin[i].toFixed(2)}, d${i + 1} = ${d_formatted} * 10^-5 cm (~Approximate)</p>`;
        }
    }

    generateButton.addEventListener("click", generateCornerInputs);

    // Function to copy C++ code to clipboard
    window.copyCode = function() {
        const cppCode = document.getElementById('cppCode');
        cppCode.select();
        document.execCommand('copy');
        alert('C++ code copied to clipboard!');
    }

    // Function to toggle sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('active');
    }

    // Function to open online C++ compiler
    window.openOnlineCompiler = function() {
        const cppCode = document.getElementById('cppCode').value;
        // Replace this link with the actual link of an online C++ compiler
        const compilerLink = "https://www.onlinegdb.com/online_c++_compiler";
        window.open(compilerLink, '_blank');
    }

    // Utility function to convert input to number
    function convertToNumber(value) {
        return parseFloat(value);
    }
    // Toggle visibility of C++ code area
function toggleCppCode() {
    var cppCodeArea = document.getElementById('cpp-code');
    cppCodeArea.classList.toggle('show');
}

});
