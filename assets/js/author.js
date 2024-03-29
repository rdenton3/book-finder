var searchEl = document.getElementById("search-button")
var inputEl = document.getElementById("user-input")
var resultsEl = document.getElementById("show-results")
var loadEl = document.getElementById("load")
// function getMeta(url){   
//     const img = new Image();
//     img.addEventListener("load", function() {
//         console.log(this.naturalWidth +' '+ this.naturalHeight );
//     });
//     img.src = url;
// }
// function getMeta(url){   
//     const img = new Image();
//     img.addEventListener("load", function() {
//         pixels = this.naturalWidth +' '+ this.naturalHeight
//         img.setAttribute("id", pixels)
//     });
//     getId = img.getAttribute("id")
//     console.log(getId, "help")
//     img.src = url;

// }

// when search button is clicked, grab user input and feed through api
var formSubmit = function() {
    // clear any existing data
    resultsEl.innerHTML = ""
    var userSearch = inputEl.value.trim()
    console.log(userSearch)
    authorPull(userSearch)
}

var authorPull = function(author) {
    apiUrl = "http://openlibrary.org/search.json?author=" + author
    var loader = '<progress class="progress is-medium is-dark" max="100">45%</progress>'
    loadEl.innerHTML = loader
    fetch(apiUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                authorLoop(data)
            })
        }
        // if invalid response is received, then alert user that search was unsuccessful
        else {
            resultsEl.innerHTML = "There was an error with your search. Please try again."
            loadEl.innerHTML = ""
        }
    })  
        .catch(function(error) {
        resultsEl.innerHTML = "Unable to connect to server. Please try again"
        loadEl.innerHTML = ""
        });
}

// loop over pulled data 
var authorLoop = function(data){
    // error handling - if author does not exist, then display message to user
    if(data.docs.length === 0) {
        // remove loading bar
        loadEl.innerHTML = ""
        resultsEl.innerHTML = "No titles by this author. Please try another search."
    }
    else{
    for (i=0; i<30; i++){
        var titleEl = data.docs[i].title
        var authorEl = data.docs[i].author_name
        // var description = data.docs[i]
        var isbn = data.docs[i].isbn[0]
        // run isbn through second api to grab book cover
        coverLoop(isbn, titleEl, authorEl)
    }
}
}

var coverLoop = function(isbn, title, author){
    apiUrl = "https://covers.openlibrary.org/b/isbn/" + isbn + "-M.jpg"
    // getMeta(apiUrl)
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
        titleEl.setAttribute("id", "styleTitle")
        // create class names
        card.classList = "card"
        card.setAttribute("id","card2")
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
        // remove loading bar
        loadEl.innerHTML = ""
    })
}

searchEl.addEventListener("click", formSubmit)

