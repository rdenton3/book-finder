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
    }
}

getLocal();