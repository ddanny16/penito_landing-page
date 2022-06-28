let div = document.getElementById("demo");

let hOnes = Array.from(div);
let url = "https://fakestoreapi.com/products";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((result) =>{
    let products = result.products;
products.map((products) =>{
    console.log(products.title)
    console.log(products.category)
    console.log(products.rating)

})
    
  })