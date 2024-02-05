let clickCount = 0;

document.getElementById('tossButton').addEventListener('click', tossCoin);

function tossCoin() {
    const coin = document.getElementById('coin');
    const resultText = document.getElementById('result');

    // Disable button during the animation
    document.getElementById('tossButton').disabled = true;

    // Increase the click count
    clickCount++;

    // Determine the result based on the click count
    const result = clickCount % 2 === 1 ? 'Heads' : 'Tails';

    // Rotate the coin for 10 seconds
    coin.style.transform = 'rotate(720deg)'; // 720 degrees for 2 full rotations
    setTimeout(() => {
        // Update the coin class for animation
        coin.classList.remove('heads', 'tails');
        void coin.offsetWidth; // Trigger reflow for animation to work
        coin.style.transform = ''; // Reset rotation
        coin.classList.add(result.toLowerCase());

        // Enable the button after the animation
        document.getElementById('tossButton').disabled = false;

        // Display the result after a short delay
        setTimeout(() => {
            resultText.innerText = `Result: ${result}`;
        }, 500);
    }, 3000); // 3 seconds
}
