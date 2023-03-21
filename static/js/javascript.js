document.addEventListener("DOMContentLoaded", () => {
    // Get all the cards
    const cards = document.querySelectorAll(".card");
  
    // Loop through each card
    cards.forEach(card => {
      // Check if the card has a "pdf" class
      if (card.classList.contains("pdf")) {
        // Create a new button element
        const downloadButton = document.createElement("button");
        // Set the button text to "Download"
        downloadButton.innerText = "Download";
        downloadButton.className="download center"
        // Add a click event listener to the button
        downloadButton.addEventListener("click", () => {
          // Replace this with the download link of the PDF file
          window.location.href = "{% data.pdf %}";
        });
        // Append the button to the card
        card.appendChild(downloadButton);
      }
    });
  });
// Get all the card elements
const cards = document.querySelectorAll(".card");

// Loop through the cards and add event listeners
cards.forEach(card => {
  // Add a click event listener to the card
  card.addEventListener("click", () => {
    // Toggle the "active" class on the card
    card.classList.toggle("active");
  });

  // Add a mouseenter event listener to the card
  card.addEventListener("mouseenter", () => {
    // Add the "hover" class to the card
    card.classList.add("hover");
  });

  // Add a mouseleave event listener to the card
  card.addEventListener("mouseleave", () => {
    // Remove the "hover" class from the card
    card.classList.remove("hover");
  });
});
