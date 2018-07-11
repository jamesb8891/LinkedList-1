//*****This is where global variables live*****
var enterButton = document.querySelector(".enter-button");
var readButton = document.querySelector(".read-button");
var userWebsiteInput = document.querySelector(".user-website-input");
var userUrlInput = document.querySelector(".user-url-input");
var displayBookmarkArea = document.querySelector(".display-bookmark-area");
var userForm = document.querySelector(".user-form");


//*****This is where event listeners live*****
enterButton.addEventListener('click', createBookmark);
displayBookmarkArea.addEventListener('click', removeBookmark);
displayBookmarkArea.addEventListener('click', toggleRead);
userWebsiteInput.addEventListener('keyup', disableInput);
userUrlInput.addEventListener('keyup', disableInput);

//*****This is where functions live*****
function disableInput() {
  if (userWebsiteInput.value === '' || userUrlInput.value === '') {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  }
};

function createBookmark(event) {
  event.preventDefault();
  console.log("create bookmark");
  var newBookmark = document.createElement('ul');
  newBookmark.innerHTML = `<ul>
                             <div class='bookmark'>
                               <li>${userWebsiteInput.value}</li>
                               <li>${userUrlInput.value}</li>
                             </div>
                             <div>
                               <a target='_blank' href="${userUrlInput.value}">${userUrlInput.value}</a>
                             </div>
                             <div>
                               <input class="read-button" type="button" aria-label="" value="Read">
                               <input class="delete-button" type="button" aria-label="" value="Delete">
                             </div>
                           </article>`;
  displayBookmarkArea.appendChild(newBookmark);
  clearInput();
  updateCounts();
}

function clearInput() {
  userWebsiteInput.value = '';
  userUrlInput.value = '';
  redisableEnterButton();
}

function redisableEnterButton() {
  enterButton.disabled = true;
}

function toggleRead() {
  if (event.target.className === 'read-button') {
  event.target.parentNode.parentNode.classList.toggle('read');
  }
  updateCounts();
}

function removeBookmark() {
  if (event.target.className === 'delete-button') {
    event.target.parentNode.parentNode.remove();
  }
  updateCounts();
}

function updateCounts() {
  var readCount = document.querySelectorAll('.read').length;
  var totalCount = document.querySelectorAll('.bookmark').length;
  var unreadCount = (totalCount - readCount);
  console.log(totalCount + " total bookmarks");
  console.log(readCount + " read bookmarks");
  console.log (unreadCount + " unread bookmarks")
}