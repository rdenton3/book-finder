var searchEl = document.getElementById("search-button")
var inputEl = document.getElementById("user-input")
var resultsEl = document.getElementById("show-results")

// when search button is clicked, grab user input and feed through api
var formSubmit = function() {
    var userSearch = inputEl.value.trim()
    console.log(userSearch)
    authorPull(userSearch)
}

var authorPull = function(author) {
    apiUrl = "http://openlibrary.org/search.json?author=" + author
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data)
            authorLoop(data)
        })
    })
}

// loop over pulled data 
var authorLoop = function(data){
    for (i=0; i<30; i++){
        var title = data.docs[i].title
        var isbn = data.docs[i].isbn[0]
        console.log(isbn)
        coverLoop(isbn)
    }
}

var coverLoop = function(isbn){
    apiUrl = "https://covers.openlibrary.org/b/isbn/" + isbn + "-M.jpg"
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data)
        })
    })
}
// take user's city input and feed through API
searchEl.addEventListener("click", formSubmit )

