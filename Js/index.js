// Homepage or Index Page Script File

var swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    pagination: {
    el: '.swiper-pagination',
    clickable : true,
    },

});



var left = 0; 
var right = 5;
// --------------------------------------------------------For Best Deals----------------------------------------------------------------------//

var bestdealArr = JSON.parse(localStorage.getItem("bestArr"))

    var best_main = document.getElementById("best-deals");
    var bestArr = document.getElementsByClassName("bestdealcard")
   
    function PlusBestLeft(){ 
        best_main.prepend(bestArr[bestArr.length-1]);
    }

    function PlusBestRight(){
        best_main.append(bestArr[0]);
    }
BestDealData(bestdealArr,left,right);

function BestDealData(arr,left,right) {

  document.querySelector("#best-deals").innerHTML = null;
       
        arr.forEach(function(el){
            var box = document.createElement("div");
            box.setAttribute("class","bestdealcard")

            var pimg = document.createElement("img");
            pimg.src = el.img;
            pimg.addEventListener("click",function(){
                localStorage.setItem("productSpec",JSON.stringify(el));
                window.location.href = "product_page.html"
            })

            var pname = document.createElement("p");
            pname.innerText = el.name;

            var pquantity = document.createElement("p");
            pquantity.innerText = el.quantity;

            var pprice = document.createElement("h5");
            pprice.innerText = "₹" + el.price;
            pprice.style.fontSize = "16px";

            var pstrike_price = document.createElement("h5");
            if (el.strike_price == "") {
                pstrike_price.innerText = el.strike_price;
            }
            else {
                pstrike_price.innerText = "₹" + el.strike_price;
            }

            var cart = document.createElement("button");
            cart.innerText = "ADD";
            cart.addEventListener("click", function () {
                Add(el);
            })

            var boxin = document.createElement("div");

            var pricestore = document.createElement("div");

            pricestore.append(pprice, pstrike_price, cart)

            boxin.append(pname, pquantity, pricestore)

            box.append(pimg, boxin);

            document.querySelector("#best-deals").append(box);
            
        });
      
    }
// --------------------------------------------------------For Mangoes----------------------------------------------------------------------//
var mangoesData = JSON.parse(localStorage.getItem("mangoesArr"))

var mango_main = document.getElementById("mangoes");
   
var mangoArr = document.getElementsByClassName("mangocard")
   

function PlusLeft(){
mango_main.prepend(mangoArr[mangoArr.length-1]);  
}

function PlusRight(){ 
mango_main.append(mangoArr[0]);
}


DisplayData(mangoesData,left,right);

function DisplayData(arr,left,right){   
  
    document.querySelector("#mangoes").innerHTML = null;
        arr.forEach(function(el){

        var box = document.createElement("div");
        box.setAttribute("class","mangocard")

        var pimg = document.createElement("img");
        pimg.src = el.img;
        pimg.addEventListener("click",function(){
                window.location.href = "product_page.html"
                localStorage.setItem("productSpec",JSON.stringify(el));
            });

        var pname = document.createElement("p");
        pname.innerText = el.name;

        var pquantity = document.createElement("p");
        pquantity.innerText = el.quantity;

        var pprice = document.createElement("h5");
        pprice.innerText = "₹" + el.price;
        pprice.style.fontSize = "16px";

        var pstrike_price = document.createElement("h5");
        if (el.strike_price == "") {
            pstrike_price.innerText = el.strike_price;
        }
        else {
            pstrike_price.innerText = "₹" + el.strike_price;
        }

        var cart = document.createElement("button");
        cart.innerText = "ADD";
        cart.addEventListener("click", function () {
            Add(el);
        })

        var boxin = document.createElement("div");

        var pricestore = document.createElement("div");

        pricestore.append(pprice, pstrike_price, cart)

        boxin.append(pname, pquantity, pricestore)

        box.append(pimg, boxin);

        document.querySelector("#mangoes").append(box);
    })

 }

// ------------------------------------------------------------For Fruites-----------------------------------------------------------------//

fruiteData = JSON.parse(localStorage.getItem("fruiteArr"))

var fruite_main = document.getElementById("fruites");
   
var fruiteArr = document.getElementsByClassName("fruitecard")
      

function PlusFruiteLeft(){
   fruite_main.prepend(fruiteArr[fruiteArr.length-1]);  
 }

function PlusFruiteRight(){ 
   fruite_main.append(fruiteArr[0]);
 }

FruitesData(fruiteData,left,right)

function FruitesData(arr,left,right){   
  
  document.querySelector("#fruites").innerHTML = null;
      arr.forEach(function(el){

      var box = document.createElement("div");
      box.setAttribute("class","fruitecard")

      var pimg = document.createElement("img");
      pimg.src = el.img;
      pimg.addEventListener("click",function(){
              window.location.href = "product_page.html"
              localStorage.setItem("productSpec",JSON.stringify(el));
          });

      var pname = document.createElement("p");
      pname.innerText = el.name;

      var pquantity = document.createElement("p");
      pquantity.innerText = el.quantity;

      var pprice = document.createElement("h5");
      pprice.innerText = "₹" + el.price;
      pprice.style.fontSize = "16px";

      var pstrike_price = document.createElement("h5");
      if (el.strike_price == "") {
          pstrike_price.innerText = el.strike_price;
      }
      else {
          pstrike_price.innerText = "₹" + el.strike_price;
      }

      var cart = document.createElement("button");
      cart.innerText = "ADD";
      cart.addEventListener("click", function () {
          Add(el);
      })

      var boxin = document.createElement("div");

      var pricestore = document.createElement("div");

      pricestore.append(pprice, pstrike_price, cart)

      boxin.append(pname, pquantity, pricestore)

      box.append(pimg, boxin);

      document.querySelector("#fruites").append(box);
  })

}
// -----------------------------------------------------------For Vegetables----------------------------------------------------------------//
var dailyData = JSON.parse(localStorage.getItem("dailyArr"));

var veg_main = document.getElementById("vegetables");
   
var vegArr = document.getElementsByClassName("vegcard")
      

function PlusVegLeft(){
   veg_main.prepend(vegArr[vegArr.length-1]);  
 }

function PlusVegRight(){ 
   veg_main.append(vegArr[0]);
 }


DailyVegData(dailyData,left,right)

function DailyVegData(arr,left,right){   
  
  document.querySelector("#vegetables").innerHTML = null;
      arr.forEach(function(el){

      var box = document.createElement("div");
      box.setAttribute("class","fruitecard")

      var pimg = document.createElement("img");
      pimg.src = el.img;
      pimg.addEventListener("click",function(){
              window.location.href = "product_page.html"
              localStorage.setItem("productSpec",JSON.stringify(el));
          });

      var pname = document.createElement("p");
      pname.innerText = el.name;

      var pquantity = document.createElement("p");
      pquantity.innerText = el.quantity;

      var pprice = document.createElement("h5");
      pprice.innerText = "₹" + el.price;
      pprice.style.fontSize = "16px";

      var pstrike_price = document.createElement("h5");
      if (el.strike_price == "") {
          pstrike_price.innerText = el.strike_price;
      }
      else {
          pstrike_price.innerText = "₹" + el.strike_price;
      }

      var cart = document.createElement("button");
      cart.innerText = "ADD";
      cart.addEventListener("click", function () {
          Add(el);
      })

      var boxin = document.createElement("div");

      var pricestore = document.createElement("div");

      pricestore.append(pprice, pstrike_price, cart)

      boxin.append(pname, pquantity, pricestore)

      box.append(pimg, boxin);

      document.querySelector("#vegetables").append(box);
  })

}

// -----------------------------------------------------------For HerbsStaples-------------------------------------------------------------//

var herbsData = JSON.parse(localStorage.getItem("herbsArr"))

var herbs_main = document.getElementById("herbs");
   
var herbsArr = document.getElementsByClassName("herbscard")
      

function PlusHerbsLeft(){
   herbs_main.prepend(herbsArr[herbsArr.length-1]);  
 }

function PlusHerbsRight(){ 
   herbs_main.append(herbsArr[0]);
 }

HerbsData(herbsData,left,right)

function HerbsData(arr,left,right){   
  
document.querySelector("#herbs").innerHTML = null;
      arr.forEach(function(el){

      var box = document.createElement("div");
      box.setAttribute("class","herbscard")

      var pimg = document.createElement("img");
      pimg.src = el.img;
      pimg.addEventListener("click",function(){
              window.location.href = "product_page.html"
              localStorage.setItem("productSpec",JSON.stringify(el));
          });

      var pname = document.createElement("p");
      pname.innerText = el.name;

      var pquantity = document.createElement("p");
      pquantity.innerText = el.quantity;

      var pprice = document.createElement("h5");
      pprice.innerText = "₹" + el.price;
      pprice.style.fontSize = "16px";

      var pstrike_price = document.createElement("h5");
      if (el.strike_price == "") {
          pstrike_price.innerText = el.strike_price;
      }
      else {
          pstrike_price.innerText = "₹" + el.strike_price;
      }

      var cart = document.createElement("button");
      cart.innerText = "ADD";
      cart.addEventListener("click", function () {
          Add(el);
      })

      var boxin = document.createElement("div");

      var pricestore = document.createElement("div");

      pricestore.append(pprice, pstrike_price, cart)

      boxin.append(pname, pquantity, pricestore)

      box.append(pimg, boxin);

      document.querySelector("#herbs").append(box);
  })

}

// ------------------------------------------------------------For DryFruites-----------------------------------------------------------------//

var dryData = JSON.parse(localStorage.getItem("dryfruitsArr"));

var dry_main = document.getElementById("dryfruites");
   
var dryArr = document.getElementsByClassName("drycard")
      

function PlusDryLeft(){
   dry_main.prepend(dryArr[dryArr.length-1]);  
 }

function PlusDryRight(){ 
   dry_main.append(dryArr[0]);
 }

DryfruitesData(dryData,left,right)

function DryfruitesData(arr,left,right){   
  
document.querySelector("#dryfruites").innerHTML = null;
      arr.forEach(function(el){

      var box = document.createElement("div");
      box.setAttribute("class","drycard")

      var pimg = document.createElement("img");
      pimg.src = el.img;
      pimg.addEventListener("click",function(){
              window.location.href = "product_page.html"
              localStorage.setItem("productSpec",JSON.stringify(el));
          });

      var pname = document.createElement("p");
      pname.innerText = el.name;

      var pquantity = document.createElement("p");
      pquantity.innerText = el.quantity;

      var pprice = document.createElement("h5");
      pprice.innerText = "₹" + el.price;
      pprice.style.fontSize = "16px";

      var pstrike_price = document.createElement("h5");
      if (el.strike_price == "") {
          pstrike_price.innerText = el.strike_price;
      }
      else {
          pstrike_price.innerText = "₹" + el.strike_price;
      }

      var cart = document.createElement("button");
      cart.innerText = "ADD";
      cart.addEventListener("click", function () {
          Add(el);
      })

      var boxin = document.createElement("div");

      var pricestore = document.createElement("div");

      pricestore.append(pprice, pstrike_price, cart)

      boxin.append(pname, pquantity, pricestore)

      box.append(pimg, boxin);

      document.querySelector("#dryfruites").append(box);
  })
}


// ------------------------------------------------------------For KitchenStaples-------------------------------------------------------------//

var kitchenData = JSON.parse(localStorage.getItem("kitchenDalArr"))

var kitchen_main = document.getElementById("kitchen");
   
var kitchenArr = document.getElementsByClassName("kitchencard")
      

function PluskitchenLeft(){
   kitchen_main.prepend(kitchenArr[kitchenArr.length-1]);  
 }

function PluskitchenRight(){ 
   kitchen_main.append(kitchenArr[0]);
 }

KitchenSteplesData(kitchenData,left,right)

function KitchenSteplesData(arr,left,right){   
  
document.querySelector("#kitchen").innerHTML = null;
      arr.forEach(function(el){

      var box = document.createElement("div");
      box.setAttribute("class","kitchencard")

      var pimg = document.createElement("img");
      pimg.src = el.img;
      pimg.addEventListener("click",function(){
              window.location.href = "product_page.html"
              localStorage.setItem("productSpec",JSON.stringify(el));
          });

      var pname = document.createElement("p");
      pname.innerText = el.name;

      var pquantity = document.createElement("p");
      pquantity.innerText = el.quantity;

      var pprice = document.createElement("h5");
      pprice.innerText = "₹" + el.price;
      pprice.style.fontSize = "16px";

      var pstrike_price = document.createElement("h5");
      if (el.strike_price == "") {
          pstrike_price.innerText = el.strike_price;
      }
      else {
          pstrike_price.innerText = "₹" + el.strike_price;
      }

      var cart = document.createElement("button");
      cart.innerText = "ADD";
      cart.addEventListener("click", function () {
          Add(el);
      })

      var boxin = document.createElement("div");

      var pricestore = document.createElement("div");

      pricestore.append(pprice, pstrike_price, cart)

      boxin.append(pname, pquantity, pricestore)

      box.append(pimg, boxin);

      document.querySelector("#kitchen").append(box);
  })

}