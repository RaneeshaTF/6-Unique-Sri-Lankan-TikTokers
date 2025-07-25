document.addEventListener('DOMContentLoaded', () => {
    // Select all like buttons on the page
    const likeButtons = document.querySelectorAll('.like-button');

    // Loop through each button and add an event listener
    likeButtons.forEach(button => {
        // Find the sibling element that will display the like count
        const likeCountSpan = button.nextElementSibling;

        // Initialize like count from the text content of the span, or 0 if empty/not a number
        let likeCount = parseInt(likeCountSpan.textContent) || 0;
        // Ensure the initial display is correct if you manually set a number in HTML
        likeCountSpan.textContent = likeCount;


        button.addEventListener('click', () => {
            likeCount++; // Increment the count
            likeCountSpan.textContent = `${likeCount}`; // Update the displayed count

            // Optional: Provide feedback to the user on the button
            if (likeCount === 1) {
                button.textContent = "Liked!";
                button.style.backgroundColor = '#007bff'; // Change color after first like
            }
        });
    });
});