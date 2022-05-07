var totalitemincarts = localStorage.getItem("totalitemincart") || 0;
document.getElementById("carttop").innerText = totalitemincarts;
var cartArr = JSON.parse(localStorage.getItem("cartadd"));
var container = document.querySelector("#container");
function appendData(data) {
  container.innerHTML = null;
  data.forEach(function (elem) {
    var mainDiv = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.img;

    var name = document.createElement("p");
    name.innerText = elem.name;

    var quantity = document.createElement('p')
    quantity.innerText = elem.quantity

    var price = document.createElement("h5");
    price.innerText = "₹ " + elem.price;

    var strike_price = document.createElement("h5");
    if (elem.strike_price == "") {
      strike_price.innerText = elem.strike_price;
    }
    else {
      strike_price.innerText = "₹" + elem.strike_price;
    }

    var inc = document.createElement("button");
    inc.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    inc.addEventListener("click", function () {
      incfun(elem);
    });

    var dec = document.createElement("button");
    dec.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    dec.addEventListener("click", function () {
      decfun(elem);
    });

    var quant = document.createElement("p");
    quant.innerText = elem.qty;

    var qdiv = document.createElement("div");
    qdiv.append(dec, quant, inc);
    qdiv.setAttribute("class", "quantity-btn");

    var remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.addEventListener("click", function () {
      removeFn(elem);
    });

    var priceStore = document.createElement("div");
    priceStore.append(price, strike_price);
    priceStore.setAttribute("class", "priceStore");

    var priceCartDiv = document.createElement("div");
    priceCartDiv.append(priceStore, qdiv);
    priceCartDiv.setAttribute("class", "priceCartDiv")

    var innerDiv = document.createElement("div");
    innerDiv.append(name, quantity, priceCartDiv, remove);
    innerDiv.setAttribute("class", "innerDiv");


    // var infoDiv = document.querySelector("div");
    // infoDiv.append(name, quantity, innerDiv, qdiv, remove);

    mainDiv.append(img, innerDiv,);

    container.append(mainDiv);
  });
}

appendData(cartArr);

var totalPrice = document.createElement("p");
var totalItem = document.createElement("p");
var total;

function totalPriceFn() {
  total = cartArr.reduce(function (acc, elem) {
    return acc + elem.price * elem.qty;
  }, 0);

  totalPrice.innerText = "Total Price: " + total;
  totalItem.innerText = "Total Items: " + cartArr.length;
  //////shashi
  var priceArr = [total, cartArr.length];
  localStorage.setItem("cartPrice", JSON.stringify(priceArr));
}

totalPriceFn();

var coupon = document.createElement("input");
coupon.setAttribute("placeholder", "Enter promo code");

var aplBtn = document.createElement("button");
aplBtn.innerText = "Apply Promo";
aplBtn.setAttribute("id", "couponBtn");
aplBtn.onclick = function () {
  if (coupon.value == "fraazo30") {
    var discTotal = total * (70 / 100);
    //shashi
    var saveTotal = Math.floor(total * (30 / 100) + 1);
    var shipping = 30;
    var pricing = [discTotal, saveTotal, shipping];
    localStorage.setItem("netPricing", JSON.stringify(pricing));
    totalPrice.innerText = "Total Price: " + discTotal;
  }
};
var totalitemincarts = localStorage.getItem("totalitemincart") || 0;

function removeFn(data) {
  totalitemincarts--;
  cartArr = cartArr.filter(function (elem) {
    return elem.name !== data.name;
  });
  localStorage.setItem("cartadd", JSON.stringify(cartArr));
  localStorage.setItem("totalitemincart", totalitemincarts);
  document.getElementById("carttop").innerText = totalitemincarts;
  appendData(cartArr);
  totalPriceFn();
}

function incfun(elem) {
  elem.qty++;
  localStorage.setItem("cartadd", JSON.stringify(cartArr));
  appendData(cartArr);
  totalPriceFn();
}

function decfun(elem) {
  if (elem.qty == 1) {
    removeFn(elem);
  } else {
    elem.qty--;
    localStorage.setItem("cartadd", JSON.stringify(cartArr));
    appendData(cartArr);
    totalPriceFn();
  }
}

document
  .querySelector("#details")
  .append(totalItem, totalPrice, coupon, aplBtn);

function send(){
  window.location.href = "checkout.html";
}