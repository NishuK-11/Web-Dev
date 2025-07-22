// 1e610eaa1c404934b8063848252107
//http://api.weatherapi.com/v1/current.json?key=1e610eaa1c404934b8063848252107&q=Jamshedpur&aqi=no

// Imagine you're ordering a pizza from Zomato 🍕:

// res is the sealed delivery box 🧾. It has:

// Status: ✅ (delivered)

// Headers: 🧂 (info like packaging time)

// Body: 🍕 (pizza inside, but not opened yet)

// data is the pizza inside the box — once you've opened it and can see:

// Crust, cheese, toppings → in your case: location, temperature, condition, etc
document.addEventListener("DOMContentLoaded", () => {
  const temperatureField = document.querySelector(".temp p");
  const locationField = document.querySelector(".location p");
  const dateFiled = document.querySelector(".timedaydate p");
  const weatherField = document.querySelector(".condition p");
  const searchField = document.querySelector(".searcharea");
  const form = document.querySelector('.second form');

  const weatherapp = async (targetLocation) => {
    try {
        let url = `https://api.weatherapi.com/v1/current.json?key=1e610eaa1c404934b8063848252107&q=${targetLocation}&aqi=no`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        let locationName = data.location.name;
        let time = data.location.localtime;
        let temp = data.current.temp_c;
        let condition = data.current.condition.text;

        temperatureField.textContent = `${temp} °C`;
        locationField.textContent = locationName;
        dateFiled.textContent = time;
        weatherField.textContent = condition;

    } catch (error) {
        console.error("Error:", error.message);
    }
  };

  const searchForLocation = (e) => {
    e.preventDefault();
    let target = searchField.value;
    weatherapp(target);
  };

  form.addEventListener('submit', searchForLocation);

  let targetLocation = 'Delhi';
  console.log("Fetching weather for:", targetLocation);
  weatherapp(targetLocation);
});
