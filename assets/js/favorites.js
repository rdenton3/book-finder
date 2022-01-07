displayEl = document.querySelector(".show-favs")
// retrieve the favorites from local storage and display them on the page
var getLocal = function() {
    var savedBooks = localStorage.getItem("storedBooks")
    savedBooks = JSON.parse(savedBooks)
    console.log(savedBooks)
    // loop through books and display on page
    for (i=0; i < savedBooks.length; i++) {
        var dispAuthor = savedBooks[i].savedAuthor
        var dispTitle = savedBooks[i].savedTitle
        var dispCover = savedBooks[i].savedCover
        console.log(dispAuthor, dispTitle,dispCover)
        // create html elements  
        containerEl = document.createElement("div")
        containerEl.classList = "result-style"
        showTitle = document.createElement("div")
        showTitle.textContent = dispTitle
        showAuthor = document.createElement("div")
        showAuthor.textContent = dispAuthor
        showCover = document.createElement("img")
        showCover.src = dispCover
        // append items on to page
        containerEl.append(showCover,showTitle,showAuthor)
        displayEl.appendChild(containerEl)
    }
}

getLocal();