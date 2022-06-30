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
      span.innerHTML = `<h3>TITLE:</h3>${item.title} <h3>Category:</h3>${item.category} <h3>Price:</h3>${item.price} <h3>Rate</h3>${item.rating.rate}`;
      append(li, img)
      append(li, span)
      append(div, li)
    });
  })
  .catch(function(error){
    console.log(error)
  })
