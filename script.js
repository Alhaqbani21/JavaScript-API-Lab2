// let url = 'https://jsonplaceholder.typicode.com/posts';

// fetch(url, { method: 'GET' })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data[0].id);
//     let collection = document.querySelector('.collection');
//     data.forEach((e, index) => {
//       let list = document.createElement('li');
//       list.innerText = `${index + 1} ${e.title}`;
//       collection.appendChild(list);
//     });
//   });

let image = document.querySelector('#image');
let url = 'https://coffee.alexflipnote.dev/random.json';

setInterval(() => {
  fetch(url, { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.file);
      image.src = `${data.file}`;
    });
}, 2000);
