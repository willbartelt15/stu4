---
toc: true
comments: false
layout: post
title: Calorie Calculator
description: Passion Project Calorie Calculator!
type: tangibles
courses: { compsci: {week: 6} }
permalink: /2023/09/25/caloriecalculator
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daily Calorie Maintenance Survey</title>
</head>
<body>
    <h1>Welcome to the Daily Calorie Maintenance Survey</h1>
    <form id="surveyForm">
        <label for="age">Age (years):</label>
        <input type="number" id="age" required><br><br>
        
        <label for="weight">Weight (kg):</label>
        <input type="number" id="weight" required><br><br>
        
        <label for="height">Height (cm):</label>
        <input type="number" id="height" required><br><br>
        
        <label for="gender">Gender:</label>
        <select id="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select><br><br>
        
        <input type="submit" value="Calculate Daily Calorie Maintenance">
    </form>
    
    <h2>Result:</h2>
    <p id="result"></p>

    <script src="script.js"></script>
</body>
</html>