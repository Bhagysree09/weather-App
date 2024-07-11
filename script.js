// function getWeather(){
//     const apikey = '5921dcd72ce4d2e6e8e4454121ca213c';
//     const city = document.getElementById('city').value;
//      if(!city){
//         alert('please enter a city 😥')
//      }
//   const currentWeatherUrl = 'https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${apikey}';
//   const forecastUrl = 'https://api.openweathermap.org/data/3.0/forecast?q=${city}&appid=${apikey}';

//   fetch(currentWeatherUrl)
//   .then(response => response.json())
//   .then(data =>{
//     displayWeather(data);
//   })

//   .catch(error =>{
//     console.error('Eroor fetching current weather data:',error);
//     alert('error fetching current weather data.please try again .');
//   });

//  fetch(forecastUrl)
//  .then(response => response.json()) 
//  .then(data =>{
//      displayHourlyForecast(data.list);
//     })
//     .catch(error =>{
//         console.error('Eroor fetching current weather data:',error);
//         alert('error fetching current weather data.please try again .');
//       });
    
// function displayWeather(data) {
//   const tempDivInfo = document.getElementById('temp-div');
//   const weatherInfo = document.getElementById('weather-info');
//   const weatherIcon = document.getElementById('weather-icon');
//   const hourlyForecastDiv = document.getAnimations('hourly-forecast');

//   // Clear previous content
//   weatherInfoDiv.innerHTML = '';
//   hourlyForecastDiv.innerHTML = '';
//   tempDivInfo.innerHTML = '';

//   if (data.cod === '404') {
//       weatherInfoDiv.innerHTML = <p>${data.message}</p>;
//   } else {
//       const cityName = data.name;
//       const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
//       const description = data.weather[0].description;
//       const iconCode = data.weather[0].icon;
//       const iconUrl = 'https://openweathermap.org/img/wn/10d@2x.png';

//       const temperatureHTML = 
//          '<p style="margin-top:20px">${temperature}°C</p>';
      

//       const weatherHtml = `
//           <p>${cityName}</p>
//           <p>${description}</p>
//       `;

//       tempDivInfo.innerHTML = temperatureHTML;
//       weatherInfoDiv.innerHTML = weatherHtml;
//       weatherIcon.src = iconUrl;
//       weatherIcon.alt = description;

//       showImage();
//   }
// }
// function showImage(){
//   const weatherIcon = document.getElementById('weather-icon');
//   weatherIcon.style.display= 'block';
// }

// function displayHourlyForecast(hourlyData) {
//   const hourlyForecastDiv = document.getElementById('hourly-forecast');

//   const next24Hours = hourlyData.slice(0, 8); // Display the next 24 hours (3-hour intervals)

//   next24Hours.forEach(item => {
//       const dateTime = new Date(item.dt * 1000); // Convert timestamp to milliseconds
//       const hour = dateTime.getHours();
//       const temperature = Math.round(item.main.temp - 273.15); // Convert to Celsius
//       const iconCode = item.weather[0].icon;
//       const iconUrl =`https://openweathermap.org/img/wn/${iconCode}@2x.png`;

//       const hourlyItemHtml = `
//           <div class="hourly-item">
//               <span>${hour}:00</span>
//               <img src="${iconUrl}" alt="Hourly Weather Icon">
//               <span>${temperature}°C</span>
//           </div>
//       `;

//       hourlyForecastDiv.innerHTML += hourlyItemHtml;
//   });
// }


// }
function getWeather(){

  const apiKey = '5921dcd72ce4d2e6e8e4454121ca213c';
  const city = document.getElementById('city').value;

  if(!city){
    alert('Please Enter a city 🥹');
  }


  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;



  fetch(currentWeatherUrl)
  .then(response => response.json())
  .then(data => {
    displayWeather(data);
  })

  .catch(error =>{
    console.error('Error fetching current weather data:', error);
    alert('Error fetching current weather data. Please try again.');
  });


  fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
      displayHourlyForecast(data.list);
    })
    .catch(error =>{
      console.error('Error fetching hourly forecast data:', error);
      alert('Error fetching Hourly Forecast data. Please try again.');
    })
}

function displayWeather(data){
  const tempDivInfo = document.getElementById('temp-div');

  const weatherInfo = document.getElementById('weather-info');

  const weatherIcon = document.getElementById('weather-icon');

  const hourlyForecastDiv = document.getAnimations('hourly-forecast');


  //clear previous content
  weatherInfo.innerHTML = '';
  hourlyForecastDiv.innerHTML = '';
  tempDivInfo.innerHTML ='';

  if(data.cod === '404'){
    weatherInfo.innerHTML = 
    `<p>${data.message}</p>`;
  }
  else{
    const cityName = data.name;

    const temperature = Math.round(data.main.temp - 273.15);

    const description = data.weather[0].description;

    const iconCode = data.weather[0].icon;

    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const temperatureHTML = 
    `<p style="margin-top:20px">${temperature}°C</p>`;

    const weatherHTML = 
    `<p>${cityName}</p>
    <p>${description}</p>
    `;

    tempDivInfo.innerHTML = temperatureHTML;
    weatherInfo.innerHTML = weatherHTML;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;


    showImage();
  }
}


function showImage(){
  const weatherIcon = document.getElementById('weather-icon');
  weatherIcon.style.display= 'block';
}

function displayHourlyForecast(hourlyData){
const hourlyForecastDiv = document.getElementById('hourly-forecast');

const next24Hours = hourlyData.slice(0,8);

next24Hours.forEach(item => {
  const dateTime =new Date(item.dt * 1000);
  const hour = dateTime.getHours();
  const temperature = Math.round(item.main.temp - 273.15);
  const iconCode = item.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  const hourlyHTML =`
  <div class="hourly-item">
  <span>${hour}:00</span>
  <img src="${iconUrl}"
  alt="Hourly Weather Icon />"
  <span>${temperature}℃</span>
  </div>`;

  hourlyForecastDiv.innerHTML += 
  hourlyHTML;
});
}



