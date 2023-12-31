const handleAddBtn = () => {
  const btnAdd = document.querySelector(".add");
  const toDoForm = document.querySelector("#to-do-form");
  btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector("#to-do").value;
    let liArr = document.querySelectorAll("ol > li");
    console.log("hello");
    const maximum = 10;

    if (liArr.length < maximum) {
      if (input) {
        const liEliment = document.createElement("li");
        liEliment.classList.add(
          "to-do-item",
          "list-group-item",
          "d-flex",
          "justify-content-between",
          "align-items-center"
        );

        liEliment.innerHTML = `
          <p class="m-0">${input}</p>
          <button class="btn btn-danger">Done</button>
        `;

        liEliment.querySelector(".btn-danger").addEventListener("click", () => {
          liEliment.remove();
        });

        const parentNode = document.querySelector("#to-do-list");
        parentNode.appendChild(liEliment);
        toDoForm.reset();
      } else {
        alert("Empty to-do is not captured");
      }
    } else {
      alert(`You reached the maximum! Finish some to-dos`);
    }
  });
};

(() => {
  handleAddBtn();
})();
