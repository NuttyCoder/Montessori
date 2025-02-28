// Homepage animal hover effect (optional enhancement)
document.querySelectorAll('.animal').forEach(animal => {
    animal.addEventListener('click', () => {
        console.log(`${animal.alt} clicked!`);
    });
});

// Lion page sound button
const soundBtn = document.getElementById('sound-btn');
const lionSound = document.getElementById('lion-sound');

if (soundBtn && lionSound) {
    soundBtn.addEventListener('click', () => {
        lionSound.play();
    });
}
