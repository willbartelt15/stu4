---
toc: true
comments: false
layout: post
title: Individual review
description: Requirments for Individual review
type: hacks
courses: { compsci: {week: 20} }
---

## Individual review

Overview
- We made a turned based fantasy game that is player vs AI. You have the option to either attack or move around the map. Each move the enemy AI has the same option of either moving or attacking. The enemy is invisible so you don't know where he is. When he moves within one space of you you are notified and prompted to attack. before you start the game you can select from a variety of classes like mage, night, etc. which give you different strengths on the field. Once you attack and hit the enemy you win.

My feature
- For my feature I worked on the code for our AI and as well as the screens for our main game. I worked on creating the Images and the text boxes where you input your attack or movement location. Within Javascript I worked on define functions for our AI. I created functions that allowed our AI to move or attack and give it an option/probability of either moving or attacking. It generates a number between 1-9 and then chooses that location to either move or attack.


<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>2 Column 6 Row Table</title>
  <style>
    table {
      border-collapse: collapse;
      width: 120%;
    }

    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: center;
    }
  </style>
</head>
<body>

  <table>
    <tr>
      <th>College Board Requirments</th>
      <th>My Code</th>
    </tr>
    <tr>
      <td>Instructions for input from one of the following: the user, a device, an online datas stream, a file.</td>
      <td> Our project lets the user battle an AI. You are given the option to move or attack and when the enemy is in range you will be notified. Your enemy is has the same options and its your job to attack and take down the enemy. The AI has a generator that picks a location on the board to wither attack or move to. this moves the enemy around the board and gives him a probability of attacking you. When you, the user, moves around the board your inputs are saved and it determines where you will move.</td>
    </tr>
    <tr>
      <td>Use of at least one list (or other collection type) to represent a collectino of data that is stored and used to manage program complexity and help fulfill the users purpose.</td>
      <td> <img src="https://i.postimg.cc/fyn0LRbj/IMG-list2.jpg" height=230 width=3100>
      - mapImages is used to change your display whenever you move to a certain positino on the map. When you input a new location to move mapImages uses the corresponding image that responds with the proper location you entered, and then it updates your display. </td>
    </tr>
    <tr>
      <td>At least one procedure that contirubted to the program’s intened purpose where you have defined: the name, return type, one or more parameters:</td>
      <td><img src="https://i.postimg.cc/BbBcfKC1/Screenshot-2024-02-27-3-12-29-PM.png" height=230 width=3100>
      - The name is enemychoice2
      - return moves the position of the AI
      - parrameters are array </td>
    </tr>
    <tr>
      <td>An algorithm that includes sequencing, selection, and iteration that is in the body of the selected procedure</td>
      <td><img src="https://i.postimg.cc/nV14Mppn/Screenshot-2024-02-28-3-16-32-PM.png" height=230 width=3100>
      - This function uses a while loop which continues when moveposition is equal to position. It moves through the sequence in a specific order and then it checks the condition to make sure the enemy moves to a different position.</td>
    </tr>
    <tr>
      <td>Calls to your student-developed prodcedure:</td>
      <td><img src="https://i.postimg.cc/cJtzyFtg/Screenshot-2024-02-27-3-31-42-PM.png" height=230 width=3100>
      - Within the enemy move function it calls the previous function I showcased called enemychoice2 which generates a random location to select.</td>
    </tr>
    <tr>
      <td>Instructions for output (tactile, audible, visual, or ) based on input and program functionality</td>
      <td><img src="https://i.postimg.cc/3wpphHt5/Screenshot-2024-02-28-3-19-01-PM.png" height=230 width=3100></td>
    </tr>
  </table>

- <img src="https://i.postimg.cc/jS1BpTwQ/Screenshot-2024-02-29-1-28-01-PM.png" height=300 width=4000> <img src="https://i.postimg.cc/brdxc72k/Screenshot-2024-02-29-1-35-07-PM.png" height=100 width=4000>
This html code creates are original starting gamescreen as well as this sizing and boarders. Within the boxes we have two text boxes that 
</body>
</html>