// const myBTN1 = document.querySelector(".myBTN1");
// const myBTN2 = document.querySelector(".myBTN2");
// const myBTN3 = document.querySelector(".myBTN3");
// const myBTN4 = document.querySelector(".myBTN4");
// const textbox = document.querySelector(".hero-box");

// myBTN1.addEventListener("click", e => {
//     textbox.classList.add("fancy-header");
// });
// myBTN2.addEventListener("click", e => {
//     textbox.innerText = "Hello World!";
// });
// myBTN3.addEventListener("click", e => {
//     textbox.innerText = "";
// });
// myBTN4.addEventListener("click", e => {
//     [myBTN1, myBTN2, myBTN3].forEach((i) => {
//         i.classList.add("display-none");
//         textbox.innerText = "You clicked myBTN4, other buttons disappeared";
//     })
// });
(() => {
  const h1 = document.querySelector("h1");
  const ps = document.querySelectorAll("p");
  const lis = document.querySelectorAll("li");

  document.body.addEventListener("click", (e) => {
    h1.style.backgroundColor = "red";
  });

  ps.forEach((i) => {
    i.addEventListener("dblclick", (e) => {
      ps.forEach((i) => {
        i.style.fontSize = "18px";
      });
    });
  });

  lis.forEach((i) => {
    i.style.color = "black";
    i.addEventListener("mouseover", (e) => {
      i.style.color = "red";
    });
    i.addEventListener("mouseleave", (e) => {
      i.style.color = "black";
    });
  });
})();
