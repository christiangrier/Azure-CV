// Get the span element by its class name
let span = document.getElementsByClassName("visit_count")[0];
span.textContent = "Loading Count...";
// Define a function to fetch the value from the endpoint
function fetchValue() {
  // Use the fetch API to make a GET request
  fetch("https://cg-getresumecounter.azurewebsites.net/api/http_trigger?")
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      // Update the span text with the data value
      span.textContent = data;
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}

// Call the function when the page loads
fetchValue();