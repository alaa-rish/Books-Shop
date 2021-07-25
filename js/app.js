/* eslint-disable indent */
'use strict';

let books = [];



let total = 0;
document.getElementById('btn').addEventListener('click', addBook);

//// Functions
function addBook(event) {
    event.preventDefault();
    let bookName = document.getElementById('bookName').value;
    let bookPrice = document.getElementById('bookPrice').value;
    let results = document.getElementById('results');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    results.appendChild(tr);
    td1.innerText = bookName;
    td2.innerText = getRandomArbitrary(1, 500);
    total = total + Number(bookPrice);
    td3.innerText = bookPrice;
    document.getElementById('totalprice').innerText = total;
    savedata(bookName, td2.innerText, bookPrice);
}

function savedata(bookName, bookPages, bookPrice) {
    books.push({
        bookName: bookName,
        bookPages: bookPages,
        bookPrice: bookPrice,
    });
    localStorage.setItem('books', JSON.stringify(books));




}


function loaddata() {
    if (localStorage.getItem('books') === null)
    return;

books = JSON.parse(localStorage.getItem('books'));
for (let index = 0; index < books.length; index++) {
    const element = books[index];
    let results = document.getElementById('results');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    results.appendChild(tr);
    td1.innerText = element.bookName;
    td2.innerText = element.bookPages;
    total = total + Number(element.bookPrice);
    td3.innerText = element.bookPrice;
    document.getElementById('totalprice').innerText = total;


    
}
}
loaddata();


function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};




