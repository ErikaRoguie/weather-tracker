
var cityTextArea = document.getElementById("city");

var searchCityBtn = document.getElementsByClassName("cityButton");

var axios = require("axios").default;

var options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
        q: 'London,uk',
        lat: '0',
        lon: '0',
        callback: 'test',
        id: '2172797',
        lang: 'null',
        units: 'imperial',
        mode: 'xml'
    },
    headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '6e912ffa14msh6d130523bb9bb10p1efc1ejsn9db1f47c9b22'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
//get city
searchCityBtn[0].addEventListener("click", function () {

    var city = cityTextArea.value;
    var location = document.getElementById("location")
    location.textContent = city
    var priorCity = document.createElement("button")
    priorCity.textContent = "city";

    fetch(`${requestURL}${city}&appid=${apiKey}`).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        var lat = res.city.coord.lat;
        var lon = res.city.coord.lon;



        //city date ,temp wind humidity uv index with color 

        var multiDay = var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/weather',
            "port": null,
            "path": "/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "6e912ffa14msh6d130523bb9bb10p1efc1ejsn9db1f47c9b22",
                "useQueryString": true
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

        fetch(multiDay).then(function (res) {
            return res.json()

        }).then(function (data) {
            console.log(data)
            localStorage
            var pCity = document.getElementById(city)
            //var today = document.getElementById("today")
            var date = moment(data.current.dt * 1000).format("MM/DD/YYYY")
            //today.textContent = date;
            location.textContent = city + "(" + date + ")"
            var temp = document.getElementById("temp0")
            var currentTemp = data.current.temp
            temp.textContent = "Temp: " + currentTemp + " F"

            var wind = document.getElementById("wind0")
            var currentWind = data.current.wind_speed
            wind.textContent = "Wind: " + currentWind + " mph"

            var humidity = document.getElementById("humidity0")
            var currentHumidity = data.current.humidity
            humidity.textContent = "Humidity: " + currentHumidity + " %"
            var uvi = document.getElementById("uv0")
            var currentUvi = data.current.uvi
            uvi.textContent = "UV Index: " + currentUvi





            for (let i = 1; i < 6; i++) {
                var pCity = document.getElementById("city" + i)

                var newDate = document.getElementById("date" + i)
                var fiveDayDate = moment(data.daily[i].dt * 1000).format("MM/DD/YY")
                console.log(fiveDayDate)
                var newWind = data.daily[i].wind_speed
                var newHumidity = data.daily[i].humidity
                console.log(newHumidity)
                newDate.textContent = fiveDayDate
                var newIcons = document.getElementById("icon" + i)
                var iconUrl = "http://community-open-weather-map.p.rapidapi.com/img/wn/" + data.daily[i].weather[0].icon + "@2x.png";
                var icon = document.createElement('img');
                icon.src = iconUrl;
                document.getElementById("icon" + i).appendChild(icon);

                var pWind = document.getElementById("wind" + i)
                pWind.textContent = `Wind:${newWind}mph`;

                var pHumidity = document.getElementById("Humidity" + i)
                pHumidity.textContent = "Humidity:" + newHumidity + "%";



            }
        });
    })

})