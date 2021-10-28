var p_data  = [
    {
       name:"Samsung Note 20 Ultra",
       price: "190.99",
       img:"https://i5.walmartimages.com/asr/05b39bde-392b-4ca4-a20a-334eded4c4cc.10fd04fc514882b138dbd9ca747af587.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    
    {
        name:"Lenovo Flex",
        price: "290.89",
        img:"https://i5.walmartimages.com/asr/d1021115-1a0d-4098-94b8-b3ee6873908b.6901cd31adb05412b97ae94f4041991c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
     },
     {
        name:"10000Mah powerbank portable charger",
        price: "55.52",
        img:"https://i5.walmartimages.com/asr/47ad766c-e6b7-4cb9-bd86-acffc69676f5_1.9c2ce7e705bbabb41d965a6c2c7884ab.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
     },
     {
       name:"hp 14inch ryzen",
       price: "352.00",
       img:"https://i5.walmartimages.com/asr/1e7211d1-6452-48cf-afb0-a3adb1b847f2.8717ef00d5b64c1e54f8da74211d0f3c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    
    {
        name:"Lenevo 14s Core i3 7th Gen",
        price: "678.28",
        img:"https://i5.walmartimages.com/asr/a03d58dd-531a-4b91-bbe4-ba5e4aa7a016.99b6d84eb43bca57d0dcbe29a813506a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
     },
     {
        name:"Vivo 19",
        price: "500.00",
        img:"https://i5.walmartimages.com/asr/6ac861b1-39b7-49f2-b59c-f84054ebce4f.509dba035dc9b74987eff023fc04714d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
     },
     {
       name:"HP 15'' Pentium",
       price: "456.00",
       img:"https://i5.walmartimages.com/asr/283775ec-2e54-43b6-ab74-dcb5e682dbe2_1.311a277573464c3735ccff9999b4175e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    {
       name:"Samsung Note 20 Ultra",
       price: "259.88",
       img:"https://i5.walmartimages.com/asr/05b39bde-392b-4ca4-a20a-334eded4c4cc.10fd04fc514882b138dbd9ca747af587.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    
    {
        name:"Lenovo Flex",
        price: "200.12",
        img:"https://i5.walmartimages.com/asr/d1021115-1a0d-4098-94b8-b3ee6873908b.6901cd31adb05412b97ae94f4041991c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
     },
     {
        name:"10000Mah powerbank portable charger",
        price: "99.00",
        img:"https://i5.walmartimages.com/asr/96fedd87-2b41-4c91-9856-0dc66dde8d6b_1.7b3a92ae721393447531ed54b1681b25.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
     },
     {
       name:"hp 14inch ryzen",
       price: "99.89",
       img:"https://i5.walmartimages.com/asr/1e7211d1-6452-48cf-afb0-a3adb1b847f2.8717ef00d5b64c1e54f8da74211d0f3c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    
    
    {
        name:"Iphone 13  128GB Silver",
        price: "359.00",
        img:"https://i5.walmartimages.com/asr/4b81740c-90f6-4ca8-a039-186cd5c03fe8.04cb7a65a67e4e6cf2afac724cad9da6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
     },
     {
        name:"Skullcandy Hesh2 Wireless Headphone",
        price: "99.00",
        img:"https://i5.walmartimages.com/asr/ba7cd9fe-c332-4650-b014-ab425642b00f.1180556735ba1ff0356d2f2ace5ac004.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
     },
     {
       name:"Samsung Smart Tv",
       price: "1200.00",
       img:"https://i5.walmartimages.com/asr/af3386f1-ab5b-44ca-ad21-88304c613fe6.6c781355173b6745e2f9adcafe20f110.jpeg?odnHeight=300&odnWidth=300&odnBg=FFFFFF"
    },
    
    {
        name:"Rii Primer RGB Compact Keyboard",
        price: "300.00",
        img:"https://i5.walmartimages.com/asr/c0cfd9df-a8ad-478d-a6c4-49440ba784c1.a82140ad6e44dc266fc788bcc2342549.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
     },
     {
        name:"Play Station 4",
        price: "450.23",
        img:"https://i5.walmartimages.com/asr/bb49560a-1e5e-4ac1-8b1e-a53597f44628_1.ceacbceb920d60041a6245961c2828f7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
     },
    
    
    ]
    
    var parent = document.getElementById("products");
    
    function   seeprod(a){
        parent.innerHTML = null;
        p_data.forEach(function (product){
        let div = document.createElement("div");
    
    
        let img = document.createElement("img");
    
       img.src = product.img;
        let prod_price = document.createElement("p");
        prod_price.textContent = "$"+product.price ;
    
        let prod_name = document.createElement("p");
        prod_name.textContent = product.name;
    
         let add = document.createElement("button")
         add.innerText = "+ Add";
         add.onclick = function(){
             addtocart(product)
             alert("product added")
         }
        
    
        div.append(img,add,prod_price,prod_name);
        parent.append(div)
    });
    }
    
    seeprod(p_data);
    
    if(localStorage.getItem("cart") ==null){
    localStorage.setItem("cart",JSON.stringify([]))
    }
    
    function addtocart(p){
        let prodCart = JSON.parse(localStorage.getItem("cart"))
        prodCart.push(p)
        localStorage.setItem("cart",JSON.stringify(prodCart))
        
    }
    
    
    
    function sortLtoH(){
        let arr = p_data.sort(function(a,b){
            return a.price - b.price;
        })
        seeprod(arr)
    }
    
    function sortHtoL(){
        let arr = p_data.sort(function(a,b){
            return b.price - a.price;
        })
        seeprod(arr)
    }
    function filterbyPrice(){
        let arr = p_data.filter(function(a){
            return  a<=1000
        })
        seeprod(arr)
    }
    let pro = document.getElementById("products")
    let aw = pro.getElementsByTagName("p")
    var totalcart = Number(aw[1].textContent)
    
    
    