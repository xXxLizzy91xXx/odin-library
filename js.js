let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        let container = document.querySelector('#books')
        let div = document.createElement('div');
        div.innerHTML = `${title}, ${author}, ${pages}, ${read}`;
        div.style.border = "2px solid black";
        div.style.backgroundColor = "navy";
        div.style.color = "white";
        container.appendChild(div);
    }
    
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 Pages', 'Not Read Yet')
theHobbit.info();


function addBookToLibrary() {
    
}

// Grabs form under the ID getBook
const form = document.getElementById("getBook");

// When 'Add Book' button is clicked- this function opens the form
function openForm(){
    form.style.display = "block";
}

// When 'Close' button is clicked this function closes the form
function closeForm() {
    form.style.display = "none";
}

// If user clicks outside the form box the form closes
window.onclick = function(event) {
    let modal = document.getElementById("getBook");
    if(event.target === modal) {
        closeForm();
    }
}

