// listen for form submit
document.getElementById("myForm").addEventListener("submit", saveBookmark);

// Save Bookmark
function saveBookmark(e) {
  // Get form values
  let siteName = document.getElementById("siteName").value;
  console.log(siteName);

  let siteUrl = document.getElementById("siteUrl").value;

  let bookmark = {
    name: siteName,
    url: siteUrl,
  };
  // console.log(bookmark);

  /*
  //Local storage Test
  localStorage.setItem("test", "Hello world");
  console.log(localStorage.getItem("test"));
  localStorage.removeItem("test");
  console.log(localStorage.getItem("test"));
*/

  // Test if bookmarks is null
  if (localStorage.getItem("bookmarks") === null) {
    // init array
    let bookmarks = [];
    //Add to array
    bookmarks.push(bookmark);

    //Set to localStorage
    localStorage.setItem("bookmarks", JASON.stringify(bookmarks));
  }
  //Prevent from submitting
  e.preventDefault();
}
