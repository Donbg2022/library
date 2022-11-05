let myLibrary = [];

function book(author, title, pages, read) {
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read
}



  const theAuthor = document.getElementById("author").value
  const theTitle = document.getElementById("title").value
  const numOfPages = document.getElementById("pages").value
  const readOrNot = document.getElementById("read").value
  const btn = document.querySelector('#btn');
btn.addEventListener('click', addBookToLibrary)


//add book to library when inputs are filled
function addBookToLibrary(e){
  //prevents reloading
  e.preventDefault

  
  myLibrary.push(new book(theAuthor, theTitle, numOfPages, readOrNot))


  const div = document.querySelector('#bookShelf')

  let newP = document.createElement('p')
  newP.innerText = `${theTitle} by ${theAuthor} is ${numOfPages} long`;
  div.append(newP)

  
}


//when book is added the form goes away
const x = document.querySelector('#x')
x.addEventListener('click', function(){
  formWrapper.style.display = 'none'
})
  

//popup the form when button is clicked
const popupBtn = document.querySelector('#add-book')
const formWrapper = document.querySelector('form')
popupBtn.addEventListener('click', function(){
  formWrapper.style.display = 'block'
  console.log('clicked')
})





