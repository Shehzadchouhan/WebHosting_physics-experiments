document.getElementById('calculateButton').addEventListener('click', function(event) {
    event.preventDefault();

    const d = parseFloat(document.getElementById('diameter').value);
    const l = parseFloat(document.getElementById('length').value);
    const As = parseFloat(document.getElementById('As').value);
    const Ac = parseFloat(document.getElementById('Ac').value);
    const N = parseFloat(document.getElementById('demagFactor').value);
    const D = parseFloat(document.getElementById('coilDiameter').value);
    const gx = parseFloat(document.getElementById('gx').value);
    const gy = parseFloat(document.getElementById('gy').value);
    const Go = parseFloat(document.getElementById('Go').value);
    const Uo = parseFloat(document.getElementById('Uo').value);
    const pi = 3.14;

    let Area_Ratio = As / Ac;
    document.getElementById('areaRatio').textContent = `Area Ratio (As/Ac): ${Area_Ratio.toFixed(2)} mm`;

    const ironType = document.querySelector('input[name="ironType"]:checked').value;

    let loop_width, intercept, tip_height, Hc, R, S, ex, Eyr, Eys;

    if (ironType === 'softIron') {
        loop_width = parseFloat(document.getElementById('loop_width').value);
        intercept = parseFloat(document.getElementById('intercept').value);
        tip_height = parseFloat(document.getElementById('tip_height').value);
    } else if (ironType === 'hardIron') {
        loop_width = parseFloat(document.getElementById('loop_width2').value);
        intercept = parseFloat(document.getElementById('intercept2').value);
        tip_height = parseFloat(document.getElementById('tip_height2').value);
    }

    // Coercivity Calculation
    if (Area_Ratio === N) {
        document.getElementById('Hc').textContent = 'Error: Division by zero in coercivity calculation!';
    } else {
        ex = 0.5 * loop_width;
        Hc = (Go * ex) / (Area_Ratio - N);
        document.getElementById('Hc').textContent = `Coercivity (Hc): ${Hc.toFixed(2)}`;
    }

    // Retentivity Calculation
    if (gy === 0 || (Area_Ratio - N) === 0) {
        document.getElementById('R').textContent = 'Error: Division by zero in retentivity calculation!';
    } else {
        Eyr = intercept / 2;
        R = (Go * Uo * gx * Eyr) / (gy * (Area_Ratio - N) * 4 * pi);
        document.getElementById('R').textContent = `Retentivity (R): ${R.toFixed(2)} gauss`;
    }

    // Saturation Magnetization Calculation
    if (gy === 0 || (Area_Ratio - N) === 0) {
        document.getElementById('S').textContent = 'Error: Division by zero in saturation magnetization calculation!';
    } else {
        Eys = 0.5 * tip_height;
        S = (Go * Uo * gx * Eys) / (gy * (Area_Ratio - N) * 4 * pi);
        document.getElementById('S').textContent = `Saturation Magnetization (S): ${S.toFixed(2)} gauss`;
    }
});
// Project: Physics Experiment Website
// Author: tal
// Website: shezad.com


// Show/hide inputs based on iron type selection
const softIron = document.getElementById('softIron');
const hardIron = document.getElementById('hardIron');
const softIronInputs = document.getElementById('softIronInputs');
const hardIronInputs = document.getElementById('hardIronInputs');

softIron.addEventListener('change', function() {
    if (this.checked) {
        softIronInputs.style.display = 'block';
        hardIronInputs.style.display = 'none';
    }
});

hardIron.addEventListener('change', function() {
    if (this.checked) {
        hardIronInputs.style.display = 'block';
        softIronInputs.style.display = 'none';
    }
});
