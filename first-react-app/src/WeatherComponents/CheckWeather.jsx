//Child component- receive parent state handler via props
function CheckWeather(props) {
  const weatherTypes = ["sunny", "windy", "raining", "cloudy"];

  //generates new random weather data and updates state via prop

  const randomWeather = () => {
    let newTemp = Math.floor(Math.random() * 40); //Math.random() returns 0-1.0(not included)
    let newWeatherIndex = Math.floor(Math.random() * weatherTypes.length); //this returns the number to show the index of weatherTypes randomly
    props.onWeatherChange(weatherTypes[newWeatherIndex], newTemp); //to lift state up onWeatherChange.this takes 2 paramas(weatherTypes[randomly selected index] and newTemp)
  };

  return <button onClick={randomWeather}>Check Weather</button>;
}

export default CheckWeather;
