// var getBooks = function(response) {
//     fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=K1GxuJ1AkeAHy6BPRuFAGpG9GmITR0Eu")
//     .then(response)
// }

// var response = fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=K1GxuJ1AkeAHy6BPRuFAGpG9GmITR0Eu")
// .then(function(response) {
//     response.json().then(function(data){
//         console.log(data)
//     })
// })

var getBooks = function(category) {
    // dynamic api url
    var category = "hardcover-fiction"
    var apiUrl = "https://api.nytimes.com/svc/books/v3/lists/current/" + category + ".json?api-key=K1GxuJ1AkeAHy6BPRuFAGpG9GmITR0Eu"
    // var apiUrl = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=K1GxuJ1AkeAHy6BPRuFAGpG9GmITR0Eu"
    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            // when the data is called, pass it into displayBooks function to show on page
            console.log(data)
            displayBooks(data, category)
        })
    })
}

var displayBooks = function(data, category){
    console.log("display function worked")
}

getBooks();