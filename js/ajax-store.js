const getTools = async () => {
  const url = "./data/inventory.json";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  return await response.json();
};

const createTools = (tools) => {
  const parentNode = document.querySelector(`#insertProducts`);
  tools.forEach((tool) => {
    const element = document.createElement("tr");
    element.classList.add("table-primary");
    element.innerHTML = `
      <td scope="row">${tool.title}</td>
      <td>${tool.quantity}</td>
      <td>$${tool.price}</td>
      <td>${tool.categories}</td>`;
    parentNode.appendChild(element);
  });
};

(async () => {
  const tools = await getTools();
  createTools(tools);
  const allCategories = document.querySelectorAll("td");
  allCategories.forEach((category) => {
    if (category.innerText.includes(",")) {
      let innerStr = category.innerText;
      innerStr = innerStr.replaceAll(",", " ,     ");
      category.innerText = innerStr;
    }
  });
})();
