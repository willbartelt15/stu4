---
toc: true
comments: false
layout: post
title: Frontend Code
type: hacks
courses: { compsci: {week: 9} }
---

<!DOCTYPE html>
<html>
<head>
    <title>Calorie Calculator</title>
</head>
<body>
    <h1>Calorie Calculator</h1>
    <p>Please input your age, weight, height, activity level, and Gender into the form below and create a username. 
        We will store this information along with your daily calorie maintence levels in order to provide you with a meal plan
        so that you may achieve your weight goal. The conversion chart below may help you estimate your metric measurements if you
        do not know them off the top of your head.
    </p>
    <form id="calorie-form">
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" required><br><br>

        <label for="weight">Weight (kg):</label>
        <input type="number" id="weight" name="weight" required><br><br>

        <label for="height">Height (cm):</label>
        <input type="number" id="height" name="height" required><br><br>

        <label for="activity">Activity Level:</label>
        <select id="activity" name="activity">
            <option value="sedentary">Sedentary</option>
            <option value="lightly_active">Lightly Active</option>
            <option value="moderately_active">Moderately Active</option>
            <option value="very_active">Very Active</option>
        </select><br><br>

        <label for="gender">Gender:</label>
        <input type="radio" id="male" name="gender" value="male" required>
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" required>
        <label for="female">Female</label><br><br>

        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>

        <input type="button" value="Calculate Calories" onclick="calculateCalories()">
    </form>

    <div id="result"></div>

    <script>
        function calculateCalories() {
            const age = parseFloat(document.getElementById('age').value);
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            const activity = document.getElementById('activity').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const username = document.getElementById('username').value;

            const userData = {
                username: username,
                age: age,
                weight: weight,
                height: height,
                activity: activity,
                gender: gender
            };

            // Calculate the calorie maintenance on the client side
            const calorie_maintenance = calculateClientCalories(userData);

            // Send the user data to the server to save it
            saveUserDataOnServer(userData);

            // Display the result
            document.getElementById('result').innerHTML = `Hello, ${username}! Your Calorie Maintenance is: ${calorie_maintenance.toFixed(2)} kcal`;
        }

        function calculateClientCalories(userData) {
            // Implement your calorie calculation logic here on the client side
            // Replace this with your actual calculation
            const age = userData.age;
            const weight = userData.weight;
            const height = userData.height;
            const activity = userData.activity;
            const gender = userData.gender;

            // Example calorie calculation (Harris-Benedict equation)
            if (gender === 'male') {
                return 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
            } else {
                return 447.593 + 9.247 * weight + 3.098 * height - 5.677 * age;
            }
        }

        function saveUserDataOnServer(userData) {
            // Send the user data to the server to save it
            fetch('/api/saveUserData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
        }
    </script>
</body>
</html>