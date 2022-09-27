// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
 const price = product.querySelector('.price span')
 const quantity = product.querySelector('.quantity input')
 // Aca accedemos a los valores de la tabla
  //console.log(price.innerHTML)
  //console.log(quantity.value)

  const innerPrice= price.innerHTML;
  const innerQuantity = quantity.value;

  const subtotal= innerPrice*innerQuantity;

  //console.log(subtotal)

  product.querySelector('.subtotal span').innerHTML =
  `<span>${subtotal}</span>`

  return subtotal
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  //const singleProduct = document.querySelector('.product');
  //console.log(singleProduct)
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
  console.log(allProducts)
  console.log(allProducts[0])
  console.log(allProducts[1])

  let total=0
  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  } 


  document.querySelector('#total-value span').innerHTML = 
    `
    <span>${total}</span>
    `

  
 
  //updateSubtotal(allProducts);
  

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
