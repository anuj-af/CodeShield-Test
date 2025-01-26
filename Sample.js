// Example of using eval() - Vulnerability: Code Injection
eval("console.log('This is insecure!')");

// Example of hardcoded password - Vulnerability: Information Exposure
const password = "12345";

// Example of document.write() - Vulnerability: Cross-Site Scripting (XSS)
document.write("<script>alert('XSS Attack');</script>");

// Example of innerHTML - Vulnerability: Cross-Site Scripting (XSS)
const userInput = "<img src='x' onerror='alert(1)'>";
document.getElementById('output').innerHTML = userInput;

// Example of insecure HTTP request - Vulnerability: Insufficient Validation
const http = require('http');
http.get('http://insecure-api.com/data', (res) => {
    console.log(`Received response: ${res.statusCode}`);
});

// Placeholder for more vulnerabilities
// Add code here to test additional patterns or dynamically fetched OWASP rules