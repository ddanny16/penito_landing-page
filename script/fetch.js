function createNode(element) {
  return document.createElement(element);
}
function append(parent, el) {
  return parent.appendChild(el);
}
const div = document.getElementById("items");
const url = "https://fakestoreapi.com/products?limit=10";

fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    console.log(data)
    let items = data;
    return items.map(function (item) {
      let li = createNode("li");
      img = createNode("img");
      span = createNode("span");
      img.src = item.image;
      span.innerHTML = `${item.title} ${item.category} ${item.price}`;
      append(li, img)
      append(li, span)
      append(div, li)
    });
  })
  .catch(function(error){
    console.log(error)
  })
