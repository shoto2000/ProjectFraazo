// Best-Deals

var bestdealArr = [
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VGAV12.png",
        name: "Beans Cluster (Gavar)",
        quantity: "250 g",
        price: 12,
        strike_price: 16
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/006/605/original/data?1649242645",
        name: "Tomato (1 kg)",
        quantity: "1 kg",
        price: 42,
        strike_price: 45
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VARB12.png",
        name: "Arbi(Colocasia)",
        quantity: "500 g",
        price: 35,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/012/original/data?1595253652",
        name: "Baby Potato",
        price: 21,
        quantity: "500 g",
        strike_price: "",
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/381/original/data?1624199604",
        name: "Banana Flower",
        price: 24,
        quantity: " 1 pc",
        strike_price: "",
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/389/original/data?1624874955",
        name: "Fresh Salad Combo (250G Carrot + 500 G Cucumber)",
        price: 31,
        quantity: "1 unit",
        strike_price: 36,
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/390/original/data?1624895924",
        name: "Mixed Capsicum Combo (1 Pc Capsicum Red + 1 Pc Capsicum Yellow)",
        price: 104,
        quantity: "1 unit",
        strike_price: 107,
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/250/original/data?1642167498",
        name: "Lemon(100g) / Nimboo / Nibu",
        quantity: "100g",
        price: 19,
        strike_price: 26
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/163/original/data?1640321543",
        name: "Special Offer Coriander",
        quantity: "1 unit",
        price: 4,
        strike_price: 13
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VAWL11.png",
        name: "Amla",
        quantity: "250 g",
        price: 42,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/417/original/data?1628778604",
        name: "Aloevera",
        quantity: "1 pc ",
        price: 13,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/263/original/data?1642176073",
        name: "Cashew & Kismis Combo Pack (Cashew 100gm + Kismis 200gm)",
        quantity: "1 unit-300 g",
        price: 149,
        strike_price: 246
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/579/original/data?1635086198",
        name: "Cashew 500gms (Pack of 5*100gms)",
        quantity: "500 g",
        price: 450,
        strike_price: 830
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/598/original/data?1635146504",
        name: "Dry Dates - 400gms (Pack of 2*200gms)",
        quantity: "400 g",
        price: 135,
        strike_price: 184
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/581/original/data?1635086887",
        name: "Cashew Tukda 200gms (Pack of 2*100gms)",
        quantity: "200 g",
        price: 167,
        strike_price: 236
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/582/original/data?1635086999",
        name: "Cashew Tukda 500gms (Pack of 5*100gms)",
        quantity: "500 g",
        price: 415,
        strike_price: 590
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/435/original/data?1643108708",
        name: "Maya Besan 500G",
        quantity: "500 g",
        price: 54,
        strike_price: 59
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/443/original/data?1643108726",
        name: "Maya Maida 500G",
        quantity: "500 g",
        price: 27,
        strike_price: 31
    }];

    localStorage.setItem("bestArr",JSON.stringify(bestdealArr))

// Home-Page Fruites Data

var fruiteData = [
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FCHI13.png",
        name: "Chikoo",
        quantity: "500 g",
        price: 38,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/157/original/data?1595448197",
        name: "Pineapple",
        quantity: "800 g-1 kg",
        price: 66,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FMUS1.png",
        name: "Musk Melon/ Kharabooja",
        quantity: "1 pc",
        price: 39,
        strike_price: 62
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/117/original/data?1616765390",
        name: "Watermelon",
        quantity: "1 pc",
        price: 29,
        strike_price: 179
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/338/original/data?1620150734",
        name: "Orange Imported",
        quantity: "2 pc",
        price: 38,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/006/original/data?1642616267",
        name: "Apple Royal Gala",
        quantity: "4 pc",
        price: 99,
        strike_price: 149
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/244/original/data?1613050070",
        name: "Wood Apple",
        quantity: "1 pc",
        price: 18,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/432/original/data?1629889583",
        name: "Grape Fruit",
        quantity: "1 pc",
        price: 105,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FAVO21.png",
        name: "Avocado Indian",
        quantity: "1 pc",
        price: 246,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBLU1.png",
        name: "Blueberry",
        quantity: "1 unit",
        price: 319,
        strike_price: ""
    },

]

    localStorage.setItem("fruiteArr",JSON.stringify(fruiteData))

// MANGOES

 var mangoesData = [
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/329/original/data?1616795305",
        name: "Alphonso Mango Devgad",
        quantity: "6 pcs",
        price: 479,
        strike_price: 600
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/135/original/data?1612689931",
        name: "Mango Badami",
        quantity: "1 kg",
        price: 129,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/004/597/original/data?1647577454",
        name: "Mango Totapuri Raw",
        quantity: "1 kg",
        price: 110,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/250/original/data?1621065378",
        name: "Mango Lalbhag Sindhura",
        quantity: "1 kg",
        price: 110,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VMAN12.png",
        name: "Mango Raw",
        quantity: "250 g",
        price: 14,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FKES1.png",
        name: "Mango Kesar",
        quantity: "1 kg",
        price: 209,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/339/original/data?1620237313",
        name: "Alphonso Mango Devgad (2 x 6 pcs)",
        quantity: "1 Dozen",
        price: 949,
        strike_price: 1200
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/007/294/original/data?1650906368",
        name: "Mango Mallika",
        quantity: "1 kg",
        price: 167,
        strike_price: ""
    }

]

localStorage.setItem("mangoesArr", JSON.stringify(mangoesData));

// -----------------------------------------------------------------------------------------------------------------------------

// FRUITS
// 1. APPLE

var applesData = [
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/006/original/data?1642616267",
        name: "Apple Royal Gala",
        quantity: "4 pc",
        price: 99,
        strike_price: 149
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/244/original/data?1613050070",
        name: "Wood Apple",
        quantity: "1 pc",
        price: 18,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/096/original/data?1625415915",
        name: "Pear Green / Packham",
        quantity: "500 g",
        price: 122,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/241/original/data?1610967581",
        name: "Apple Red Delicious",
        quantity: "4 pc",
        price: 129,
        strike_price: 179
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FAPP23.png",
        name: "Apple Green / Granny Smith",
        quantity: "4 pc",
        price: 243,
        strike_price: ""
    }
]

localStorage.setItem("applesArr", JSON.stringify(applesData));

// 2. ORANGE

var orangesData = [
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FMOS13.png",
        name: "Mosambi(Sweet Melon)",
        quantity: "1 kg",
        price: 122,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FCOC1.png",
        name: "Coconut",
        quantity: "1 pc",
        price: 22,
        strike_price: 31
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FMUS1.png",
        name: "Musk Melon/ Kharabooja",
        quantity: "1 pc",
        price: 39,
        strike_price: 62
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/117/original/data?1616765390",
        name: "Watermelon",
        quantity: "1 pc",
        price: 29,
        strike_price: 179
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/338/original/data?1620150734",
        name: "Orange Imported",
        quantity: "2 pc",
        price: 38,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/257/original/data?1612448669",
        name: "Coconut Tender / Nariyal Pani",
        quantity: "1 pc",
        price: 49,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/004/598/original/data?1647718256",
        name: "Special Offer Watermelon",
        quantity: "1 pc",
        price: 9,
        strike_price: "44"
    },
]

localStorage.setItem("orangesArr", JSON.stringify(orangesData));

// 3. PAPAYA

var papayaData = [
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VPAP12.png",
        name: "Papaya Raw",
        quantity: "1 pc",
        price: 28,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/157/original/data?1595448197",
        name: "Pineapple",
        quantity: "800 g-1 kg",
        price: 66,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/261/original/data?1612541635",
        name: "Pomegranate(Anar)",
        quantity: "3 pc",
        price: 159,
        strike_price: 169
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/092/original/data?1620114635",
        name: "Papaya",
        quantity: "1 pc",
        price: 54,
        strike_price: ""
    }
]

localStorage.setItem("papayaArr", JSON.stringify(papayaData));

// 4. GRAPES

var grapesData = [
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBAN14.png",
        name: "Banana Robusta",
        quantity: "1 kg",
        price: 41,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBAN24.png",
        name: "Banana Elaichi/Yellaki",
        quantity: "500 g",
        price: 52,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FCHI13.png",
        name: "Chikoo",
        quantity: "500 g",
        price: 38,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/369/original/data?1622631944",
        name: "Guava White Indian",
        quantity: "2 pc",
        price: 79,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/260/original/data?1612450264",
        name: "Banana Raw",
        quantity: "500 g",
        price: 22,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/248/original/data?1612379941",
        name: "Banana Red",
        quantity: "500 g",
        price: 78,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FGRA42.png",
        name: "Grapes Green",
        quantity: "500 g",
        price: 66,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/247/original/data?1612371028",
        name: "Banana Nendran",
        quantity: "500 g",
        price: 79,
        strike_price: ""
    }
]

localStorage.setItem("grapesArr", JSON.stringify(grapesData));

// 5. EXOTIC VEGETABLE

var exoticFruitData = [
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/432/original/data?1629889583",
        name: "Grape Fruit",
        quantity: "1 pc",
        price: 105,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FAVO21.png",
        name: "Avocado Indian",
        quantity: "1 pc",
        price: 246,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBLU1.png",
        name: "Blueberry",
        quantity: "1 unit",
        price: 319,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FDRA1.png",
        name: "Dragon Fruit",
        quantity: "1 pc",
        price: 75,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FKIW2.png",
        name: "Kiwi Green",
        quantity: "1 unit",
        price: 100,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/235/original/data?1610033950",
        name: "Avocado Imported",
        quantity: "1 pc",
        price: 290,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FANJ2.png",
        name: "Anjeer(Figs)",
        quantity: "1 unit",
        price: 78,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/243/original/data?1611939790",
        name: "Mulberry",
        quantity: "1 unit",
        price: 108,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/388/original/data?1624798076",
        name: "Plum Imported",
        quantity: " 6 pc",
        price: 238,
        strike_price: ""
    }
]

localStorage.setItem("exoticFruitArr", JSON.stringify(exoticFruitData));

// 6. FRUIT COMBO

var fruitCombosData = [
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/442/original/data?1635063552",
        name: "Smoothie Combo (Banana Robusta - 1Kg + Blueberry - 1 Punnet)",
        quantity: "1 unit",
        price: 357,
        strike_price: 360
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/240/original/data?1642616123",
        name: "Tasty Combo (2 Pcs Apple Royal Gala + 1 Kg Banana Robusta)",
        quantity: "1 unit",
        price: 112,
        strike_price: 115
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/204/original/data?1621240725",
        name: "Cooler Fruit Combo (1 Pc Each Watermelon + Papaya)",
        quantity: "1 unit",
        price: 84,
        strike_price: 87
    }
]

localStorage.setItem("fruitCombosArr", JSON.stringify(fruitCombosData));

// -----------------------------------------------------------------------------------------------------------------------------

// VEGETABLES
// 1. DAILY

var dailyData = [
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VBRI12.png",
        name: "Brinjal Bharta",
        quantity: "500 g",
        price: 24,
        strike_price: 360
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/101/original/data?1612451098",
        name: "Pumpkin Green",
        quantity: "500 g",
        price: 16,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VCAP12.png",
        name: "Capsicum (Shimla), Green Shimla Mirchi",
        quantity: "250 g",
        price: 13,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VCAP12.png",
        name: "Capsicum (Shimla), Green Shimla Mirchi",
        quantity: "250 g",
        price: 13,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/315/original/data?1614700255",
        name: "Cucumber Green Indian / Kheera / Kakdi",
        quantity: "500 g",
        price: 22,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VCAB12.png",
        name: "Cabbage",
        quantity: "1 pc",
        price: 9,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VCAU12.png",
        name: "Cauliflower",
        quantity: "1 pc",
        price: 38,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VBIT12.png",
        name: "Bitter Gourd (Karela)",
        quantity: "500 g",
        price: 23,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VBOT12.png",
        name: "Bottle Gourd (Dudhi/Lauki)",
        quantity: "1 pc",
        price: 9,
        strike_price: 12
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/028/original/data?1616765740",
        name: "Brinjal Kateri, Baingan",
        quantity: "250 g",
        price: 10,
        strike_price: 15
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VDRU12.png",
        name: "Drumstick",
        quantity: "100 g",
        price: 4,
        strike_price: 6
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/106/original/data?1603884029",
        name: "Snake Gourd (Bada Parwal)",
        quantity: "250 g",
        price: 16,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/316/original/data?1614700848",
        name: "Cucumber White",
        quantity: "500 g",
        price: 20,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VBRI22.png",
        name: "Brinjal Black/Nagpur",
        quantity: "500 g",
        price: 17,
        strike_price: 24
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/006/625/original/data?1649244316",
        name: "Ridge Gourd (Turai) 500 g",
        quantity: "500 g",
        price: 26,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VGAV12.png",
        name: "Beans Cluster (Gavar)",
        quantity: "250 g",
        price: 12,
        strike_price: 16
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VTON12.png",
        name: "Tondli",
        quantity: "500 g",
        price: 33,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VFRE12.png",
        name: "Beans French",
        quantity: "500 g",
        price: 108,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VTIN12.png",
        name: "Tinda",
        quantity: "250 g",
        price: 27,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/006/624/original/data?1649243792",
        name: "Lady's Finger (Bhindi / Okra / Bhendi)",
        quantity: "500 g",
        price: 17,
        strike_price: 20
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VPUM12.png",
        name: "Pumpkin Red",
        quantity: "500 g",
        price: 23,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/164/original/data?1629975839",
        name: "Ash Gourd (White Pumpkin)",
        quantity: "500 g",
        price: 29,
        strike_price: ""
    }
]

localStorage.setItem("dailyArr", JSON.stringify(dailyData));

// 2. ONION

var onionsData = [
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/006/605/original/data?1649242645",
        name: "Tomato (1 kg)",
        quantity: "1 kg",
        price: 42,
        strike_price: 45
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/BONI11.png",
        name: "Onion",
        quantity: "1 kg",
        price: 16,
        strike_price: 20
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/BPOT11.png",
        name: "Potato/Batata",
        quantity: "1 kg",
        price: 27,
        strike_price: 29
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/236/original/data?1610137718",
        name: "Tomato-Cherry",
        quantity: "200 g",
        price: 21,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/234/original/data?1610025881",
        name: "Onion - Sambhar",
        quantity: "200 g",
        price: 20,
        strike_price: ""
    }
]

localStorage.setItem("onionsArr", JSON.stringify(onionsData));

// 3. ROOT

var rootData = [
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VBEE12.png",
        name: "Beetroot",
        quantity: "500 g",
        price: 20,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VARB12.png",
        name: "Arbi(Colocasia)",
        quantity: "500 g",
        price: 35,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VSUR12.png",
        name: "Yam (Suram/Elephant Foot)",
        quantity: "500 g",
        price: 35,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FCAR1.png",
        name: "Carrot Orange (Local)",
        quantity: "500 g",
        price: 22,
        strike_price: 28
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VMUL12.png",
        name: "Radish",
        quantity: "500 g",
        price: 25,
        strike_price: 28
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/246/original/data?1631690575",
        name: "Yam Purple(Kandh)",
        quantity: "250 g",
        price: 25,
        strike_price: 28
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VSWE12.png",
        name: "Sweet Potato",
        quantity: "500 g",
        price: 24,
        strike_price: ""
    }
]

localStorage.setItem("rootArr", JSON.stringify(rootData));

// 4. EXOTIC VEGETABLE

var exoticVegetableData = [
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/599/original/data?1635154399",
        name: "Pumpkin Disco",
        price: 22,
        quantity: "250 g",
        strike_price: "",
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/EMUS2.png",
        name: "Mushroom Button",
        price: 37,
        quantity: "1 unit",
        strike_price: "",
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/EBAS11.png",
        name: "Basil Italian",
        price: 6,
        quantity: "50 g",
        strike_price: "",
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/387/original/data?1624708328",
        name: "Capsicum Yellow / Bell Pepper",
        price: 107,
        quantity: "2pcs(250-350g)",
        strike_price: "",
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/ELET22.png",
        name: "Lettuce Iceberg",
        price: 133,
        quantity: "500 g",
        strike_price: "",
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VCAB22.png",
        name: "Cabbage Red",
        price: 45,
        quantity: "1 pc",
        strike_price: "",
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/012/original/data?1595253652",
        name: "Baby Potato",
        price: 21,
        quantity: "500 g",
        strike_price: "",
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/381/original/data?1624199604",
        name: "Banana Flower",
        price: 24,
        quantity: " 1 pc",
        strike_price: "",
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/ESWE13.png",
        name: "Sweet Corn Bunch (Bhutta)",
        price: 16,
        quantity: "1 pc",
        strike_price: "",
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/004/357/original/data?1646046149",
        name: "Celery",
        price: 19,
        quantity: "250 g",
        strike_price: "",
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/386/original/data?1624707133",
        name: "Capsicum Red",
        price: 106,
        quantity: "2 pc",
        strike_price: "",
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/EBRO12.png",
        name: "Broccoli",
        price: 156,
        quantity: "(450g-550g)",
        strike_price: "",
    }
];

localStorage.setItem("exoticVegetableArr", JSON.stringify(exoticVegetableData));

// 5. VEGETABLE COMBO

var vegetableCombosData = [
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/389/original/data?1624874955",
        name: "Fresh Salad Combo (250G Carrot + 500 G Cucumber)",
        price: 31,
        quantity: "1 unit",
        strike_price: 36,
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/390/original/data?1624895924",
        name: "Mixed Capsicum Combo (1 Pc Capsicum Red + 1 Pc Capsicum Yellow)",
        price: 104,
        quantity: "1 unit",
        strike_price: 107,
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/202/original/data?1602706401",
        name: "UPVAS Combo (500 gm Sweet Potato + 500 gm Arbi + 1 Kg Potato)",
        price: 115,
        quantity: "1 unit",
        strike_price: 118,
    }
];

localStorage.setItem("vegetableCombosArr", JSON.stringify(vegetableCombosData));

// 6. CUTS

var sproutsData = [
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/320/original/data?1616174665",
        name: "Pulao Combo",
        price: 41,
        quantity: "200 g",
        strike_price: 44,
    }
];

localStorage.setItem("sproutsArr", JSON.stringify(sproutsData));

// -----------------------------------------------------------------------------------------------------------------------------


// HERBS
var herbsData = [
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/250/original/data?1642167498",
        name: "Lemon(100g) / Nimboo / Nibu",
        quantity: "100g",
        price: 19,
        strike_price: 26
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/163/original/data?1640321543",
        name: "Special Offer Coriander",
        quantity: "1 unit",
        price: 4,
        strike_price: 13
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/419/original/data?1635147438",
        name: "Colocasia Leaves",
        quantity: "1 pc",
        price: 2,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/276/original/data?1642317197",
        name: "Masala Combo",
        quantity: "1 unit",
        price: 33,
        strike_price: 43
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VGIN12.png",
        name: "Ginger / Adrak",
        quantity: "100 g",
        price: 6,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/LCUR11.png",
        name: "Curry Leaves",
        quantity: "50 g",
        price: 10,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VCHI22.png",
        name: "Chillies Green",
        quantity: "100 g",
        price: 10,
        strike_price: 12
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VGAR32.png",
        name: "Garlic Peeled",
        quantity: "100 g",
        price: 33,
        strike_price: 12
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VGAR12.png",
        name: "Garlic Bunch / Lahsun / Vellulipaya",
        quantity: "100 g",
        price: 7,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/LCOR21.png",
        name: "Coriander Leaves / Dhania / Kothimbir",
        quantity: "100 g",
        price: 13,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/LMET1.png",
        name: "Methi (Fenugreek Leaves)",
        quantity: "100 g",
        price: 17,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/LSPI11.png",
        name: "Palak Spinach",
        quantity: "250 g",
        price: 30,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VAWL11.png",
        name: "Amla",
        quantity: "250 g",
        price: 42,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/417/original/data?1628778604",
        name: "Aloevera",
        quantity: "1 pc ",
        price: 13,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/380/original/data?1635063619",
        name: "Banana Stem",
        quantity: "1 pc ",
        price: 17,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/LMIN11.png",
        name: "Mint Leaves / Pudina",
        quantity: "100 g",
        price: 7,
        strike_price: ""
    },
    {
        img: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/LSPR11.png",
        name: "Spring Onion",
        quantity: "250 g",
        price: 14,
        strike_price: 20
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/602/original/data?1635155510",
        name: "Betel Leaf - 12 Pcs",
        quantity: "12 pc",
        price: 30,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/375/original/data?1623816989",
        name: "Turmeric",
        quantity: "250g",
        price: 15,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/162/original/data?1598301503",
        name: "Amaranthus Red",
        quantity: "250g",
        price: 23,
        strike_price: ""
    }
]

localStorage.setItem("herbsArr", JSON.stringify(herbsData));

// -----------------------------------------------------------------------------------------------------------------------------

// DRY FRUITS

var dryfruitsData = [
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/263/original/data?1642176073",
        name: "Cashew & Kismis Combo Pack (Cashew 100gm + Kismis 200gm)",
        quantity: "1 unit-300 g",
        price: 149,
        strike_price: 246
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/579/original/data?1635086198",
        name: "Cashew 500gms (Pack of 5*100gms)",
        quantity: "500 g",
        price: 450,
        strike_price: 830
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/586/original/data?1635141850",
        name: "Pista Salted - 100gms",
        quantity: "100g",
        price: 115,
        strike_price: 167
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/596/original/data?1635146122",
        name: "Dry Dates - 200gms",
        quantity: "200",
        price: 70,
        strike_price: 92
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/593/original/data?1635144647",
        name: "Kismis - 200 gms",
        quantity: "200 g",
        price: 59,
        strike_price: 80
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/590/original/data?1635143515",
        name: "Almonds - 100 gms",
        quantity: "100 g",
        price: 115,
        strike_price: 136
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/583/original/data?1635137039",
        name: "Walnut - 100gms",
        quantity: "100 g",
        price: 175,
        strike_price: 239
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/577/original/data?1635085485",
        name: "Cashew - 100gm",
        quantity: "100 g",
        price: 104,
        strike_price: 166
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/591/original/data?1635143661",
        name: "Almond 200gms (Pack of 2*100gms)",
        quantity: "200 g",
        price: 206,
        strike_price: 272
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/585/original/data?1635137356",
        name: "Walnut 500gms (Pack of 5*100gms)",
        quantity: "500 g",
        price: 825,
        strike_price: 1195
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/595/original/data?1635145018",
        name: "Kismis - 1 Kg (Pack of 5*200 gms)",
        quantity: "1 kg",
        price: 289,
        strike_price: 400
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/598/original/data?1635146504",
        name: "Dry Dates - 1 Kg (Pack of 5*200 gms)",
        quantity: "1 kg",
        price: 330,
        strike_price: 460
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/598/original/data?1635146504",
        name: "Dry Dates - 400gms (Pack of 2*200gms)",
        quantity: "400 g",
        price: 135,
        strike_price: 184
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/587/original/data?1635142002",
        name: "Pista Salted 200gms (Pack of 2*100gms)",
        quantity: "200 g",
        price: 229,
        strike_price: 334
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/594/original/data?1635144809",
        name: "Kismis - 400 gms (Pack of 2*200 gms)",
        quantity: "400 g",
        price: 116,
        strike_price: 160
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/578/original/data?1635085993",
        name: "Cashew 200gms (Pack of 2*100gms)",
        quantity: "200 g",
        price: 182,
        strike_price: 332
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/584/original/data?1635137208",
        name: "Walnut 200gms (Pack of 2*100gms)",
        quantity: "200 g",
        price: 335,
        strike_price: 478
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/580/original/data?1635086672",
        name: "Cashew Tukda - 100gm",
        quantity: "100 g",
        price: 84,
        strike_price: 118
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/588/original/data?1635142184",
        name: "Pista Kernel - 100gms",
        quantity: "100 g",
        price: 175,
        strike_price: 242
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/592/original/data?1635143799",
        name: "Almond 500gms (Pack of 5*100gms)",
        quantity: "500 g",
        price: 489,
        strike_price: 630
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/581/original/data?1635086887",
        name: "Cashew Tukda 200gms (Pack of 2*100gms)",
        quantity: "200 g",
        price: 167,
        strike_price: 236
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/582/original/data?1635086999",
        name: "Cashew Tukda 500gms (Pack of 5*100gms)",
        quantity: "500 g",
        price: 415,
        strike_price: 590
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/589/original/data?1635142329",
        name: "Pista Kernel 200gms (Pack of 2*100gms)",
        quantity: "200 g",
        price: 345,
        strike_price: 484
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/159/original/data?1595448691",
        name: "Dates Kimia",
        quantity: "500 g",
        price: 226,
        strike_price: ""
    }
]

localStorage.setItem("dryfruitsArr", JSON.stringify(dryfruitsData));

// -----------------------------------------------------------------------------------------------------------------------------

// KITCHEN
// 1. POWDER

var kitchenPowderData = [
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/007/120/original/data?1649657414",
        name: "Maya Whole Spice Black Cardamom, 50 g",
        quantity: "50 g",
        price: 79,
        strike_price: 97
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/005/382/original/data?1648552884",
        name: "Maya Whole Spice Big Mustard Seeds, 100 g",
        quantity: "100 g",
        price: 17,
        strike_price: 19
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/468/original/data?1643128069",
        name: "Maya Whole Spice Coriander 100G",
        quantity: "100 g",
        price: 30,
        strike_price: 32
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/477/original/data?1643128090",
        name: "Maya Whole Spice Shahi Jeera 50G",
        quantity: "50 g",
        price: 42,
        strike_price: 43
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/007/119/original/data?1649657173",
        name: "Maya Whole Spice Garam Masala, 100 g",
        quantity: "100 g",
        price: 71,
        strike_price: 89
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/005/081/original/data?1648280317",
        name: "Maya Whole Spice Guntur Chilli 100g",
        quantity: "100 g",
        price: 40,
        strike_price: 45
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/475/original/data?1643128085",
        name: "Maya Whole Spice Mustard Small 100G",
        quantity: "100 g",
        price: 17,
        strike_price: 20
    }
]

localStorage.setItem("kitchenPowderArr", JSON.stringify(kitchenPowderData));

// 2. DAL

var kitchenDalData = [
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/005/504/original/data?1648720508",
        name: "Maya Vatana Green 500G",
        quantity: "500 g",
        price: 72,
        strike_price: 84
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/437/original/data?1643108712",
        name: "Maya Chana Dal Premium 500G",
        quantity: "500 g",
        price: 57,
        strike_price: 60
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/438/original/data?1643108714",
        name: "Maya Chana Dal Standerd 500G",
        quantity: "500 g",
        price: 49,
        strike_price: 58
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/439/original/data?1643108717",
        name: "Maya Groundnut 500G",
        quantity: "500 g",
        price: 85,
        strike_price: 107
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/440/original/data?1643108719",
        name: "Maya Juwar Premium 1Kg",
        quantity: "1 kg",
        price: 56,
        strike_price: 61
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/441/original/data?1643108721",
        name: "Maya Kabuli Chana Big 500G",
        quantity: "500 g",
        price: 82,
        strike_price: 111
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/442/original/data?1643108724",
        name: "Maya Kabuli Chana Small 500G",
        quantity: "500 g",
        price: 77,
        strike_price: 85
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/444/original/data?1643108728",
        name: "Maya Masoor Dal Split 500G",
        quantity: "500 g",
        price: 67,
        strike_price: 79
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/445/original/data?1643108731",
        name: "Maya Matki 250G",
        quantity: "250 g",
        price: 36,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/446/original/data?1643108733",
        name: "Maya Moong Dal Standard 1 Kg",
        quantity: "1 kg",
        price: 143,
        strike_price: 171
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/450/original/data?1643108741",
        name: "Maya Rajma Kashmiri Red 500G",
        quantity: "500 g",
        price: 85,
        strike_price: 99
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/456/original/data?1643128043",
        name: "Maya Soyabean 500G",
        quantity: "500 g",
        price: 77,
        strike_price: 87
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/459/original/data?1643128050",
        name: "Maya Toor Dal Premium 1 Kg",
        quantity: "1 kg",
        price: 139,
        strike_price: 166
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/460/original/data?1643128052",
        name: "Maya Urad Dal Premium 500G",
        quantity: "500 g",
        price: 77,
        strike_price: 88
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/481/original/data?1643128102",
        name: "Maya Moong Dal Premium 1 Kg",
        quantity: "1 kg",
        price: 146,
        strike_price: 174
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/432/original/data?1643108701",
        name: "Maya Vatana White 500G",
        quantity: "500 g",
        price: 63,
        strike_price: 74
    }
]

localStorage.setItem("kitchenDalArr", JSON.stringify(kitchenDalData));

// 3. ATTA

var kitchenAttaData = [
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/435/original/data?1643108708",
        name: "Maya Besan 500G",
        quantity: "500 g",
        price: 54,
        strike_price: 59
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/443/original/data?1643108726",
        name: "Maya Maida 500G",
        quantity: "500 g",
        price: 27,
        strike_price: 31
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/449/original/data?1643108739",
        name: "Maya Premium Suji 500G",
        quantity: "500 g",
        price: 27,
        strike_price: 31
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/451/original/data?1643128032",
        name: "Maya Rava 500G",
        quantity: "500 g",
        price: 30,
        strike_price: 31
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/480/original/data?1643128099",
        name: "Maya Chakki Fresh Atta 5 Kg",
        quantity: "5 kg",
        price: 230,
        strike_price: 275
    }
]

localStorage.setItem("kitchenAttaArr", JSON.stringify(kitchenAttaData));

// 4. RICE

var kitchenRiceData = [
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/005/083/original/data?1648280734",
        name: "Maya HMT Kolam Rice, 5kg",
        quantity: "5 kg",
        price: 351,
        strike_price: 381
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/005/084/original/data?1648280911",
        name: "Maya Indrayani Rice, 5 Kg",
        quantity: "5 kg",
        price: 355,
        strike_price: ""
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/images/images/000/005/085/original/data?1648281362",
        name: "Maya Surti Kolam Rice, 5kg",
        quantity: "5 kg",
        price: 446,
        strike_price: 482
    }
]

localStorage.setItem("kitchenRiceArr", JSON.stringify(kitchenRiceData));
