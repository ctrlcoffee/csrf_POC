var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
    }
};
xhttp.withCredentials = true;
xhttp.open("GET", "/api/get_info", true);
xhttp.send();
-----------------------------------------------------------------------------------------------------------------------------------------
  function triggerSopError() {
    const url = "https://medium.com"; // Replace with any domain likely to block CORS
    const xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open("GET", url, true);

    // Set up a handler for the response
    xhr.onload = function () {
        console.log("This should not execute due to SOP restrictions.");
    };

    // Handle network errors
    xhr.onerror = function () {
        console.error("Network error or SOP restriction triggered.");
    };

    // Send the request
    xhr.send();
}

// Run this function in the console
triggerSopError();
