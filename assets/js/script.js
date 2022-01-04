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
            // call function to loop through data, create element, and display on screen
            bookLoop(data)
            // when the data is called, pass it into displayBooks function to show on page
            console.log(data)
            displayBooks(data, category)
        })
    })
}
// loop over pulled data 
var bookLoop = function(data) {
    for (i=0; i<data.results.books.length; i++) {
        var title = data.results.books[i].title
        var author = data.results.books[i].author
        var photo = data.results.books[i].book_image
        console.log(title)
    }
}
var displayBooks = function(data, category){
    console.log("display function worked")

}

getBooks();