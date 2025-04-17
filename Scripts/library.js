const BookName = document.querySelector('.Book-name');
const authorName = document.querySelector('.author-name');
const pageNumber = document.querySelector('.pages-number');
const addButton = document.querySelector('.addBtn');
const display = document.querySelector('.display');
const bookStore = document.querySelector('.book-store');
const myArray = [];

function renderingBook(){
    let booklist = "";
    myArray.forEach(function({name, author, page}, i){
        booklist += `
            <div class="Name-Author-js">
                <div> ${name} </div>
                <div> ${author} </div>
                <div> ${page} </div>
                <button onclick="deletebtn(${i})" class="js-delete-button">Delete</button>
            </div>
        `;
    });
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


