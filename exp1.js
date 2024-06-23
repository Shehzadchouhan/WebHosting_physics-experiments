document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById('output');

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

    function calculateDivergence() {
        printWelcomeMessage();

        const D = parseFloat(document.getElementById('D').value);
        const w1 = parseFloat(document.getElementById('w1').value);
        const w2 = parseFloat(document.getElementById('w2').value);
        const w3 = parseFloat(document.getElementById('w3').value);

        if (isNaN(D) || isNaN(w1) || isNaN(w2) || isNaN(w3)) {
            output.innerHTML = "<p>Please enter valid numbers for all inputs.</p>";
            return;
        }

        const a = Math.pow(w1, 2);
        const b = Math.pow(w2, 2);
    //     // 
    //     Project: Physics Experiment Website
    //     Author: tal
    //     Website: shezad.com
    //  // 
        const c = Math.pow(w3, 2);

        const d = a - (2 * b) + c;
        const e = d / 2;
        const f = Math.sqrt(e);
        const g = f / 200;

        output.innerHTML = `<p>Angle of divergence (theta) = ${g} rad</p>`;

        printFinalMessage();
    }

    window.calculateDivergence = calculateDivergence;
});


