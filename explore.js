document.querySelectorAll('.careerCard').forEach(card => {
    card.addEventListener('click', () => {
        alert('More details about the career will be shown here!');
        // You can implement a modal or redirect to another page for full career details
    });
});

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
