function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "5201594abea9f3e38b70e65b11a80c24";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);

}

function displayTemperature (response){

 let temperatureElement = document.querySelector("#temperature");
 let cityElement = document.querySelector("#city");
 let descriptionElement = document.querySelector("#description");
 let humidityElement = document.querySelector("#humidity");
 let windElement = document.querySelector("#wind");
 let iconElement = document.querySelector("#icon");

 celsiusTemperature = response.data.main.temp;  

 temperatureElement.innerHTML = Math.round(celsiusTemperature);
 cityElement.innerHTML=response.data.name;
 descriptionElement.innerHTML = response.data.weather[0].description;
 humidityElement.innerHTML = response.data.main.humidity;
 windElement.innerHTML = Math.round(response.data.wind.speed);
 iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
 iconElement.setAttribute("alt", response.data.weather[0].description);

 getForecast(response.data.coord);
}
       let now = new Date();
       let h6 = document.querySelector("h6");
       let date = now.getDate();
       let year = now.getFullYear();
       let hours = now.getHours();
       let minutes = now.getMinutes();
       

       let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
       let day = days[now.getDay()];
       let months = [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec",
       ];
       let month = months[now.getMonth()];

       h6.innerHTML = `${day} ${month} ${date}, ${year} ${hours}:${minutes}`; 

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun","Mon","Tue","Wed","Thu", "Fri","Sat"];

    return days [day];

    return day;
  } 

       
function displayForecast(response) {
  let forecast = response.data.daily;
 
  let forecastElement = document.querySelector("#forecast");

 ;

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay,index) {
      if (index< 6) {

    forecastHTML =
      forecastHTML +
      ` 
      <div class="col-2">
            <div class="day-1">
            ${formatDay(forecastDay.dt)}
            </div>
          
            <img 
            src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" alt="" width="30"
            />
            <div class="weather-forecast-temperatures">
              <span class="temp-max"> ${Math.round(forecastDay.temp.max)}° </span>
              <span class="temp-min"> ${Math.round(forecastDay.temp.min)}° </span> 
            </div>
      </div>
      `;
    }
  });
  forecastHTML = forecastHTML + `</div>`; 
  forecastElement.innerHTML = forecastHTML;


}       
       
function search(city) {

let apiKey = "5201594abea9f3e38b70e65b11a80c24";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}       

function handleSubmit (event) {
  event.preventDefault ();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("Kyiv");















