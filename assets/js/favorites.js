displayEl = document.querySelector("#show-favs")

var getLocal = function(){
    var savedBooks = localStorage.getItem("storedBooks")
    savedBooks = JSON.parse(savedBooks)
    // loop through books and display on page
    for (i=0; i < savedBooks.length; i++) {
        // pull elements from array
        var dispCover = savedBooks[i].savedCover
        var dispTitle = savedBooks[i].savedTitle
        var dispAuthor = savedBooks[i].savedAuthor

        // create elements
        var card = document.createElement("div")
        var cardImg = document.createElement("div")
        var fig = document.createElement("figure")
        var img = document.createElement("img")
        var cardCont = document.createElement("div")
        var media = document.createElement("div")
        var mediaCont = document.createElement("div")
        var title = document.createElement("p")
        var author = document.createElement("p")
        var col = document.createElement("div")

        // set values
        img.src = dispCover
        author.textContent = dispAuthor
        title.textContent = dispTitle
        title.setAttribute("id", "styleTitle")

        // create class names
        card.classList = "card"
        cardImg.classList = "card-image"
        fig.classList = "image is-2by3"
        cardCont.classList = "card-content"
        mediaCont.classList ="media-content"
        media.classList = "media"
        title.classList = "title is-4 zzz"
        author.classList = "subtitle is-6"
        col.classList = "column is-3"

        // append elements to page
        fig.appendChild(img)
        cardImg.appendChild(fig)
        mediaCont.append(title,author)
        media.appendChild(mediaCont)
        cardCont.appendChild(media)
        card.append(cardImg,cardCont)
        col.appendChild(card)
        displayEl.appendChild(col)
    }
}

getLocal();