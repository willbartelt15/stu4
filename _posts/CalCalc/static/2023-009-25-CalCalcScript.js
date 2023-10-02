
// Get references to the form and result elements
const form = document.getElementById("surveyForm");
const resultElement = document.getElementById("result");

// Function to calculate daily calorie maintenance
function calculateCalorieMaintenance(age, weight, height, gender) {
    // Perform your calorie maintenance calculation here
    // This is just a placeholder example, replace with your actual calculation
    let maintenanceCalories = 0;

    if (gender === "male") {
        maintenanceCalories = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "female") {
        maintenanceCalories = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    return maintenanceCalories;
}

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from form inputs
    const age = parseFloat(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const gender = document.getElementById("gender").value;

    // Calculate daily calorie maintenance
    const maintenanceCalories = calculateCalorieMaintenance(age, weight, height, gender);

    // Display the result in the "result" paragraph
    resultElement.textContent = `Your estimated daily calorie maintenance is: ${maintenanceCalories.toFixed(2)} calories per day`;
});