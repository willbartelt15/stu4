---
layout: post
title: Update Date Page
hide: true
description: Update date page for JWT authentication
permalink: /deletedata
---

<body class="deletedata">
    <!-- Failure Screen -->
    <h1 class="bigtitle">Delete Data Here!</h1>
    <!-- Prompt new updated info -->
    <label for="inputusername" class="smalltitle">Uid (uid of user you want to delete data):</label><br>
    <input type="text" name="uid" id="uid" required><br>
    <!-- Prompt to submit -->
    <button class="buttons" onclick="deletedata()">Submit</button>
    <script type="module">
        import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';
        const url = uri + '/api/users/';
        function deletedata(){
        const body = {
            uid: document.getElementById("uid").value,
        };
        const AuthOptions = {
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'include', // include, same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'DELETE', // Override the method property
            cache: 'no-cache', // Set the cache property
            body: JSON.stringify(body) // delete if using backend code that fetches directly from the cookie
        };
        // fetch the API
        fetch(url, AuthOptions)
            // response is a RESTful "promise" on any successful fetch
            .then(response => {
            // check for response errors and display
            if (response.status !== 200) {
                window.location.href = "{{site.baseurl}}/loginpage"
            }
            // valid response will contain JSON data
            response.json().then(data => {
                window.location.href = "{{site.baseurl}}/data/database";
            })
        })
        // catch fetch errors (ie ACCESS to server blocked)
        .catch(err => {
            console.log(err)
        });
        }
        window.deletedata = deletedata;
    </script>
</body>