import { books } from "../data/books.js";

const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

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

  return bookElement;
};

const updateBooks = (books) => {
  // clear out the books container
  document.querySelector("#book-list").innerHTML = "";
  const categoryInput = document.querySelector("#category");
  const searchInput = document.querySelector("#search");

  const searchValue = searchInput.value;
  const categoryValue = categoryInput.value;

  let filteredBooks = books;

  filteredBooks = filteredBooks.filter((book) => {
    if (!categoryValue) {
      return true;
    }
    if (typeof book.categories !== "string") {
      return false;
    }
    return book.categories.toLowerCase().includes(categoryValue.toLowerCase());
  });

  filteredBooks = filteredBooks.filter((book) => {
    if (!searchValue) {
      return true;
    }
    if (typeof book.title !== "string") {
      return false;
    }
    return book.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  const booksFragment = document.createDocumentFragment();
  // render filtered array
  for (let book of filteredBooks) {
    booksFragment.appendChild(renderBookElement(book));
  }
  document.querySelector("#book-list").appendChild(booksFragment);
};

const handleFilterEvents = (books) => {
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener(
    "input",
    debounce((e) => {
      if (searchInput.value.toLowerCase() === "the") {
        return;
      }
      updateBooks(books);
    }, 500)
  );

  const categoryInput = document.querySelector("#category");
  categoryInput.addEventListener("change", (e) => {
    updateBooks(books);
  });
};

// MAIN
(() => {
  updateBooks(books);
  handleFilterEvents(books);
})();
