var cart = JSON.parse(localStorage.getItem("cartadd")) || [];

    function Add(el) {
        var count = 0;

        cart.forEach(function (elem) {
            if (el.name == elem.name) {
                count++;
            }
        })
        if (count == 0) {
            el.qty = 1
            cart.push(el);
            localStorage.setItem("cartadd", JSON.stringify(cart));
            // alert("Product added Successfully");
        }
        else {
            alert("product already in the cart");
        }
    }