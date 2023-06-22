// Grabs form
const form = document.getElementById("modal");

// When 'Add Book' button is clicked- this function opens the form
function openForm(){
    form.style.display = "block";
}

// Closes the form when the button is clicked
function closeForm() {
    form.style.display = "none";
}

// If user clicks outside the form box the form closes
window.onclick = function(event) {
    if(event.target === form) {
        closeForm();
    }
}

document.getElementById("getBook").addEventListener("submit", function(event) {
    //Prevents form from submitting and refreshing
    event.preventDefault();

    //Gets the form data
    const title = document.getElementById("booktitle").value;
    const author = document.getElementById("bookauthor").value;
    const pages = document.getElementById("bookpages").value;
    const read = document.getElementById("bookread").value;

    //Make a new object
    const book = { title, author, pages, read };

    //Function to display book on page
    displayBook(book);

    //Reset form
    document.getElementById("getBook").reset();

    //Closes form
    closeForm();
})

function displayBook(book) {
    const bookList = document.getElementById("books");

    //Create element to display book
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book");

    //Create para to display books
    const bookDetails = document.createElement("p");
    bookDetails.classList.add("booklist");
    
    bookDetails.innerHTML = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read}`;
    
    // Create btn
    const deleteButton = document.createElement("button");
    // Assign class to btn for style
    deleteButton.classList.add("deletebtn");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener("click", function(){
        //Removes book when Delete is clicked
        bookContainer.remove();
    });

    // Change the status of read
    const readStatus = document.createElement("button");
    readStatus.classList.add("readbtn");
    readStatus.textContent = "Read?";
    readStatus.addEventListener("click", function(){
        if(book.read === "Yes") {
            book.read = "No";
        } else {
            book.read = "Yes";
        }
        bookDetails.innerHTML = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read}`;
    })

    //Displays the details and button to container
    bookContainer.appendChild(bookDetails);
    bookContainer.appendChild(deleteButton);
    bookContainer.appendChild(readStatus)

    bookList.appendChild(bookContainer);
}