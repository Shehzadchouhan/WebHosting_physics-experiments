document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById('output');
    const diameterInputs = document.getElementById('diameterInputs');
    const thicknessInputs = document.getElementById('thicknessInputs');
    const generateButton = document.querySelector('button[onclick="generateInputs()"]');
    
    let n, Dav = 0.0, dav = 0.0;

    function printWelcomeMessage() {
        console.log("******************************************************");
        console.log("*                                                    *");
        console.log("*          Welcome to the Physics Experiments        *");
        console.log("*                Practical File Program              *");
        console.log("*                                                    *");
        console.log("******************************************************");
    }

    function printFinalMessage() {
        console.log("******************************************************");
        console.log("*                                                    *");
        console.log("*          Thank you for using the Physics           *");
        console.log("*                Experiments Program!                *");
        console.log("*                                                    *");
        console.log("******************************************************");
        console.log("We hope you found these simulations insightful and educational.");
        console.log("Your feedback is valuable to us. Please let us know your thoughts and suggestions on shehzadchouhan260@gmail.com.");
        console.log("Thank you!");
    }

    window.generateInputs = function() {
        diameterInputs.innerHTML = "";
        thicknessInputs.innerHTML = "";

        n = parseInt(document.getElementById('n').value);
        for (let i = 0; i < n; i++) {
            diameterInputs.innerHTML += `<div><label for="D${i}">Diameter D${i+1}: </label><input type="number" id="D${i}" step="0.01"></div>`;
            thicknessInputs.innerHTML += `<div><label for="d${i}">Thickness d${i+1}: </label><input type="number" id="d${i}" step="0.01"></div>`;
        }

        // Change the button text after generating inputs
        generateButton.textContent = "Re-generate Inputs";
    }

    function diameter() {
        Dav = 0.0; // Reset Dav before calculation
        for (let i = 0; i < n; i++) {
            const D = parseFloat(document.getElementById(`D${i}`).value);
            Dav += D;
        }
        Dav /= n;
        console.log(`Average Diameter (Dav) = ${Dav} meters`);
    }

    function thickness() {
        dav = 0.0; // Reset dav before calculation
        for (let i = 0; i < n; i++) {
            const d = parseFloat(document.getElementById(`d${i}`).value);
            dav += d;
        }
        dav /= n;
        console.log(`Average Thickness (dav) = ${dav} meters`);
    }

    window.calculateDielectricConstant = function() {
        printWelcomeMessage();

        const cs = parseFloat(document.getElementById('cs').value);
        const LCG = parseFloat(document.getElementById('LCG').value);
        const LCV = parseFloat(document.getElementById('LCV').value);
        const Vs = parseFloat(document.getElementById('Vs').value);
        const Vd = parseFloat(document.getElementById('Vd').value);
        n = parseInt(document.getElementById('n').value);
        const unit = document.getElementById('unit').value;

        if (isNaN(cs) || isNaN(LCG) || isNaN(LCV) || isNaN(Vs) || isNaN(Vd) || isNaN(n)) {
            output.innerHTML = "<p>Please enter valid numbers for all inputs.</p>";
            return;
        }

        diameter();
        thickness();

        // Unit conversion if needed
        if (unit === 'c') {
            Dav /= 100; // Convert cm to m
            dav /= 100; // Convert cm to m
        }

        // Capacity with dielectric slab (Cd)
        const Cd = (Vs * cs) / Vd;
        console.log(`Cd = ${Cd} F`);

        // Capacity without dielectric slab (Co)
        const numerator = 3.14 * Math.pow(Dav, 2) * 8.85e-12;
        const denominator = 4 * dav;
        const Co = numerator / denominator;
        console.log(`Co = ${Co} F`);

        // Dielectric constant (k)
        const k = Cd / Co;
        console.log(`Your dielectric constant (K) is: ${k}`);

        output.innerHTML = `
            <p>Average Diameter (Dav) = ${Dav} meters</p>
            <p>Average Thickness (dav) = ${dav} meters</p>
            <p>Cd = ${Cd} F</p>
            <p>Co = ${Co} F</p>
            <p>Your dielectric constant (K) is: ${k} (Approximate)</p>
        `;
        // Project: Physics Experiment Website
        // Author: tal
        // Website: shezad.com
       

        printFinalMessage();
    }
});
