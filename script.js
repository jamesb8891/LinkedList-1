//*****This is where global variables live*****
var enterButton = document.querySelector(".enter-button");
var readButton = document.querySelector(".read-button");
var deleteButton = document.querySelector(".delete-button");


//*****This is where event listeners live*****
enterButton.addEventListener("click", createBookmark);
readButton.addEventListener("click", markRead);
deleteButton.addEventListener("click", removeBookmark);



//*****This is where functions live*****
function createBookmark() {
  console.log("Bookmark created!!!");
}

function markRead() {
  console.log("Toggle read!!!");
  readButton.classList.add("read");
}

function removeBookmark() {
  console.log("Got that bookmark outta here!!!");
}