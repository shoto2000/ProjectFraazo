function display(data) {
    data.forEach(function (el) {
        var box = document.createElement("div");

        var pimg = document.createElement("img");
        pimg.src = el.img;
        pimg.addEventListener("click",function(){
            console.log(el);
            localStorage.setItem("productSpec",JSON.stringify(el))
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

        document.querySelector(".product_card").append(box);
    })
}