import { books } from "../data/books.js";

const renderBookElement = (book) => {
  const { isbn10, title, categories, published_year, authors } = book;
  const bookElement = document.createElement("tr");
  bookElement.innerHTML = `
                                <td>${title}</td>
                                <td>${authors}</td>
                                <td>${categories}</td>
                                <td>${isbn10}</td>
                                <td>${published_year}</td>
                                <td>
                                    <button class="btn btn-sm btn-danger" data-delete >Delete</button>
                                </td>
  `;

  const deleteBtn = bookElement.querySelector("button[data-delete]");
  //"button[data-delete]" is the the way to query select an element's attribute.
  deleteBtn.addEventListener("click", (e) => {
    bookElement.remove();
  });

  document.querySelector("#book-list").appendChild(bookElement);
};

// MAIN
(() => {
  for (let book of books) {
    renderBookElement(book);
  }
})();
