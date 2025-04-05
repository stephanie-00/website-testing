// script.js

// Handle user name input and redirect to interest selection
document.getElementById('name-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;

    if (username) {
        // Hide the name input form and show the interest selection form
        document.getElementById('user-input').style.display = 'none';
        document.getElementById('interest-selection').style.display = 'block';
    } else {
        alert("Please enter a valid name.");
    }
});

// Automatically capitalize the first letter of the name input
document.getElementById('username').addEventListener('input', function() {
    let inputValue = document.getElementById('username').value;
    document.getElementById('username').value = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
});

// Handle interest form submission and display recommended courses
document.getElementById('interest-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get selected interests
    const interests = [];
    document.querySelectorAll('input[name="interest"]:checked').forEach((checkbox) => {
        interests.push(checkbox.value);
    });

    if (interests.length > 0) {
        // Hide the interest selection form and show recommended courses
        document.getElementById('interest-selection').style.display = 'none';
        document.getElementById('recommended-courses').style.display = 'block';

        // Display some recommended courses based on selected interests
        const courseList = document.getElementById('courses-list');
        courseList.innerHTML = '';  // Clear previous content

        interests.forEach((interest) => {
            const courseItem = document.createElement('div');
            courseItem.innerHTML = `<p><strong>${interest} Course 1</strong></p>
                                    <p>Description of ${interest} course...</p>
                                    <button>Enroll</button><br><br>`;
            courseList.appendChild(courseItem);
        });
    } else {
        alert("Please select at least one interest.");
    }
});
