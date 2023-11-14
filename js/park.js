(() => {
  const btnYellow = document.querySelector(".btn-yellow");
  const clickH3 = document.querySelectorAll("h3");
  const lis = document.querySelectorAll("li");

  const handleBtnYellow = () => {
    const uls = document.querySelectorAll("ul");
    uls.forEach((value) => {
      value.lastElementChild.style.backgroundColor = "yellow";
    });
  };

  const handleH3 = () => {
    clickH3.forEach((i) => {
      i.addEventListener("click", () => {
        i.nextElementSibling.style.fontWeight = "bold";
      });
    });
  };

  const handleLis = () => {
    lis.forEach((li) => {
      li.addEventListener("click", () => {
        li.parentElement.firstElementChild.style.color = "blue";
      });
    });
  };

  const isLeft = () => {
    let rand = Math.random();
    if (rand > 0.5) {
      return true;
    } else {
      return false;
    }
  };

  btnYellow.addEventListener("click", handleBtnYellow);
  handleH3();
  handleLis();

  const btnLeft = document.querySelector(".btn-left");
  const btnMid = document.querySelector(".btn-mid");
  const btnRight = document.querySelector(".btn-right");

  const leftPic = document.querySelector(".picture1");
  const midPic = document.querySelector(".picture2");
  const rightPic = document.querySelector(".picture3");

  let pic1src = "url('./img/github.svg')";
  let pic2src = "url('./img/icons8-facebook.svg')";
  let pic3src = "url('./img/icons8-twitter.svg')";

  const handleBtnLeft = () => {
    leftPic.style.backgroundImage = pic2src;
    midPic.style.backgroundImage = pic1src;

    pic1src = leftPic.style.backgroundImage;
    pic2src = midPic.style.backgroundImage;
  };

  const handleBtnRight = () => {
    midPic.style.backgroundImage = pic3src;
    rightPic.style.backgroundImage = pic2src;
  };

  const handleBtnMid = () => {
    if (isLeft) {
      midPic.style.backgroundImage = pic1src;
      leftPic.style.backgroundImage = pic2src;

      pic1src = leftPic.style.backgroundImage;
      pic2src = midPic.style.backgroundImage;
    } else {
      midPic.style.backgroundImage = pic3src;
      rightPic.style.backgroundImage = pic2src;

      pic3src = rightPic.style.backgroundImage;
      pic2src = midPic.style.backgroundImage;
    }
  };

  btnLeft.addEventListener("click", handleBtnLeft);
  btnRight.addEventListener("click", handleBtnRight);
  btnRight.addEventListener("click", handleBtnMid);
})();
