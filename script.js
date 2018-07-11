var enterButton = document.querySelector(".enter-button");
var readButton = document.querySelector(".read-button");
var userWebsiteInput = document.querySelector(".user-website-input");
var userUrlInput = document.querySelector(".user-url-input");
var displayBookmarkArea = document.querySelector(".display-bookmark-area");
var userForm = document.querySelector(".user-form");
var totalBookmarks = document.querySelector(".total-bookmarks");
var readBookmarks = document.querySelector(".read-bookmarks");
var unreadBookmarks = document.querySelector(".unread-bookmarks");

enterButton.addEventListener('click', createBookmark);
displayBookmarkArea.addEventListener('click', removeBookmark);
displayBookmarkArea.addEventListener('click', toggleRead);
userWebsiteInput.addEventListener('keyup', disableInput);
userUrlInput.addEventListener('keyup', disableInput);

function disableInput() {
  if (userWebsiteInput.value === '' || userUrlInput.value === '') {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  }
}

function createBookmark(event) {
  event.preventDefault();
  if (urlChecker() === true) {
  var newBookmark = document.createElement('article');
  newBookmark.innerHTML = `<div class='bookmark'>
                            <h2>${userWebsiteInput.value}</h2>
                          </div>
                          <div>
                            <a target='_blank' href="${userUrlInput.value}">${userUrlInput.value}</a>
                          </div>
                          <div>
                            <input class="read-button" type="button" aria-label="" value="Read">
                            <input class="delete-button" type="button" aria-label="" value="Delete">
                          </div>`;
  displayBookmarkArea.appendChild(newBookmark);
  clearInput();
  updateCounts();
  } else {
    alert('Enter valid URL!!!');
  }
}

function clearInput() {
  userWebsiteInput.value = '';
  userUrlInput.value = '';
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
  totalBookmarks.innerText = 'Total Bookmarks: ' + totalCount;
  readBookmarks.innerText = 'Read Bookmarks: ' + readCount;
  unreadBookmarks.innerText = 'Unread Bookmarks: ' + unreadCount;
}

function urlChecker() {
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(userUrlInput.value)) {
          return true;
        } else {
          return false;
        }
}

