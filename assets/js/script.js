var apiKey = "4fc42f8e0c162898089a67627a1e9437";

var searchFormEl = document.querySelector("#search-form");

searchFormEl.addEventListener("submit", function(event) {
    event.preventDefault();

    var location = document.querySelector("#location").value.trim();

    if (!location) {
        alert("Please Enter a City and State")
    }
    
    var city = location.split(",")[0];

    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + apiKey)
        .then(function(response) {
            response.json().then(function(data) {
                console.log(data);
            })
        })

})