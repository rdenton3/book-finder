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
        var footer = document.createElement("footer")
        var aTag = document.createElement("a")

        // set values
        aTag.textContent = "Remove Bookmark"
        img.src = dispCover
        author.textContent = dispAuthor
        title.textContent = dispTitle
        title.setAttribute("id", savedBooks[i].savedTitle)

        // create class names
        card.classList = "card"
        card.setAttribute("id","card-fav")
        cardImg.classList = "card-image"
        fig.classList = "image is-2by3"
        cardCont.classList = "card-content"
        mediaCont.classList ="media-content"
        media.classList = "media"
        title.classList = "title is-4 is-size-6"
        author.classList = "subtitle is-6"
        col.classList = "column is-3"
        footer.classList = "card-footer"
        aTag.classList = "card-footer-item"

        // append elements to page
        footer.append(aTag)
        fig.appendChild(img)
        cardImg.appendChild(fig)
        mediaCont.append(title,author)
        media.appendChild(mediaCont)
        cardCont.appendChild(media)
        card.append(cardImg,cardCont,footer)
        col.appendChild(card)
        displayEl.appendChild(col)

        // when bookmark icon is clicked, grab this book's title and delete it from storage
        aTag.onclick = function(){
            var text = $(this).parent().siblings(".card-content")
            var bookTitle = text.children().children().children()
            var title = bookTitle[0].id
            // remove from local storage
            console.log(title)
            // first grab items already in local storage
            var savedBooks = JSON.parse(localStorage.getItem("storedBooks"))
            console.log(savedBooks)
            for (var i=0; i<savedBooks.length; i++){
                // need to parse all items in localstorage first
                // var savedBooks = JSON.parse(savedBooks[i])
                if (savedBooks[i].savedTitle === title){
                    // remove the clicked book
                    savedBooks.splice(i, 1)
                }
            }
            // reset local storage with updated object
            savedBooks = JSON.stringify(savedBooks)
            localStorage.setItem("storedBooks", savedBooks)
        }
    }
}

getLocal();
