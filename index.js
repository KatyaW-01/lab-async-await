async function fetchAndDisplayPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    displayPosts(posts)
  } catch (error) {
    console.error('Error fetching posts data:', error)
  }
};

function displayPosts(posts) {
  posts.forEach((post) => {
    const postList = document.querySelector("#post-list")

    const list = document.createElement('li')
    const header = document.createElement('h1')
    header.textContent = post.title
    const paragraph = document.createElement('p')
    paragraph.textContent = post.body

    list.append(header)
    list.append(paragraph)
    postList.append(list)
  })
}

fetchAndDisplayPosts()


