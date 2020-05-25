
// function loadImageAsync(url) {
//     return new Promise(function(resolve, reject) {
//       const image = new Image();
  
//       image.onload = function() {
//         resolve(image);
//       };
  
//       image.onerror = function() {
//         reject(new Error('Could not load image at ' + url));
//       };
  
//       image.src = url;
//     });
//   }

//   const url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588227821888&di=797eefa3edda7e96270ce8e0c9a45163&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F5366d0160924ab1857f1cbae35fae6cd7a890b47.jpg'
//   loadImageAsync(url)
// // const promise = new Promise((resolve, reject) => {
//     // const url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588227821888&di=797eefa3edda7e96270ce8e0c9a45163&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F5366d0160924ab1857f1cbae35fae6cd7a890b47.jpg'
//     // const imgObj = new Image()
//     // imgObj.onload = () => {
//     //     console.log('success: ', imgObj.width)
//     //     resolve(imgObj)
//     // }
//     // imgObj.onerror = () => {
//     //     reject(new Error('Cloud not load image at ' + url))
//     // }
//     // imgObj.src = url

// // })
// // promise
// // .then(
// //     image => console.log('image: ', image)
// // )
// // .catch(
// //     err => console.log('err: ', err)
// // )

// var myImage = new Image(100, 200)
console.log('1: ', document)