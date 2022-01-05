var mainEl = document.querySelector(".search")
var optionEl = document.getElementById('my-select')

var test = function() {
    category = optionEl.value.trim()
    console.log(category)
}
var getBooks = function(category) {
    // dynamic api url
    var category = "hardcover-fiction"
    var apiUrl = "https://api.nytimes.com/svc/books/v3/lists/current/" + category + ".json?api-key=K1GxuJ1AkeAHy6BPRuFAGpG9GmITR0Eu"
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
        // collect the variables we need
        var title = data.results.books[i].title
        var author = data.results.books[i].author
        var description = data.results.books[i].description
        var photo = data.results.books[i].book_image
        var link = data.results.books[i].amazon_product_url
        
        // then create element html element and add api data to it
        var titleEl = document.createElement("div")
        titleEl.textContent = "Book Title: " + title
        var authorEl = document.createElement("div")
        authorEl.textContent = "Author: " + author
        var img = document.createElement("img")
        img.src = photo
        var descriptionEl = document.createElement("div")
        descriptionEl.textContent = "Description: " + description
        var linkEl = document.createElement("a")
        linkEl.textContent = "Amazon Link: " + link
        // div to hold all book elements
        var bookEl = document.createElement("div")
        // // append elements 
        bookEl.append(img, titleEl, authorEl, descriptionEl, linkEl)
        mainEl.appendChild(bookEl)
    }
}
var displayBooks = function(data, category){
    console.log("display function worked")

}

// getBooks();
// optionEl.addEventListener("click", test)

// optionEl.addEventListener('change', function() {
//     console.log('You selected: ', this.value);
//   });

optionEl.addEventListener('change', test);