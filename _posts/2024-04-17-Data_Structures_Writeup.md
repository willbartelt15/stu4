---
toc: true
comments: false
layout: post
title: Data Structures Write Up
description: Write Up on the CPT Project
type: hacks
courses: { compsci: {week: 28} }
---

From VSCode using SQLite3 Editor, show your unique collection/table in database, display rows and columns in the table of the SQLite database.
![image](https://github.com/willbartelt15/stu4/assets/142454007/e7a4d12b-442e-4977-9b9f-28029d1129f3)
 The image shows an example of table in the SQLite database, where rows and columns are displayed, providing a structured view of the data. This setup allows for easy data manipulation within the VSCode environment, enhancing productivity for database management tasks.

From VSCode model, show your unique code that was created to initialize table and create test data.
![image](https://github.com/willbartelt15/stu4/assets/142454007/ed3aad80-3bd0-41ee-9a60-64cf5803722e)
The image shows the SQLite3 Editor in VSCode displaying a table from an SQLite database. The table includes columns for different types of data, and you can see the rows of test data that have been inserted. This visual representation in the editor makes it easy to manage and view your database contents.

In VSCode using Debugger, show a list as extracted from database as Python objects.
![image](https://github.com/willbartelt15/stu4/assets/142454007/f567b4e0-43d5-4c24-9c3f-de69d2a55547)
In VSCode using the Debugger, the image shows a list of Python objects extracted from an SQLite database. Each object in the list represents a row from the database, with attributes corresponding to the table columns. The debugger allows you to inspect these objects and their data, making it easier to verify and debug database interactions in your Python code.

In VSCode, show Python API code definition for request and response using GET, POST, UPDATE methods. Discuss algorithmic condition used to direct request to appropriate Python method based on request method.
![image](https://github.com/willbartelt15/stu4/assets/142454007/133001ee-7858-4506-933f-b9aa21e7772f)
![image](https://github.com/willbartelt15/stu4/assets/142454007/a77b3d46-943e-4a21-9508-f19a2a69902a)
In VSCode using the Debugger, the image shows two distinct examples of dictionaries extracted from a database. Each dictionary represents a row from the database with keys as column names and values as the corresponding data. The debugger interface displays these keys and values, making it easy to inspect and verify the contents of each dictionary directly within your code.

In VSCode, show algorithmic conditions used to validate data on a POST condition.
![image](https://github.com/willbartelt15/stu4/assets/142454007/5d79e8a9-3a52-4d7f-9691-a94c4502691e)
In VSCode, the image shows a Python function used to validate data on a POST request. The function includes conditions to check if required fields are present and if they meet specific criteria, such as being non-empty or properly formatted. This ensures that only valid data is processed and accepted by the application.

In Postman, show URL request and Body requirements for GET, POST, and UPDATE methods.
In Postman, show the JSON response data for 200 success conditions on GET, POST, and UPDATE methods.
![image](https://github.com/willbartelt15/stu4/assets/142454007/34095142-7e73-417e-94b9-ed09c8e79f8c)
In Postman, the image shows examples of URL requests and body requirements for GET, POST, and UPDATE methods. The GET request typically includes just the URL to retrieve data, while the POST and UPDATE requests include a JSON body with the necessary data fields. The JSON response data for successful 200 status conditions displays the data retrieved or confirmation of the data submitted or updated, providing clear feedback for each type of request.

In Postman, show the JSON response for error for 400 when missing body on a POST request.
![image](https://github.com/willbartelt15/stu4/assets/142454007/b973ca9a-61b7-41a3-94bb-46589e7bb3e4)
In Postman, the image illustrates a JSON response for an error with status code 400, indicating a missing body in a POST request. The response contains details about the error, such as an error message stating that the request body is required. This type of response helps developers identify and address missing or incorrect data submissions, enhancing the overall reliability of the API.

In Postman, show the JSON response for error for 404 when providing an unknown user ID to a UPDATE request.
![image](https://github.com/willbartelt15/stu4/assets/142454007/b0f69f16-5a22-447d-a19a-1f773de2f85e)
In Postman, the image demonstrates a JSON response for an error with status code 404, indicating that an unknown user ID was provided in an UPDATE request. The response includes an error message specifying that the user ID cannot be found, which helps pinpoint the issue for troubleshooting. This type of response is essential for handling cases where resources are not found or incorrectly referenced in API requests.

In Chrome inspect, show response of JSON objects from fetch of GET, POST, and UPDATE methods.
In the Chrome browser, show a demo (GET) of obtaining an Array of JSON objects that are formatted into the browsers screen.
![image](https://github.com/willbartelt15/stu4/assets/142454007/b7a1c8f4-4ba8-4bf1-9166-e51e9486de47)
In Chrome's inspect tool, the image displays a demo of obtaining an array of JSON objects through a GET method, formatted into the browser's screen. The JSON response includes multiple objects with various attributes, presented in a structured format for easy readability. This demonstrates how web developers can use the inspect tool to inspect network requests and responses, aiding in debugging and understanding API interactions.

In JavaScript code, describe fetch and method that obtained the Array of JSON objects.
![image](https://github.com/willbartelt15/stu4/assets/142454007/1e192999-1cfd-402b-98c4-3ecb4f94f450)
The JavaScript code snippet utilizes fetch API to send a GET request to a specified URL. This request obtains an array of JSON objects directly from the server, which can then be utilized within the JavaScript code without additional parsing or transformation.

In JavaScript code, show code that performs iteration and formatting of data into HTML.
![image](https://github.com/willbartelt15/stu4/assets/142454007/550dc322-d525-40e5-9374-11e7db991cd6)
This JavaScript code snippet iterates over an array of JSON objects and dynamically generates HTML content. For each JSON object, it formats and displays the ID, name, and age using template literals. This formatted content is then directly appended to an existing container in the HTML document.

In the Chrome browser, show a demo (POST or UPDATE) gathering and sending input and receiving a response that show update. Repeat this demo showing both success and failure.
![image](https://github.com/willbartelt15/stu4/assets/142454007/aea29523-70de-46c4-973a-c46051139a2b)
![image](https://github.com/willbartelt15/stu4/assets/142454007/841e4e44-47f1-46ff-8ee1-f1c1c3d4db44)
The provided images show a demo in the Chrome browser of a POST or UPDATE action. In the first image, the demo illustrates the process of gathering user input, sending it to the server, and receiving a successful response indicating an update. The second image depicts the same demo but with a failure response, showcasing how the system handles errors and communicates them back to the user.

In JavaScript code, show and describe code that handles success. Describe how code shows success to the user in the Chrome Browser screen.
![image](https://github.com/willbartelt15/stu4/assets/142454007/8f3a5f49-ce81-4a11-80af-e06f0ff8cd0a)
This JavaScript code handles the process of updating data on a server and responding accordingly. Upon successful completion, it logs a success message to the console and displays an alert on the Chrome Browser screen, notifying the user of the successful update. Conversely, in case of any errors, it logs an error message to the console and alerts the user about the update failure.

In JavaScript code, show and describe code that handles failure. Describe how the code shows failure to the user in the Chrome Browser screen.
![image](https://github.com/willbartelt15/stu4/assets/142454007/31e3769a-6e43-4d24-9222-490712015c9e)
The image showcases JavaScript code designed to handle a failed data update attempt. It checks the response and throws an error if the update is unsuccessful, triggering an alert message in the Chrome Browser screen to inform the user about the failure.