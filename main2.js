const mainBtn = document.getElementById("main-btn");

// console.log(mainBtn);
const mainBtn2 = document.querySelector("#main-btn");

// console.log(mainBtn2);

const changeText = (event) => {
  if (event.target.id === "main-btn") {
    document.querySelector('#text').innerHTML = "You clicked that button!";
  }

}

const wholeBody = document.querySelector('body');

// mainBtn2.addEventListener('click', changeText);

wholeBody.addEventListener('click', changeText);

// const divElement = document.querySelector('#main');
// //#main is id in index html page
// divElement.innerHTML = "some other text";