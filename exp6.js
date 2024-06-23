function calculate() {
    const L = parseFloat(document.getElementById('length').value);
    const V1 = parseFloat(document.getElementById('voltage1').value);
    const V2 = parseFloat(document.getElementById('voltage2').value);

    const fibre_loss = (20 / L) * Math.log10(V1 / V2);
    const att_loss = fibre_loss / 4.343;

    document.getElementById('fibre-loss').innerText = `Your Fibre loss is: ${fibre_loss.toFixed(2)} dB/km`;
    document.getElementById('attenuation-loss').innerText = `Attenuation loss is: ${att_loss.toFixed(2)} km^-1`;
}

    // Project: Physics Experiment Website
    // Author: tal
    // Website: shezad.com
   