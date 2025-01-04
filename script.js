// http://www.omdbapi.com/?i=tt3896198&apikey=953593f3
// import {searchMovie} from "./search.js"


let mainCards = document.getElementById("mainCard");

let search = "avatar"
let page = 1;
displayMovie(search)

async function displayMovie(searchData, page = 1) {
    try {
        let urlData = await fetch(`https://www.omdbapi.com/?s=${searchData}&page=${page}&apikey=953593f3`)
        let finalData = await urlData.json()
        console.log(finalData)

        allMovie = finalData.Search

        mainCards.innerHTML = "";

        allMovie.map((movie) => {
            console.log(movie)

            mainCards.innerHTML += `
            <div class="card">
                <img src="${movie.Poster} alt="Movie Image">
                <p><strong>${movie.Title}</strong></p>
                <p> Release Year : ${movie.Year}</p>
            </div>
        `;
        });

    } catch (error) {
        console.log(error)
    }
    console.log(allMovie)
}

function searchMovie() {

    search = document.getElementById("input").value.toLowerCase().trim();

    if (search == "") {
        mainCards.innerHTML = ""
        mainCards.innerHTML = "<h1>please enter the correct name</h1>"
        return
    }
    displayMovie(search)
}
document.getElementById("btn").addEventListener("click", searchMovie);

let nextButton = document.getElementById("Next")
nextButton.addEventListener("click", () => {
    
    // if (total === result) {
    //     mainCards.innerHTML = ""
    //     mainCards.innerHTML = "<h1>No more Data are Found</h1>"
    //     return
    // }
    displayMovie(search, ++page)
   
})

let newPrevious = document.getElementById("Previous")
newPrevious.addEventListener("click", () => {

    if (page===1) {
        mainCards.innerHTML = ""
        mainCards.innerHTML = "<h1>please go to the next button</h1>"
        return
    }
    displayMovie(search, --page)

})



