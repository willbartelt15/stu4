---
toc: true
comments: false
layout: post
title: Number Guessing Game
description: You are given a random number and you have 8 attempts to find it. When you guess your number it will tell you if you are to high or to low and with that information you should make your next guess. Godd Luck!!!
type: hacks
courses: { compsci: {week: 30} }
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Guessing Game</title>
    <style>
        /* CSS styles */
        .container {
            text-align: center;
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Number Guessing Game</h1>
        <p>Guess the secret number:</p>
        <input type="number" id="userGuess" placeholder="Enter your guess">
        <button onclick="checkGuess()">Guess</button>
        <p id="feedback"></p>
        <p>Attempts left: <span id="attempts">5</span></p>
        <h3>Guess History:</h3>
        <ul id="guessList"></ul>
    </div>

<script>
        // JavaScript code
        let secretNumber;
        let attemptsLeft = 5;
        let guessHistory = [];
        
        // Original list with numbers
        let originalList = [10, 20, 30, 40, 50];

        function startGame() {
            // Get a random number from the original list
            secretNumber = originalList[Math.floor(Math.random() * originalList.length)];
            attemptsLeft = 5;
            document.getElementById("attempts").textContent = attemptsLeft;
            document.getElementById("feedback").textContent = "";
            document.getElementById("userGuess").disabled = false;

            // Use the original list as the initial guess history
            guessHistory = originalList.slice();
            updateGuessHistory();
        }

        function checkGuess() {
            let userGuess = parseInt(document.getElementById("userGuess").value);
            let feedback = document.getElementById("feedback");
            let attemptsDisplay = document.getElementById("attempts");

            guessHistory.push(userGuess);

            if (userGuess === secretNumber) {
                feedback.textContent = "Congratulations! You guessed the secret number.";
                feedback.style.color = "green";
                document.getElementById("userGuess").disabled = true;
            } else if (userGuess < secretNumber) {
                feedback.textContent = "Too low! Try again.";
                feedback.style.color = "red";
            } else {
                feedback.textContent = "Too high! Try again.";
                feedback.style.color = "red";
            }

            attemptsLeft--;
            attemptsDisplay.textContent = attemptsLeft;

            if (attemptsLeft === 0) {
                feedback.textContent = "Sorry, you've used all your attempts. The secret number was: " + secretNumber;
                feedback.style.color = "red";
                document.getElementById("userGuess").disabled = true;
            }

            updateGuessHistory();
        }

        function updateGuessHistory() {
            let guessList = document.getElementById("guessList");
            guessList.innerHTML = ""; // Clear previous content

            guessHistory.forEach(function(guess) {
                let listItem = document.createElement("li");
                listItem.textContent = guess;
                guessList.appendChild(listItem);
            });
        }
    </script>
<button onclick="startGame()">Start New Game</button>
</body>
</html>