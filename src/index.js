  let imageId = 5276 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const form = document.getElementById("comment_form")

fetch(imageURL)
  .then(response => response.json())
  .then(object => {
    const imageTitle = document.getElementById('name')
    imageTitle.innerText = object.name

    const mainImage = document.getElementById('image')
    mainImage.src = object.url

    const likeNumber = document.getElementById('likes')
    likeNumber.innerHTML = object.like_count

    const likeButton = document.getElementById('like_button')
    likeButton.addEventListener('click', (event)=> likeNumber.innerHTML++)

  })


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target)
  const comment = formData.get("comment")

  let li = document.createElement("li")
  
  li.textContent = comment

  document.body.append(li)
  document.getElementById('comment_form').reset();
  
})

// fetch(likeURL, {
//   method: "POST",
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: {
//     image_id: 5276
//     JSON.stringify({like_count})
//   }
  
// })