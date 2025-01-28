/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON in JavaScript</title>
</head>
<body>

    <h1>Working with JSON in JavaScript</h1>
    <div id="json-example"></div>

    <script>
*/
        // JSON (JavaScript Object Notation) is a lightweight data-interchange format
        // that is easy for humans to read and write, and easy for machines to parse and generate.

        // JSON is built on two structures:
        // 1. A collection of name/value pairs (often realized as objects in JavaScript).
        // 2. An ordered list of values (often realized as arrays in JavaScript).

        // In JavaScript, we can easily convert between JSON data and JavaScript objects.

        // Let's start with a JSON string that we want to parse into a JavaScript object.
        const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

        // Convert JSON string to JavaScript object (using JSON.parse)
        // JSON.parse() takes a JSON string and converts it to a JavaScript object.
        const user = JSON.parse(jsonString);

        // Now, we can access properties of the user object like any other JavaScript object.
        console.log(user.name); // John
        console.log(user.age);  // 30

        // Now, let's say we have a JavaScript object and we want to send it as JSON.
        // We can convert a JavaScript object into a JSON string using JSON.stringify.

        const person = {
            name: "Alice",
            age: 25,
            city: "Los Angeles"
        };

        // Convert JavaScript object to JSON string (using JSON.stringify)
        const personJson = JSON.stringify(person);

        console.log(personJson); // {"name":"Alice","age":25,"city":"Los Angeles"}

        // In web development, we often deal with JSON when interacting with APIs
        // or working with data stored in localStorage, sessionStorage, or cookies.

        // Example: displaying the converted object on the webpage.
        document.getElementById("json-example").innerHTML = `
            <p>JSON String: ${jsonString}</p>
            <p>Parsed Object: ${user.name}, ${user.age} years old, from ${user.city}</p>
            <p>Stringified Object: ${personJson}</p>
        `;

        // Common Uses of JSON:
        // 1. Data transfer between a client and server in web applications (APIs).
        // 2. Storing configuration or preferences (e.g., in localStorage).
        // 3. Interacting with databases or sending structured data.

        // In summary, JSON is a simple way to represent and exchange data between systems,
        // and JavaScript provides built-in methods to work with it easily.
        /*
    </script>

</body>
</html>
*/