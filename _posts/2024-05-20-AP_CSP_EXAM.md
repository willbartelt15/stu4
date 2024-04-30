---
toc: true
comments: false
layout: post
title: Word Scramble
description: You are given a word and you have to unscramble it.
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
        <p>Guess the secret number between 1 and 100:</p>
        <input type="number" id="userGuess" placeholder="Enter your guess">
        <button onclick="checkGuess()">Guess</button>
        <p id="feedback"></p>
        <p>Attempts left: <span id="attempts">8</span></p>
    </div>

<script>
        // JavaScript code
        let secretNumber;
        let attemptsLeft = 8;

        function startGame() {
            secretNumber = Math.floor(Math.random() * 100) + 1;
            attemptsLeft = 8;
            document.getElementById("attempts").textContent = attemptsLeft;
            document.getElementById("feedback").textContent = "";
            document.getElementById("userGuess").disabled = false;
        }

        function checkGuess() {
            let userGuess = parseInt(document.getElementById("userGuess").value);
            let feedback = document.getElementById("feedback");
            let attemptsDisplay = document.getElementById("attempts");

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
        }
    </script>
<button onclick="startGame()">Start New Game</button>
</body>
</html>