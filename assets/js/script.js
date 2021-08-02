var apiKey = "4fc42f8e0c162898089a67627a1e9437";
var previousSearch = {};

var displayWeather = function(lat, long, area) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&units=imperial&exclude=hourly,minutely&appid=" + apiKey)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);

                    // sets variabls to display the current and five day forecast days
                    var currentDate = moment.unix(data.current.dt).format("MMMM Do, YYYY");
                    var dayOne = moment.unix(data.daily[0].dt).format("MMMM Do, YYYY");
                    var dayTwo = moment.unix(data.daily[1].dt).format("MMMM Do, YYYY");
                    var dayThree = moment.unix(data.daily[2].dt).format("MMMM Do, YYYY");
                    var dayFour = moment.unix(data.daily[3].dt).format("MMMM Do, YYYY");
                    var dayFive = moment.unix(data.daily[4].dt).format("MMMM Do, YYYY");

                    // sets the text content that contains each date
                    $("#current-date").text(currentDate);
                    $("#day-one").text(dayOne);
                    $("#day-two").text(dayTwo);
                    $("#day-three").text(dayThree);
                    $("#day-four").text(dayFour);
                    $("#day-five").text(dayFive);

                    // sets the icon on the current weather
                    var img = $("<img>")
                    $(img).attr("src", "http://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png");
                    $("#current-weather-img").append(img);

                    // sets the information for the current forecast
                    $("#current-temp").text(data.current.temp);
                    $("#current-feels-like").text(data.current.feels_like);
                    $("#current-wind").text(data.current.wind_speed);
                    $("#current-humidity").text(data.current.humidity);
                    $("#current-uvi").text(data.current.uvi);
                    
                    // sets the image for day one
                    var dayOneImg = $("<img>");
                    $(dayOneImg).attr("src", "http://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + "@2x.png")
                    $("#day-one-img").append(dayOneImg);

                    // sets the variables for day one
                    $("#day-one-temp").text(data.daily[0].temp.day);
                    $("#day-one-wind").text(data.daily[0].wind_speed);
                    $("#day-one-humidity").text(data.daily[0].humidity);
                    $("#day-one-uvi").text(data.daily[0].uvi);

                    // sets the image for day two
                    var dayTwoImg = $("<img>")
                    $(dayTwoImg).attr("src", "http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + "@2x.png")
                    $("#day-two-img").append(dayTwoImg);

                    // sets the variables for day two
                    $("#day-two-temp").text(data.daily[1].temp.day);
                    $("#day-two-wind").text(data.daily[1].wind_speed);
                    $("#day-two-humidity").text(data.daily[1].humidity);
                    $("#day-two-uvi").text(data.daily[1].uvi);

                    // sets the image for day three
                    var dayThreeImg = $("<img>");
                    $(dayThreeImg).attr("src", "http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + "@2x.png")
                    $("#day-three-img").append(dayThreeImg);

                    // sets the variables for day three
                    $("#day-three-temp").text(data.daily[2].temp.day);
                    $("#day-three-wind").text(data.daily[2].wind_speed);
                    $("#day-three-humidity").text(data.daily[2].humidity);
                    $("#day-three-uvi").text(data.daily[2].uvi);

                    // sets the image for day four
                    var dayFourImg = $("<img>");
                    $(dayFourImg).attr("src", "http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + "@2x.png")
                    $("#day-four-img").append(dayFourImg);

                    // sets the variables for day four
                    $("#day-four-temp").text(data.daily[3].temp.day);
                    $("#day-four-wind").text(data.daily[3].wind_speed);
                    $("#day-four-humidity").text(data.daily[3].humidity);
                    $("#day-four-uvi").text(data.daily[3].uvi);

                    // sets the image for day five
                    var dayFiveImg = $("<img>");
                    dayFiveImg.attr("src", "http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + "@2x.png")
                    $("#day-five-img").append(dayFiveImg);

                    // sets the variables for day five
                    $("#day-five-temp").text(data.daily[4].temp.day);
                    $("#day-five-wind").text(data.daily[4].wind_speed);
                    $("#day-five-humidity").text(data.daily[4].humidity);
                    $("#day-five-uvi").text(data.daily[4].uvi); 
                })
            }
        })

}

// resets the data in the form
var resetData = function() {
     // sets the text content that contains each date
     $("#current-date").text("");
     $("#day-one").text("");
     $("#day-two").text("");
     $("#day-three").text("");
     $("#day-four").text("");
     $("#day-five").text("");

    $("#current-weather-img").html("");

     // sets the information for the current forecast
     $("#current-temp").text("");
     $("#current-feels-like").text("");
     $("#current-wind").text("");
     $("#current-humidity").text("");
     $("#current-uvi").text("");
     
     // sets the image for day one
     $("#day-one-img").html("");

     // sets the variables for day one
     $("#day-one-temp").text("");
     $("#day-one-wind").text("");
     $("#day-one-humidity").text("");
     $("#day-one-uvi").text("");

     // sets the image for day two
    $("#day-two-img").html("");

     // sets the variables for day two
     $("#day-two-temp").text("");
     $("#day-two-wind").text("");
     $("#day-two-humidity").text("");
     $("#day-two-uvi").text("");

    
    $("#day-three-img").html("");

     // sets the variables for day three
     $("#day-three-temp").text("");
     $("#day-three-wind").text("");
     $("#day-three-humidity").text("");
     $("#day-three-uvi").text("");

     // sets the image for day four
     $("#day-four-img").html("");

     // sets the variables for day four
     $("#day-four-temp").text("");
     $("#day-four-wind").text("");
     $("#day-four-humidity").text("");
     $("#day-four-uvi").text("");

     // sets the image for day five
     $("#day-five-img").html("");

     // sets the variables for day five
     $("#day-five-temp").text("");
     $("#day-five-wind").text("");
     $("#day-five-humidity").text("");
     $("#day-five-uvi").text(""); 
}

$("#search-form").on("submit", function(event) {
    event.preventDefault();
    resetData();

    $("#previous-search").html("");

    var location = $("#location").val().trim()

    if (!location) {
        alert("Please Enter a City and State")
    }
    
    var citySearch = location.split(",")[0];

    

    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + citySearch + "&limit=5&appid=" + apiKey)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    // console.log(data[0]);
                    
                    if (data[0] == null) {
                        alert("There is no information available for that location!");
                        return;
                    }

                    var lat = data[0].lat;
                    var long = data[0].lon;

                    var area = data[0].state;
                    var city = data[0].name;

                    if (!data[0].state) {
                        area = data[0].country;
                    }

                    // console.log(lat);
                    // console.log(long);

                    $("#current-city").text(city + ", " + area);
                    displayWeather(lat, long, area);                    

                    var cityData = city + ", " + area;

                    console.log(cityData);

                    if (!previousSearch.cityOne) {
                        previousSearch.cityOne = cityData;
                    } else if ((!previousSearch.cityTwo && previousSearch.cityOne != cityData) || previousSearch.cityOne != cityData) {
                        previousSearch.cityTwo = previousSearch.cityOne;
                        previousSearch.cityOne = cityData;
                    } 
                    
                    // console.log(previousSearch);

                    // sets the first dynamic button for the search bar
                    var previousSearchOneBtn = $("<button>");
                    var previousSearchOneLi = $("<li>");
                    $(previousSearchOneBtn).addClass("btn btn-secondary m-2");
                    $(previousSearchOneBtn).text(previousSearch.cityOne);

                    $(previousSearchOneLi).append(previousSearchOneBtn);

                    $("#previous-search").append(previousSearchOneLi);

                    // checks to see if there is information for a second button and if there is appends it as a button to the form
                    if (previousSearch.cityTwo == null){
                        return;
                    } else {
                        var previousSearchTwoBtn = $("<button>");
                        var previousSearchTwoLi = $("<li>");
                        $(previousSearchTwoBtn).addClass("btn btn-secondary m-2");
                        $(previousSearchTwoBtn).text(previousSearch.cityTwo)

                        $(previousSearchTwoLi).append(previousSearchTwoBtn);
                    
                        $("#previous-search").append(previousSearchTwoLi);
                    }
                })
            } 
        })
    // resets the form field
    $("#location").val("");
})

// allows the user to pick a previous search to display
$("#previous-search").on("click", "li", function(target) {
    $("#location").val(target.target.innerText);
})