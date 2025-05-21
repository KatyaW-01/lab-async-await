// Write your code here!
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
function displayPosts(posts) {
  posts.forEach((post) => {
    const list = document.createElement('li')
    const header = document.createElement('h1')
  })
  
}
