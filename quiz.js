document.getElementById('careerQuiz').addEventListener('submit', function(event) {
    event.preventDefault();

    // Initialize career scores
    let careerScores = {
        "Pilot": 0,
        "Software Engineer": 0,
        "Journalist": 0,
        "Fashion Designer": 0
    };

    // Collect answers
    const answers = new FormData(this);

    // Add points to careers based on answers
    answers.forEach((value) => {
        careerScores[value]++;
    });

    // Find the career with the most points
    let suggestedCareer = Object.keys(careerScores).reduce((a, b) => careerScores[a] > careerScores[b] ? a : b);

    // Display the result
    const resultDiv = document.getElementById('result');
    const careerResult = document.getElementById('careerResult');
    const careerDescription = document.getElementById('careerDescription');
    const careerOptionsDiv = document.getElementById('careerOptions');

    // Update career result text and description
    switch (suggestedCareer) {
        case "Pilot":
            careerResult.textContent = "Pilot";
            careerDescription.textContent = "You love exploring the world and navigating aircraft. A career as a Pilot might be perfect for you.";
            break;
        case "Software Engineer":
            careerResult.textContent = "Software Engineer";
            careerDescription.textContent = "You enjoy solving problems and working with technology. Software engineering could be a great fit.";
            break;
        case "Journalist":
            careerResult.textContent = "Journalist";
            careerDescription.textContent = "You have a passion for storytelling and sharing information. Journalism might be the right path.";
            break;
        case "Fashion Designer":
            careerResult.textContent = "Fashion Designer";
            careerDescription.textContent = "Your creative talents shine through design. Fashion design could be the career for you.";
            break;
        default:
            careerResult.textContent = "Explorer";
            careerDescription.textContent = "You have a broad range of interests. You might explore multiple career paths.";
    }

    // Show the result section
    resultDiv.style.display = 'block';

    // Show the career options section with only the suggested career
    careerOptionsDiv.style.display = 'block';
    careerOptionsDiv.innerHTML = `
        <h3>Explore More About This Career:</h3>
        <button class="careerOption" data-career="${suggestedCareer}">${suggestedCareer}</button>
    `;
});

// Handle career option click
document.getElementById('careerOptions').addEventListener('click', function(event) {
    if (event.target.classList.contains('careerOption')) {
        const career = event.target.getAttribute('data-career');
        window.location.href = 'after_explore.html?career=' + encodeURIComponent(career);
    }
});
