// JavaScript for Animations and Interactions
const loveButton = document.querySelector('.love-button');
const greeting = document.querySelector('.greeting');
const body = document.body;

loveButton.addEventListener('click', () => {
    // Hide the button
    loveButton.style.display = 'none';

    // Show the greeting
    greeting.classList.add('show');

    // Create colorful balloons
    const colors = ['#ff6f61', '#ffcc00', '#00ccff', '#ff00cc', '#00ff99'];
    for (let i = 0; i < 30; i++) { // Increase the number of balloons
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDuration = `${Math.random() * 4 + 3}s`;
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(balloon);

        // Remove balloon after animation ends
        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }
});
