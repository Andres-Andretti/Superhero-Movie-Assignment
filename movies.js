
const moviesURL = 'http://www.omdbapi.com/?s=batman&apikey=8f49d5c6';
const moviesUL = document.getElementById("moviesUL")

let detailsRequest = new XMLHttpRequest()
let movieRequest = new XMLHttpRequest()

// detailsRequest.addEventListener('load', function() {
    
movieRequest.addEventListener('load', function() {
    console.log(this.responseText)

    const result = JSON.parse(this.responseText)

    const movieItems = result.Search.map((movie) => {
        return ` <li>
                    <b>${movie.Title}</b>
                    <img src="${movie.Poster}" />
                    <button onClick="getMovieDetails('${movie.imdbID}')">Show Details</button>
                </li>
                `

    })
    
    moviesUL.innerHTML = movieItems.join("")
        

    console.log(result)
}) 


movieRequest.open('GET', moviesURL)
movieRequest.send()

function getMovieDetails(imdbID) {

    // http://www.omdbapi.com/?i=insertSelectedimdbIDhere&apikey=8f49d5c6
    let detailRequest = new XMLHttpRequest()
    
    movieDetailRequest.addEventListener('load', function() {

    })
    movieDetailRequest.open('GET', detailsRequest)
    console.log(imdbID)
}