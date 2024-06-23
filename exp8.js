document.getElementById('experimentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Getting form values
    const x1 = parseFloat(document.getElementById('x1').value);
    const x11 = parseFloat(document.getElementById('x11').value);
    const f = parseFloat(document.getElementById('f').value);
    
    let l = (x11 - x1) / 10; // Loop width in mm
    document.getElementById('l').textContent = `Loop width (l) in mm: ${l.toFixed(2)}`;
    
    // Project: Physics Experiment Website
    // Author: tal
    // Website: shezad.com
   
    l *= 1e-3; // Convert loop width to meters
    document.getElementById('l').textContent += `\nLoop width (l) in meters: ${l.toFixed(6)}`;
    
    const wavelength = 2 * l; // Calculate wavelength
    document.getElementById('wavelength').textContent = `Wavelength (λ) for the ultrasonic wave: ${wavelength.toFixed(6)} meters`;
    document.getElementById('wavelength').textContent += '\n(by using wavelength (λ) = 2 * loop width (l))';
    
    const velocity = f * wavelength; // Calculate velocity
    document.getElementById('velocity').textContent = `Velocity of ultrasonic wave: ${velocity.toFixed(2)} m/s`;
    document.getElementById('velocity').textContent += '\n(by using this formula v = frequency x wavelength)';

    // Show the output box after calculation
    document.getElementById('output').style.display = 'block';
});
