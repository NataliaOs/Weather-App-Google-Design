function displayTemperature (response){
 console.log(response.data);
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

}
       let now = new Date();
       let h6 = document.querySelector("h6");
       let date = now.getDate();
       let hours = now.getHours();
       let minutes = now.getMinutes();
       let year = now.getFullYear();

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

       h6.innerHTML = `${day} ${month} ${date}; ${hours}:${minutes}, ${year}`; 
       
       
function search(city) {

let apiKey = "1e79b31769bb7a7029157c18e1a2cb3a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}       

function handleSubmit (event) {
  event.preventDefault ();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);

}

let celsiusTemperature = null;
//завантажуємо celsiusTemp, що дорівнює нулю(рядок 63), потім ми викликаємо search(місто) з рядка 89, що викликає API 
//в рамках функціі displayTemperature (рядок1), та знаходить, що celsiusTemperature = response.data.main.temp (р.10) 
// - шлях до данних в API. Коли ми натискоємо на F, запускається функція displayFahrenheitTemperature(р.74), 
//яка підставляє у формулу нинішнє значення температури у °С(р.77)



let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  //прибираємо клас active з °С та встановлюємо його для °F
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  //прибираємо клас active з °F та встановлюємо його для °С
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);


search("Kyiv");













