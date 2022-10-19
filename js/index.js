// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input').value;
  console.log(price.innerHTML);
  console.log(quantity);
  let subtotalPrice = price.innerHTML * quantity;
  console.log(subtotalPrice);
  product.querySelector('.subtotal span').innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const severalProduct = document.getElementsByClassName('product');
  let totalPrice = 0;
  for (i = 0; i < severalProduct.length; i++) {
    updateSubtotal(severalProduct[i]);
    totalPrice += updateSubtotal(severalProduct[i]);
  }
  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerHTML = totalPrice;
  console.log(total.innerHTML);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn btn-remove');
  removeButtons.addEventListener('click', removeProduct);

  //... your code goes here
});
