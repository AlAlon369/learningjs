const myCity = {
  city: 'New York',
  info: {               // вложенный объект
    isPopular: true,
    country: 'USA'
  }
}

console.log(myCity.info.isPopular)  // точечная запись.
// true

delete myCity.info['isPopular']   // скобочная запись

console.log(myCity)
// {city: 'New York', info: {country: 'USA"}}