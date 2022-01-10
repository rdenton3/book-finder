displayEl = document.querySelector("#show-favs")

// retrieve the favorites from local storage and display them on the page
// var getLocal = function() {
//     var savedBooks = localStorage.getItem("storedBooks")
//     savedBooks = JSON.parse(savedBooks)
//     console.log(savedBooks)
//     // loop through books and display on page
//     for (i=0; i < savedBooks.length; i++) {
//         var dispAuthor = savedBooks[i].savedAuthor
//         var dispTitle = savedBooks[i].savedTitle
//         var dispCover = savedBooks[i].savedCover
//         console.log(dispAuthor, dispTitle,dispCover)
//         // create html elements  
//         containerEl = document.createElement("div")
//         containerEl.classList = "result-style"
//         showTitle = document.createElement("div")
//         showTitle.textContent = dispTitle
//         showAuthor = document.createElement("div")
//         showAuthor.textContent = dispAuthor
//         showCover = document.createElement("img")
//         showCover.src = dispCover
//         // append items on to page
//         containerEl.append(showCover,showTitle,showAuthor)
//         displayEl.appendChild(containerEl)
//     }
// }

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

        // set values
        img.src = dispCover
        author.textContent = dispAuthor
        title.textContent = dispTitle

        // create class names
        card.classList = "card"
        cardImg.classList = "card-image"
        fig.classList = "image is-2by3"
        cardCont.classList = "card-content"
        mediaCont.classList ="media-content"
        media.classList = "media"
        title.classList = "title is-4"
        author.classList = "subtitle is-6"

        // append elements to page
        fig.appendChild(img)
        cardImg.appendChild(fig)
        mediaCont.append(author,title)
        media.appendChild(mediaCont)
        cardCont.appendChild(media)
        card.append(cardImg,cardCont)
        displayEl.appendChild(card)
    }
}
// var getLocal = function() {
//     var savedBooks = localStorage.getItem("storedBooks")
//     savedBooks = JSON.parse(savedBooks)
//     console.log(savedBooks)
//         // loop through books and display on page
//     for (i=0; i < savedBooks.length; i++) {
//         dispCover = savedBooks[i].savedCover
//         console.log(dispCover)
//         // create all card contents
//         var card = document.createElement("div")
//         var cardImg = document.createElement("div")
//         var fig = document.createElement("figure")

//         // set class names
//         card.classList = "card"
//         cardImg.classList = "card-image"
//         fig.classList = "image is-2by3"

//         // append elements
//         fig.appendChild(dispCover)
//         cardImg.appendChild(fig)
//         card.appendChild(cardImg)
//         displayEl.appendChild(card)
//     }
// }
getLocal();