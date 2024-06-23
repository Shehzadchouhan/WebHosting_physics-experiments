function calculate() {
    const L = parseFloat(document.getElementById('distance').value);
    const n = parseInt(document.getElementById('num-readings').value);

    const diameterInputs = document.querySelectorAll('.diameter-input');
    let sumD = 0.0;

    for (let i = 0; i < n; i++) {
        sumD += parseFloat(diameterInputs[i].value);
    }

    // Project: Physics Experiment Website
    // Author: tal
    // Website: shezad.com
   
    const avgD = sumD / n;
    const in_Tan = avgD / (2 * L);
    const theta = Math.atan(in_Tan);
    const theta_in_degrees = theta * (180.0 / Math.PI);
    const NA = Math.sin(theta);

    document.getElementById('avg-diameter').innerText = `Average Diameter (Diameter spot): ${avgD.toFixed(2)} cm`;
    document.getElementById('theta').innerText = `Acceptance angle (theta): ${theta.toFixed(2)} radians`;
    document.getElementById('theta-deg').innerText = `Acceptance angle in degrees (theta): ${theta_in_degrees.toFixed(2)} degrees`;
    document.getElementById('na').innerText = `Numerical Aperture (NA): ${NA.toFixed(2)}`;
}

document.getElementById('num-readings').addEventListener('change', function() {
    const n = parseInt(this.value);
    const diameterInputsContainer = document.getElementById('diameter-inputs');
    diameterInputsContainer.innerHTML = '';

    for (let i = 0; i < n; i++) {
        const inputGroup = document.createElement('div');
        inputGroup.classList.add('form-group');

        const label = document.createElement('label');
        label.innerText = `D${i + 1}:`;

        const input = document.createElement('input');
        input.type = 'number';
        input.step = '0.01';
        input.classList.add('diameter-input');

        inputGroup.appendChild(label);
        inputGroup.appendChild(input);
        diameterInputsContainer.appendChild(inputGroup);
    }
});
