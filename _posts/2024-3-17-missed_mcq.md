---
toc: true
comments: false
layout: post
title: MCQ 2021 Missed Questions
description: Vorrected 2021 MCQ Questions
type: hacks
courses: { compsci: {week: 27} }
---

## Question 25
Which of the following best describes the value returned by the procedure?

Responses
A
The procedure returns nothing because it will not terminate.

B
The procedure returns the value of 2 * n.

C
The procedure returns the value of n * n.

D
The procedure returns the sum of the integers from 1 to n.

Answer D
Correct. The procedure initially sets result to 1 and j to 2. In the REPEAT UNTIL loop, result is first assigned the sum of result and j, or 1 + 2. The value of j is then increased to 3. In each subsequent iteration of the loop, result is increased by each successive value of j (3, 4, 5, etc.) until j exceeds n. Therefore, the procedure returns the sum of the integers from 1 to n. I chose B because I thought that the procedure would return the value satrting at two and repeating until n. This dosen't work because the procedure adds 2 for n number of times which results in an output that is too high.

## Question 46
In column B, the price range represents the typical cost of a meal, where "lo" indicates under $10, "med" indicates $11 to $30, and "hi" indicates over $30.
In column D, the average customer rating is set to -1.0 for restaurants that have no customer ratings.
A
I and II only

B
I and III only

C
II and III only

D
I, II, and III

Answer D
Correct. Because the relative order of the rows is not changed when the filters are applied, the order in which the actions are performed does not matter. The filtering can occur either before or after the spreadsheet is sorted by rating. I chose A because I didn't think that the 3rd one applied. The reason I put A which is 1 and 2 is because I was unsure of what the question was asking. In rows 1 and two they both had false outputs and had similar ratings so I made an educated guess and thought that they would both be correct. Option 3 had false and a different rating so I thought it would be left out. It turns out that all three go together because the feature dosen't change after the filter. This means that they all are correct because they don't move based off the filter.

## Question 47
A
(avgRating ≥ 4.0) AND ((prcRange = "lo") AND (prcRange = "med"))

B
(avgRating ≥ 4.0) AND ((prcRange = "lo") OR (prcRange = "med"))

C
(avgRating ≥ 4.0) OR ((prcRange = "lo") AND (prcRange = "med"))

D
(avgRating ≥ 4.0) OR ((prcRange = "lo") OR (prcRange = "med"))

Answer B
Correct. This expression evaluates to true only for restaurants with the correct price range (when prcRange equals "lo" or "med") and the correct customer rating (when avgRating ≥ 4.0). For this one it had the same table as last time.(The questions are a pair) I chose C because I thought that It would return the avg rating and the prc rang even though there was an or stament inbetween them. This means that it will do one or the other when it needs both. This means that it needs to have an and stament followed by an or stament. The option I chose had them backwards.

## Question 55
A code segment is intended to transform the list utensils so that the last element of the list is moved to the beginning of the list.

For example, if utensils initially contains  ["fork", "spoon", "tongs", "spatula", "whisk"], it should contain ["whisk", "fork", "spoon", "tongs", "spatula"] after executing the code segment.

Which of the following code segments transforms the list as intended?

Responses
A
len 
 LENGTH(utensils)

temp 
 utensils[len]

REMOVE(utensils, len)

APPEND(utensils, temp)

B
len 
 LENGTH(utensils)

REMOVE(utensils, len)

temp 
 utensils[len]

APPEND(utensils, temp)

C
len 
 LENGTH(utensils)

temp 
 utensils[len]

REMOVE(utensils, len)

INSERT(utensils, 1, temp)

D
len 
 LENGTH(utensils)

REMOVE(utensils, len)

temp 
 utensils[len]

INSERT(utensils, 1, temp)

Answer C
Correct. This code segment assigns the value of the last element of the list to the variable temp, then removes the last element of the list, then inserts temp as the first element of the list. I chose Option A because I thought that it would set the temp as a variable and move it to the front of the list. It actually sets it as a variable then deletes it. After that it appends it and returns it back as the original.

## Question 61
RunRoutr is a fitness tracking application for smartphones that creates suggested running routes so that users can run with each other. Upon downloading the application, each user creates a username, a personal profile, and a contact list of friends who also use the application. The application uses the smartphone’s GPS unit to track a user’s location, running speed, and distance traveled. Users can use the application to review information and statistics about their previous runs.

At the beginning of a run, users indicate the distance they want to run from their current location, and the application suggests a running route. Once a user accepts a suggested route, the application shares the suggested route with other compatible users in the area so that they can run together. Users are considered compatible if they are on each other’s contact lists or if they typically run at similar speeds.

A basic RunRoutr account is free, but it displays advertisements that are targeted to individual users based on data collected by the application. For example, if a user’s running route begins or ends near a particular store, the application may display an advertisement for that store. Users have the ability to pay a monthly fee for a premium account, which removes advertisements from the application.

A
Users of the application are required to carry their smartphones with them while running in order to enable all of the application’s features.

B
Users of the application may have the ability to determine information about the locations of users that are not on their contact lists.

C
Users of the application may not be able to accurately track their running history if they share their smartphone with another family member.

D
Users of the application may not be compatible with any other users in their area.

Answer B
Correct. The application will inform a user whenever a nearby compatible user starts a run. This could allow users to determine the location of a stranger, which is considered a privacy concern. I chose option D because I thought that it was asking for what would not be a threat.(I read it too fast) D would fit that role because it means that no use rin range is shown as a threat.

## Question 66
In a certain video game, players are awarded bonus points at the end of a level based on the value of the integer variable timer. The bonus points are awarded as follows.

If timer is less than 30, then 500 bonus points are awarded.
If timer is between 30 and 60 inclusive, then 1000 bonus points are awarded.
If timer is greater than 60, then 1500 bonus points are awarded.
Which of the following code segments assigns the correct number of bonus points to bonus for all possible values of timer ?

Select two answers.

response - incorrect
Responses
A
The figure presents three blocks of code that consist of 5 lines. Throughout the second and third blocks of code are nested blocks of code, as follows. Line 1: [begin block] bonus ← 500 [end block] [Begin Block] Line 2: IF [begin block] timer ≥ 30 [end block] [Begin Block] Line 3: [begin block] bonus ← bonus + 500 [end block] [End Block] [End Block] [Begin Block] Line 4: IF [begin block] timer > 60 [end block] [Begin Block] Line 5: [begin block] bonus ← bonus + 500 [end block] [End Block] [End Block]

B
The figure presents three blocks of code that consist of 5 lines. Throughout the second and third blocks of code are nested blocks of code, as follows. Line 1: [begin block] bonus ← 1500 [end block] [Begin Block] Line 2: IF [begin block] timer ≥ 30 [end block] [Begin Block] Line 3: [begin block] bonus ← bonus - 500 [end block] [End Block] [End Block] [Begin Block] Line 4: IF [begin block] timer < 30 [end block] [Begin Block] Line 5: [begin block] bonus ← bonus - 500 [end block] [End Block] [End Block]

C
The figure presents three blocks of code that consist of 6 lines. Throughout the blocks of code are nested blocks of code, as follows. [Begin Block] Line 1: IF [begin block] timer > 60 [end block] [Begin Block] Line 2: [begin block] bonus ← 1500 [end block] [End Block] [End Block] [Begin Block] Line 3: IF [begin block] timer ≥ 30 [end block] [Begin Block] Line 4: [begin block] bonus ← 1000 [end block] [End Block] [End Block] [Begin Block] Line 5: IF [begin block] timer < 30 [end block] [Begin Block] Line 6: [begin block] bonus ← 500 [end block] [End Block] [End Block]

D
The figure presents three blocks of code that consist of 6 lines. Throughout the blocks of code are nested blocks of code, as follows. [Begin Block] Line 1: IF [begin block] timer > 60 [end block] [Begin Block] Line 2: [begin block] bonus ← 1500 [end block] [End Block] [End Block] [Begin Block] Line 3: IF [Begin Block] [begin block] timer ≥ 30 [end block] AND [begin block] timer ≤ 60 [end block] [End Block] [Begin Block] Line 4: [begin block] bonus ← 1000 [end block] [End Block] [End Block] [Begin Block] Line 5: IF [begin block] timer < 30 [end block] [Begin Block] Line 6: [begin block] bonus ← 500 [end block] [End Block] [End Block]

Answer A
Correct. This code segment assigns 500 bonus points by default. If timer is less than 30, no additional bonus points are added. If timer is between 30 and 60 inclusive, bonus is incremented by 500 in the first IF block. If timer is greater than 60, bonus is incremented by 500 twice (once in each IF block). The correct number of bonus points is assigned to bonus for all possible values of timer. Incorrect. This code segment does not work as intended. For example, if timer is greater than 60, bonus is assigned 1500 in the first IF block. Then bonus is assigned 1000 in the second IF block. As a result, bonus will be assigned 1000 instead of the intended 1500. I chose A and C because I thought that C would return the 1500 when it said if its greater than 60 its assigned C. This dosen't work because after that The bonus is assigned 1000 which makes it return 1000 not 1500. The other correct option is D because if timer is greater than 60, bonus is assigned 1500 in the first IF block. If timer is between 30 and 60, inclusive, bonus is assigned 1000 in the second IF block. If timer is less than 30, bonus is assigned 500 in the third IF block. The correct number of bonus points is assigned to bonus for all possible values of timer.