
//DOM LOAD
document.addEventListener('DOMContentLoaded', e => {
  console.log('%c yo', 'color: magenta')

     //GLOBALS 
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const dogDiv = document.getElementById("dog-image-container")
  const dogUl = document.getElementById('dog-breeds')
  const breedDropdown = document.getElementById('breed-dropdown')
  let allBreeds = []


      //FETCH 
  fetch(imgUrl)
    .then(res => res.json())
    .then(dogData => {
      dogDiv.innerHTML += dogData.message.map(imgUrl => `<img src=${imgUrl}><p>`).join('')
  })

  fetch(breedUrl)
    .then(res => res.json())
    .then(breedData => {
    //breedData = obj, keys = breeds , values = subbreed
    allBreeds = Object.keys(breedData.message)
    dogUl.innerHTML += allBreeds.map(breed => `<li>${breed}</li><p>`).join('')
  })


      //EVENT LISTENERS

  dogUl.addEventListener('click', e => {
    // console.log(e.target)
    e.target.style.background = 'yellow';
    e.target.style.color = 'red';
  })

  //CHANGE = html input, select, textarea
  breedDropdown.addEventListener('change', e => {
    const targetLetter = e.target.value
    const filteredBreeds = allBreeds.filter((breed) => breed.startsWith(targetLetter))
    dogUl.innerHTML = renderSelected(filteredBreeds)
  })


  //HELPER
  const renderSelected = (breedArr) => {
    return breedArr.map(breed => `<li>${breed}</li>`).join('')
  }

}) // /> dom load