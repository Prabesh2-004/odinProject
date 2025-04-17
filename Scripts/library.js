// function Player(name, play){
//     if(!new.target){
//         console.log("Error You most write new to call constructor");
//     }
//     this.name = name;
//     this.play = play;
//     this.sayName = function (){
//         console.log(this.name);
//         console.log(this.play);
//     }
// }

// const Player1 = new Player("John", "O");
// const Player2 = new Player("Snow", "X");
// Player1.sayName();
// Player2.sayName();




// function book(Title, Author, Pages){
//     if(!new.target){
//         console.log("Error!");
//     }
//     this.Title = Title;
//     this.Author = Author;
//     this.Pages = Pages;
//     this.info = function () {
//         console.log("The Title of this book is " + this.Title + " was written by " + this.Author + " there are total " + this.Pages + " Pages." + " Not read yet!")
//     }
// }

// const book1 = new book("Psychology Of Money", "Morgen Housel", "200");
// const book2 = new book("Atomic Habit", "NoBody", "300");
// book1.info();
// book2.info();

const BookName = document.querySelector('.Book-name');
const authorName = document.querySelector('.author-name');
const pageNumber = document.querySelector('.pages-number');
const addButton = document.querySelector('.addBtn');
const display = document.querySelector('.display');
const bookStore = document.querySelector('.book-store');
const myArray = [];

function renderingBook(){
    let booklist = "";
    for (let i=0; i<myArray.length;i++){
        const booklistObject = myArray[i];
        const {name, author, page} = booklistObject;
        booklist += `
            <div class="Name-Author-js">
                <div> ${name} </div>
                <div> ${author} </div>
                <div> ${page} </div>
                <button onclick="deletebtn(${i})" class="js-delete-button">Delete</button>
            </div>
    `;
    }
    display.innerHTML = booklist;
}

addButton.addEventListener('click', function() {
    const inputBookName = BookName.value;
    const inputAuthorName = authorName.value;
    const inputPagesNumber = pageNumber.value;
    myArray.push({name: inputBookName, author: inputAuthorName, page: inputPagesNumber});
    BookName.value = "";
    authorName.value = "";
    pageNumber.value = "";
    renderingBook();
});

function deletebtn(i){
    myArray.splice(i, 1);
    renderingBook();
}


