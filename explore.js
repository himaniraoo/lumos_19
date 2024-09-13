
// Modal functionality
const modal = document.getElementById("careerModal");
const btn = document.getElementById("addCareerBtn");
const span = document.getElementsByClassName("close")[0];

// Show modal on clicking the button
btn.onclick = function() {
    modal.style.display = "block";
}

// Close modal on clicking the 'x'
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal if clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
document.getElementById("careerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById("careerTitle").value;
    const earnings = document.getElementById("careerEarnings").value;
    const subjects = document.getElementById("careerSubjects").value;
    const exams = document.getElementById("careerExams").value;
    const colleges = document.getElementById("careerColleges").value;
    const imageUrl = document.getElementById("careerImage").value;

    // Create new career card
    const newCareerCard = document.createElement("div");
    newCareerCard.classList.add("careerCard");

    newCareerCard.innerHTML = `
        <img src="${imageUrl}" alt="${title} Career">
        <div class="careerInfo">
            <h2>${title}</h2>
            <p>Potential Earnings: ${earnings}</p>
            <p>Required Subjects: ${subjects}</p>
            <p>Exams Required: ${exams}</p>
            <p>Recommended Colleges: ${colleges}</p>
        </div>
    `;

    // Append the new card to the career grid
    document.getElementById("careerGrid").appendChild(newCareerCard);

    // Reset form and close modal
    document.getElementById("careerForm").reset();
    modal.style.display = "none";
});
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('searchBar');
    const careerCards = document.querySelectorAll('.careerCard');

    // Function to filter careers based on the search query
    searchBar.addEventListener('input', function () {
        const searchQuery = searchBar.value.toLowerCase();

        // Loop through all career cards
        careerCards.forEach(function (card) {
            const careerTitle = card.querySelector('h2').textContent.toLowerCase();

            // Check if the career title matches the search query
            if (careerTitle.includes(searchQuery)) {
                card.style.display = 'flex'; // Show the card if it matches
            } else {
                card.style.display = 'none'; // Hide the card if it doesn't match
            }
        });
    });
    
    // Modal handling
    const modal = document.getElementById("careerModal");
    const addCareerBtn = document.getElementById("addCareerBtn");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Open the modal when the add button is clicked
    addCareerBtn.onclick = function() {
        modal.style.display = "block";
    }

    // Close the modal when the close button is clicked
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
