let images_arr = [
  "https://rukminim1.flixcart.com/flap/844/150/image/85398e150a7b5689.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/844/150/image/6d8435a5f89c9919.jpeg?q=50",
  "https://rukminim1.flixcart.com/flap/844/150/image/889ddf7dbb72351f.jpeg?q=50",
  "https://rukminim1.flixcart.com/flap/844/140/image/55e7366f5b654f71.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/844/150/image/80c3e6054c1db1b1.jpeg?q=50",
  "https://rukminim1.flixcart.com/flap/844/150/image/cf2750d24b874730.jpg?q=50"
];

let i = 0;

let slideShow = setInterval(function () {
  if (i === images_arr.length) {
    i = 0;
  }

  // let slideShow_div = document.querySelector('#slideshow')
  let img = document.querySelector("#slideshowimg");
  img.className = 'slides'
  img.src = images_arr[i];
  i++;
  // console.log(i);
}, 2000);