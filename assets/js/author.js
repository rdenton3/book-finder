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
        var titleEl = data.docs[i].title
        var authorEl = data.docs[i].author_name
        // var description = data.docs[i]
        var isbn = data.docs[i].isbn[0]
        // run isbn through second api to grab book cover
        coverLoop(isbn, titleEl, authorEl)
}
}

var coverLoop = function(isbn, title, author){
    apiUrl = "https://covers.openlibrary.org/b/isbn/" + isbn + "-M.jpg"
    console.log(apiUrl)
    fetch(apiUrl).then(function(response){
        var url = response.url
        // create elements to display data on page
        var card = document.createElement("div")
        var cardImg = document.createElement("div")
        var fig = document.createElement("figure")
        var img = document.createElement("img")
        var cardCont = document.createElement("div")
        var media = document.createElement("div")
        var mediaCont = document.createElement("div")
        var titleEl = document.createElement("p")
        var authorEl = document.createElement("p")
        var col = document.createElement("div")

        // set values
        img.src = url
        titleEl.textContent = title 
        authorEl.textContent = author

        // create class names
        card.classList = "card"
        cardImg.classList = "card-image"
        fig.classList = "image is-2by3"
        cardCont.classList = "card-content"
        mediaCont.classList ="media-content"
        media.classList = "media"
        titleEl.classList = "title is-4 zzz"
        authorEl.classList = "subtitle is-6"
        col.classList = "column is-3"

        // append elements to page
        fig.appendChild(img)
        cardImg.appendChild(fig)
        mediaCont.append(titleEl,authorEl)
        media.appendChild(mediaCont)
        cardCont.appendChild(media)
        card.append(cardImg,cardCont)
        col.appendChild(card)
        resultsEl.appendChild(col)
    })
}


searchEl.addEventListener("click", formSubmit)

