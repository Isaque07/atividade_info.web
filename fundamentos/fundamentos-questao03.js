function celsiusParaFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

const celsius = 25;
const fahrenheit = 77;

console.log(`${celsius}°C é igual a ${celsiusParaFahrenheit(celsius)}°F`);
console.log(`${fahrenheit}°F é igual a ${fahrenheitParaCelsius(fahrenheit)}°C`);
