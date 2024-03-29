// var resultsEl = document.querySelector(".show-results")
var resultsEl = document.getElementById('show-results')
var optionEl = document.getElementById('my-select')
var bookmarkEl  = document.getElementsByTagName("i");

var getBooks = function(category) {
    // take the user selection and find the corresponding text item to run through api
    var categoryMatch = optionEl.value.trim()
    category = categoryLookup(categoryMatch)
    // dynamic api url
    var apiUrl = "https://api.nytimes.com/svc/books/v3/lists/current/" + category + ".json?api-key=K1GxuJ1AkeAHy6BPRuFAGpG9GmITR0Eu"
    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            // call function to loop through data, create element, and display on screen
            bookLoop(data)
        })
    })
}
// take the user selection and find the corresponding text item to run through api
var categoryLookup = function(userSelect){
    if (userSelect === "Fiction") {
        category = "hardcover-fiction"
        return category
    }
    else if (userSelect === "Non-Fiction") {
        category = "hardcover-nonfiction"
        return category
    }
    else if (userSelect === "Advice, How-To, and Misc.") {
        category = "advice-how-to-and-miscellaneous"
        return category
    }
    else if (userSelect === "Children's Books") {
        category = "picture-books"
        return category
    }
    else if (userSelect === "Young Adult") {
        category = "young-adult"
        return category
    }
    else if (userSelect === "Business") {
        category = "business-books"
        return category
    }
    else if (userSelect === "Food and Fitness") {
        category = "food-and-fitness"
        return category
    }
    else if (userSelect === "Religion, Spirituality, and Faith") {
        category = "religion-spirituality-and-faith"
        return category
    }
    else if (userSelect === "Science") {
        category = "science"
        return category
    }
    else if (userSelect === "Sports") {
        category = "sports"
        return category
    }
    else if (userSelect === "Travel") {
        category = "travel"
        return category
    }
}
// loop over pulled data 
var bookLoop = function(data) {
    // clear any existing data
    resultsEl.innerHTML = ""
    for (i=0; i<data.results.books.length; i++) {
        // collect the variables we need from api
        var rank = data.results.books[i].rank
        var title = data.results.books[i].title
        var author = data.results.books[i].author
        
        var photo = data.results.books[i].book_image
        var link = data.results.books[i].amazon_product_url
        // if description is left blank, tell user no description
        if (data.results.books[i].description === "") {
            var description = "No description available"
        }
        else {var description = data.results.books[i].description}
        // then create element html element and add api data to it
        // also create unique data attribute to save into local storage
        var rankEl = document.createElement("p")
        rankEl.textContent = "Rank: " + rank
        var titleEl = document.createElement("p")
        titleEl.textContent = "Book Title: " + title
        titleEl.classList = "title"
        // titleEl.setAttribute()
        var authorEl = document.createElement("p")
        authorEl.textContent = "Author: " + author
        authorEl.classList = "subtitle is-6"
        var img = document.createElement("img")
        img.src = photo
        // img.classList = "cover"
        var descriptionEl = document.createElement("p")
        descriptionEl.textContent = "Description: " + description
        var linkEl = document.createElement("a")
        linkEl.textContent = link

        // creating new html tags and appending elements in order to show cards correctly
        var bookEl = document.createElement("div")
        bookEl.classList = "card"
        // creating card image
        var cardImg = document.createElement("div")
        cardImg.classList = "card-image"
        var cardFig = document.createElement("figure")
        cardFig.classList = "image is-2by3"
        cardFig.appendChild(img)
        cardImg.appendChild(cardFig)
        
        // create rank, title + author 
        var cardContent = document.createElement("div")
        cardContent.classList = "card-content"
        var media = document.createElement("div")
        media.classList = "media"
        var mediaContent = document.createElement("div")
        mediaContent.classList = "media-content"
        mediaContent.append(titleEl,authorEl)
        media.append(mediaContent)
        cardContent.appendChild(media)

        // create footer 
        var footer = document.createElement("footer")
        footer.classList = "card-footer"
        var aTag = document.createElement("a")
        var aTag2 = document.createElement("a")
        var iconEl = document.createElement("i")
        iconEl.classList = "fas fa-bookmark ml-2"
        aTag.textContent = "Bookmark"
        aTag2.textContent = "Purchase"
        aTag2.href= link
        aTag2.target = "_blank"
        aTag.appendChild(iconEl)
        aTag.classList = "card-footer-item"
        aTag.setAttribute("id", "bookmark-add")
        aTag2.classList = "card-footer-item"
        footer.append(aTag,aTag2)

        var col = document.createElement("div")
        col.classList = "column is-3"

        // create content box for description
        var content = document.createElement("div")
        content.classList = "content"
        content.appendChild(descriptionEl)
        // // append elements 
        bookEl.append(cardImg,cardContent,content,footer)
        col.appendChild(bookEl)
        resultsEl.appendChild(col)

        // when bookmark icon is clicked, grab this book's title,author, cover so we can store in storage
        aTag.onclick = function(){
            // change text content to tell the user they have successfully added the book to bookmark tab
            this.innerHTML = "Added"
            // grabbing the rest of the variables to save down into local storage
            var text = $(this).parent().siblings(".card-content")
            var link = $(this).parent().siblings(".card-image")
            var bookTitle = text.children().children().children()
            var title = bookTitle[0].innerText
            var bookAuthor = text.children().children().children()
            var author = bookAuthor[1].innerText
            var coverLink = link.children().children()
            var cover = coverLink[0].currentSrc
            setLocal(title, author, cover, link)
        }

    }
}
// when user clicks the bookmark icon, save the title and info into local storage
var setLocal = function(title, author, cover,link) {
    //check if books array already exist, else create an array
    var storedBooks = JSON.parse(localStorage.getItem("storedBooks")) || []
    var newBook = {savedTitle: title, savedAuthor:author, savedCover: cover, savedLink:link}
    // push object into an array
    storedBooks.push(newBook)
    // save to local storage
    localStorage.setItem("storedBooks", JSON.stringify(storedBooks))
}

optionEl.addEventListener('change', getBooks);

