let items = [
    {
        name: "Supermarket",
        icon: "fab fa-apple"
    },
    {
        name: "Health & Beauty",
        icon: "fas fa-vials"
    },
    {
        name: "Home & Office",
        icon: "fas fa-home"
    },
    {
        name: "Phones & Tablet",
        icon: "fas fa-mobile"
    },
    {
        name: "Computing",
        icon: "fas fa-desktop"
    },
    {
        name: "Electronics",
        icon: "fas fa-satellite"
    },
    {
        name: "Fashion",
        icon: "fas fa-shirt"
    },
    {
        name: "Baby Products",
        icon: "fas fa-baby"
    },
    {
        name: "Gaming",
        icon: "fas fa-gamepad"
    },
    {
        name: "Sporting Goods",
        icon: "fas fa-dumbbell"
    },
    {
        name: "Automobile",
        icon: "fas fa-car"
    },
    {
        name: "Others",
        icon: "fas fa-ellipsis"
    },
];

let text = ""
for(let i of items){
    text += `<div>
    <a href = "#"><i class="${i.icon}"></i> ${i.name} </a>
    </div>`
}
document.getElementById("aside").innerHTML = text

let flash_sales = [
    {
        image: "/Jumia materials/Earbud_1.jpg",
        img_name: "Earbud",
        price: "&#8358 6000",
        fmr_price: "&#8358 8000"
    },
    {
        image: "/Jumia materials/Shoe_1.jpg",
        img_name: "Shoe",
        price: "&#8358 4000",
        fmr_price: "&#8358 6000"
    },
    {
        image: "/Jumia materials/Rice_1.jpg",
        img_name: "Rice",
        price: "&#8358 2000",
        fmr_price: "&#8358 4500"
    },
    {
        image: "/Jumia materials/Hoodie_1.jpg",
        img_name: "Hoodie",
        price: "&#8358 7000",
        fmr_price: "&#8358 8500"
    },
    {
        image: "/Jumia materials/Shirt_1.jpg",
        img_name: "Shirt",
        price: "&#8358 3000",
        fmr_price: "&#8358 5500"
    },
    {
        image: "/Jumia materials/Cornflakes_1.jpg",
        img_name: "Corn Flakes",
        price: "&#8358 1000",
        fmr_price: "&#8358 3000"
    },
]

let flash_sale = ""
for(let flash of flash_sales){
    flash_sale += `<div>
    <a href = "#"><img src="${flash.image}" alt="">
    <div> ${flash.img_name}</div>
    <div> ${flash.price}</div>
    <div><del> ${flash.fmr_price}</del></div> </a>
    </div>`
}
document.querySelector("#white").innerHTML = flash_sale

let Offers = [
    {
        Offer_img: "/Jumia materials/offer_1.jpg"
    },
    {
        Offer_img: "/Jumia materials/offer_2.jpg"
    },
    {
        Offer_img: "/Jumia materials/offer_3.jpg"
    },
    {
        Offer_img: "/Jumia materials/offer_4.jpg"
    },
]






let Deals = [
    {
        D_img: "/Jumia materials/Phone_D.jpg",
        D_name: "XIAOMI Redmi Note 10 Pro",
        D_price: "&#8358 131,750"
    },
    {
        D_img: "/Jumia materials/Shoe_D.jpg",
        D_name: "2022 Mens Shoe",
        D_price: "&#8358 6,499"
    },
    {
        D_img: "/Jumia materials/Earbud_D.jpg",
        D_name: "Qcy Bluetooth",
        D_price: "&#8358 6,620"
    },
    {
        D_img: "/Jumia materials/Powerbank_D.jpg",
        D_name: "Joway Power-bank",
        D_price: "&#8358 4,790"
    },
    {
        D_img: "/Jumia materials/Airpod_D.jpg",
        D_name: "Apple Airpod",
        D_price: "&#8358 59,000"
    },
    {
        D_img: "/Jumia materials/Canvas_D.jpg",
        D_name: "Yemlays Men's Canvas",
        D_price: "&#8358 4,451"
    }
]

let Deal = ""
for(let D of Deals){
    Deal += `<div>
    <a href = "#"><img src="${D.D_img}" alt="">
    <div> ${D.D_name}</div>
    <div> ${D.D_price}</div></a>
    </div>`
}
document.querySelector("#Deals_1").innerHTML = Deal



let Shop_boxes = [
    {
        S_img: "/Jumia materials/Free_S.jpg",
        S_name: "Free Delivery"
    },
    {
        S_img: "/Jumia materials/Grocery_S.jpg",
        S_name: "Grocery Supersavers"
    },
    {
        S_img: "/Jumia materials/Sneakers_S.jpg",
        S_name: "Walk The Talk"
    },
    {
        S_img: "/Jumia materials/Top_S.jpg",
        S_name: "Top Brands"
    },
    {
        S_img: "/Jumia materials/Perfect_S.jpg",
        S_name: "Perfect for Dinner"
    },
    {
        S_img: "/Jumia materials/Warehouse_S.jpg",
        S_name: "Warehouse"
    },
    {
        S_img: "/Jumia materials/Sneakers2_S.jpg",
        S_name: "Sneakers"
    },
    {
        S_img: "/Jumia materials/iPhones_S.jpg",
        S_name: "Let's Get Talking"
    },
    {
        S_img: "/Jumia materials/Half_S.jpg",
        S_name: "Half Price Store"
    },
    {
        S_img: "/Jumia materials/Gadgets_S.jpg",
        S_name: "iPhones, iOS Devices"
    },
    {
        S_img: "/Jumia materials/Exclusive_S.jpg",
        S_name: "Exclusive Deals"
    },
    {
        S_img: "/Jumia materials/The_S.jpg",
        S_name: "The Good Times"
    },
]

let Shop_box = ""
for(let shop of Shop_boxes){
    Shop_box += `<div>
    <a href = "#"> <img src="${shop.S_img}" alt="">
    <div> ${shop.S_name} </div></a>
    </div>`
}
document.querySelector("#Shop_1").innerHTML = Shop_box




let Budget_boxes = [
    {
        Bu_img: "/Jumia materials/Budget_1.jpg"
    },
    {
        Bu_img: "/Jumia materials/Budget_2.jpg"
    },
]

let  Budget_box = ""
for(let Budget of Budget_boxes){
    Budget_box += `<div>
    <a href = "#"> <img src="${Budget.Bu_img}" alt="">
    </div>`
}
document.querySelector("#Budget_1").innerHTML = Budget_box




let Top_Budgets = [
    {
        TOB_img: "/Jumia materials/TOB_1.jpg",
        TOB_name: "Phone Accessories"
    },
    {
        TOB_img: "/Jumia materials/TOB_2.jpg",
        TOB_name: "Groceries"
    },
    {
        TOB_img: "/Jumia materials/TOB_3.jpg",
        TOB_name: "Baby Products"
    },
    {
        TOB_img: "/Jumia materials/TOB_4.jpg",
        TOB_name: "Men's Fashion"
    },
    {
        TOB_img: "/Jumia materials/TOB_5.jpg",
        TOB_name: "Women's Fashion"
    },
    {
        TOB_img: "/Jumia materials/TOB_6.jpg",
        TOB_name: "Kid's Fashion"
    },
    {
        TOB_img: "/Jumia materials/TOB_7.jpg",
        TOB_name: "Watches"
    },
    {
        TOB_img: "/Jumia materials/TOB_8.jpg",
        TOB_name: "Beauty"
    },
    {
        TOB_img: "/Jumia materials/TOB_9.jpg",
        TOB_name: "Toys & Games"
    },
    {
        TOB_img: "/Jumia materials/TOB_10.jpg",
        TOB_name: "Computing"
    },
    {
        TOB_img: "/Jumia materials/TOB_11.jpg",
        TOB_name: "Electronics"
    },
    {
        TOB_img: "/Jumia materials/TOB_12.jpg",
        TOB_name: "Home & Office"
    },
]

let Top_Budget = ""
for(let Top of Top_Budgets){
    Top_Budget += `<div>
    <a href = "#"><img src="${Top.TOB_img}" alt="">
    <div> ${Top.TOB_name}</div>
    </div>`
}
document.querySelector("#Top_Budget_1").innerHTML = Top_Budget





let Unilevers = [
    {
        Uni_img: "/Jumia materials/Unilever_1.jpg",
    },
    {
        Uni_img: "/Jumia materials/Unilever_2.jpg",
    }
]

let Unilever = ""
for(let Uni of Unilevers){
    Unilever += `<div>
    <a href="#"><img src="${Uni.Uni_img}" alt=""></a>
    </div>`
}
document.querySelector("#Unilever").innerHTML = Unilever



let Top_Brands = [
    {
        Br_img: "/Jumia materials/Brand_1.jpg"
    },
    {
        Br_img: "/Jumia materials/Brand_2.jpg"
    },
    {
        Br_img: "/Jumia materials/Brand_3.jpg"
    },
    {
        Br_img: "/Jumia materials/Brand_4.jpg"
    },
    {
        Br_img: "/Jumia materials/Brand_5.jpg"
    },
    {
        Br_img: "/Jumia materials/Brand_6.jpg"
    },
    {
        Br_img: "/Jumia materials/Brand_7.jpg"
    },
    {
        Br_img: "/Jumia materials/Brand_8.jpg"
    },
    {
        Br_img: "/Jumia materials/Brand_9.jpg"
    },
    {
        Br_img: "/Jumia materials/Brand_10.jpg"
    },
    {
        Br_img: "/Jumia materials/Brand_11.jpg"
    },
    {
        Br_img: "/Jumia materials/Brand_12.jpg"
    },
]

let Top_Brand = ""
for(let Br of Top_Brands){
    Top_Brand += `<div>
    <a href = "#"><img src="${Br.Br_img}" alt="">
    </div>`
}
document.querySelector("#Top_Brand").innerHTML = Top_Brand



let Long_box = [
    {
        Long_img: "/Jumia materials/Long.jpg"
    }
]

let Long = ""
for(let L of Long_box){
    Long += `<div>
    <div> <a href=""><img src="${L.Long_img}" alt=""></div>
    </div>`
}
document.querySelector("#Long").innerHTML = Long




let Commissions = [
    {
        Com_img: "/Jumia materials/Commission_1.jpg",
    },
    {
        Com_img: "/Jumia materials/Commission_2.jpg",
    }
]

let Commission = ""
for(let Com of Commissions){
    Commission += `<div>
    <a href="#"><img src="${Com.Com_img}" alt=""></a>
    </div>`
}
document.querySelector("#Commission").innerHTML = Commission