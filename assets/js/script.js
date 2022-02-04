
var cityTextArea = document.getElementById("city");

var searchCityBtn = document.getElementsByClassName("cityButton");


//get city
searchCityBtn[0].addEventListener("click", function () {

    var city = cityTextArea.value;
    var location = document.getElementById("location")
    location.textContent = city
    var priorCity = document.createElement("button")
    priorCity.textContent = "city";

    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&APPID=0c121cc91d6ba08b39c91b4fcc96b61d").then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)

        //city date ,temp wind humidity uv index with color 

        fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+res.city.coord.lat+"&lon="+res.city.coord.lat+"&APPID=0c121cc91d6ba08b39c91b4fcc96b61d").then(function (res) {
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
                var iconUrl = "https://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png";
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
