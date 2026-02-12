import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/footer/Footer";
import ProductView from "./pages/productview/ProductView";
import ProductCart from "./pages/productcart/ProductCart";
import LoginModal from "./components/loginmodal/LoginModal";
import ProductCheckout from "./pages/productcheckout/ProductCheckout";
import ShoppingModal from "./components/shoppingmodal/ShoppingModal";
import Error from "./pages/error/Error";

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [shoppingModal, setShoppingModal] = useState(false);
  const [cartdata, setCartdata] = useState(() => {
    try {
      const saveData = localStorage.getItem("cartData");
      return saveData ? JSON.parse(saveData) : [];
    } catch (error) {
      return [];
    }
  });

  const [data, setData] = useState([
    {
      id: 1,
      mainImg:
        "https://shopaltmanplants.com/cdn/shop/files/856d3b5fde4870ceadb8fa90af17c9a8.jpg?v=1741819185",
      title: "Monstera deliciosa",
      price: 89.2,
      imgs: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTKMpxF1QgF1Nca-LXSnoBU2g8hrcRczgCQ&s",
        "https://shopaltmanplants.com/cdn/shop/files/856d3b5fde4870ceadb8fa90af17c9a8.jpg?v=1741819185",
        "https://mobileimages.lowes.com/productimages/d452ee1b-8073-44b4-a23c-605235539a3d/64299497.jpg?size=pdhism",
        "https://mobileimages.lowes.com/productimages/1b8973d6-6029-4788-bf79-3247a28f0d25/65173227.jpg?size=pdhism",
      ],
      desc: "Monstera deliciosa — zamonaviy interyerlar uchun eng mashhur tropik uy o‘simliklaridan biri. Katta, yorilgan yashil barglari xonaga jonli va tabiiy ko‘rinish beradi. Yorug‘, lekin to‘g‘ridan-to‘g‘ri quyosh tushmaydigan joylarni yaxshi ko‘radi. Parvarishi oson bo‘lib, uy va ofis muhitiga juda mos keladi.",
      size: ["S", "M", "L", "XL"],
      category: "House Plants",
    },
    {
      id: 2,
      mainImg:
        "https://www.bhg.com/thmb/e5gJ_-yrOJXG40vQiHwgpRx2Lsw=/1280x0/filters:no_upscale():strip_icc()/houseplants-rustic-cabinet-7ffd2993-fea18a9766dd4a0394f0e72011447cb8.jpg",
      title: "Houseplants Rustic Interior Display",
      price: 49.56,
      imgs: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHhAv2sjVXEQYYTWyaufVxCaDMzbhwjutnQ&s",
        "https://mobileimages.lowes.com/productimages/5473bd9d-0e9e-47b6-a268-e32276abe1bc/62923687.jpg",
        "https://m.media-amazon.com/images/I/717c7FqN05L._AC_UF350,350_QL80_.jpg",
        "https://cdn.shopify.com/s/files/1/0621/8157/2697/files/vyfcjns9wtxxs9qe2rfw_820x820_crop_center.jpg.webp?v=1738155796",
      ],
      desc: "Bu rasmda rustik uslubdagi interyer bezak elementlari bilan uy sharoitida joylashtirilgan turli uy o‘simliklari ko‘rinadi. Ochiq yog‘och kabinet usti va terakota donalar bilan bezatilgan yashil o‘simliklar xona ichiga jonli, tabiiy ko‘rinish qo‘shadi. Bunday uy o‘simliklari nafaqat estetika, balki interyerga iliqlik va tabiat hissi beradi, ularni yorug‘, bilvosita quyosh nuri tushadigan joyga qo‘yish tavsiya etiladi.",
      size: ["S", "M", "L", "XL"],
      category: "House Plants",
    },
    {
      id: 3,
      mainImg:
        "https://simplytrees.com/cdn/shop/files/DracaenaLisa2_3b3f9371-1aa9-44c8-ab50-da3c2c95c721.webp?v=1719098218&width=480",
      title: "Dracaena Lisa",
      price: 79.99,
      imgs: [
        "https://hortology.co.uk/cdn/shop/products/Dracaena-fragrans-Lemon-Lime-3MultiStem-24-x-140cm-Mini-Orb-Kevan-Plant-Pot-Grey-Washed-32x28cm_c96e807e-71e5-4449-8cc8-060db2ea8dff_1200x.jpg?v=1716387628",
        "https://img.freepik.com/premium-photo/photo-indoor-plants-dracaena-white-pot-white-background_1077802-151742.jpg?w=360",
        "https://hortology.co.uk/cdn/shop/files/Dracaena-deremensis-Warneckii-Multi-Stem-21x105cm-_3-stems_-Charlotte-Plant-Pot-Spiced-Ochre-29x25cm_1200x.jpg?v=1766488295",
        "https://florastore.com/cdn/shop/files/2074302_Productimage_10_SQ.png?v=1745658384&width=1080",
      ],
      desc: "racaena Lisa – bu zamonaviy interyerlar uchun ideal, uzun, gorizontal barglari bilan bezatilgan uy o‘simligi. Slip, qora-yashil barglari masofadan qaraganda juda chiroyli ko‘rinadi va har qanday xonaga tabiiy, antiqa estetika qo‘shadi. Bu o‘simlik yorug‘, bilvosita quyosh nuri tushadigan joylarda eng yaxshi o‘sadi, past yorug‘lik sharoitida ham toladi va parvarishi juda oson.",
      size: ["S", "M", "L", "XL"],
      category: "House Plants",
    },
    {
      id: 4,
      mainImg:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2024/9/10/1/Shutterstock_2265442481_BudArt13_Purple-hellebores-flower.jpg.rend.hgtvcom.616.411.85.suffix/1726020919165.webp",
      title: "Purple Hellebores Flower",
      price: 25.99,
      imgs: [
        "https://s3-ap-southeast-2.amazonaws.com/s3.pma.com.au/Combined%2FH-Isabella-Charm-02.0.jpg",
        "https://s3-ap-southeast-2.amazonaws.com/s3.pma.com.au/Website%2FPlants%2F2144399075%2FImages%2FGallery%2Fh_sophiesdelight_03.0.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8v4G1_FLrUqqEv2qWos9j00m6ZsZFtxiy0A&s",
        "https://s3-ap-southeast-2.amazonaws.com/s3.pma.com.au/Website%2FPlants%2F1040087262%2FImages%2FGallery%2FH.Annas+Red-7.0.jpg",
      ],
      desc: "Purple Hellebores Flower — sovuq mavsumda ham gullaydigan, engil binafsha-qizg‘ish rangli barglari bilan bezatilgan bezak gullardan biridir. Bu gullar xonaga noan’anaviy, nafis atmosfer qo‘shadi hamda bog‘da yoki uy ichida dekorativ holatda joylashtirish uchun juda mos.",
      size: ["S", "M", "L", "XL"],
      category: "Potter Plants",
    },
    {
      id: 5,
      mainImg:
        "https://www.gardendesign.com/pictures/images/675x529Max/site_3/beautifall-summer-nights-pothos-pothos-plant-proven-winners_18890.jpg",
      title: "Beautifall Summer Nights",
      price: 15.99,
      imgs: [
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1713426720-pothos-plants-golpot006-64_1000.jpg?crop=1xw:1.00xh;center,top&resize=980:*",
        "https://ecostems.ca/cdn/shop/files/watermarked_potted_golden_pothos_1_1_jpg_1024x.webp?v=1762625679",
        "https://images.thdstatic.com/productImages/96dc7a78-4376-4e60-9238-c645f414e856/svn/costa-farms-pothos-plants-6goldpothos-64_1000.jpg",
        "https://bfasset.costco-static.com/U447IH35/as/3fjjkmpff376vmx3pfs2pbv/4000027904-847_golden_1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024",
      ],
      desc: "Pothos (Epipremnum aureum) — Beautifall Summer Nights – shuhratli va parvarishi juda oson uy o‘simligi. U uzun, sirg‘aluvchi chiroyli uzumga o‘xshash barglari bilan tanilgan bo‘lib, istalgan kosada joylashtiriladi yoki osilgan savatlarda tushib ketadi.",
      size: ["S", "M", "L", "XL"],
      category: "Potter Plants",
    },
    {
      id: 6,
      mainImg:
        "https://www.toynk.com/cdn/shop/products/SVB-HP1618EH-CF_1655x.jpg?v=1654323318",
      title: "Artificial Indoor Dracaena",
      price: 79.99,
      imgs: [
        "https://target.scene7.com/is/image/Target/GUEST_415da415-2472-40b3-aae7-82d1bf663f41",
        "https://i5.walmartimages.com/asr/a31595a8-1a2c-4f0b-b415-e3521712403a.5bfae01cc8fb86168629cc9625d617de.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        "https://m.media-amazon.com/images/I/71+jr04TP6L._AC_UF350,350_QL80_.jpg",
        "https://m.media-amazon.com/images/I/714LXiniC9L._AC_UF894,1000_QL80_.jpg   ",
      ],
      desc: "Bu sun’iy indoor o‘simlik (Artificial Dracaena) dekoratsiya uchun maxsus tayyorlangan bo‘lib, xonadon, ofis yoki yashash maskanlariga tropik va zamonaviy ko‘rinish qo‘shadi. Katta bo‘yli yaproqlari real o‘simlik effektini beradi, lekin suv, quyosh yoki parvarish talab qilmaydi.",
      size: ["S", "M", "L", "XL"],
      category: "Potter Plants",
    },
    {
      id: 7,
      mainImg:
        "https://media.gettyimages.com/id/658447720/photo/assortment-of-nuts-on-rustic-wood-table.jpg?s=612x612&w=gi&k=20&c=QVsCO2qzDUZPJzT6IuLEEKMN6a0n-k0tvBnxx3oMG98=",
      title: "Assorted Gourmet Nuts Collection",
      price: 24.99,
      imgs: [
        "https://img.freepik.com/free-photo/some-assorted-nuts-dried-fruits-with-pecan-pistachios-almond-peanut-cashew-pine-nuts-top-view_176474-2066.jpg",
        "https://static.vecteezy.com/system/resources/previews/007/282/764/non_2x/assorted-nuts-for-a-background-almond-walnut-cashew-pistachios-hazelnuts-peanuts-macadamia-collection-of-different-varieties-of-nuts-composition-with-dried-fruits-healthy-food-organic-photo.jpg",
        "https://img.freepik.com/premium-photo/various-nuts-dried-fruits-wooden-bowls_266870-11811.jpg",
        "https://media.istockphoto.com/id/695071562/photo/nuts-assortment-on-rustic-wood-table.jpg?s=612x612&w=0&k=20&c=G1ndYym-HLo9FCKnA2kh9qq4_2Lz_fYJH6QPZmpPw_Q=",
      ],
      desc: "Assorted Gourmet Nuts Collection — tabiiy, sog‘lom va mazali yong‘oqlar aralashmasi. Bu to‘plamda bodom, findiq, pista va boshqalar mavjud bo‘lib, ularni yengil atıştırmalik sifatida iste’mol qilish mumkin.",
      size: ["S", "M", "L", "XL"],
      category: "Seeds",
    },
    {
      id: 8,
      mainImg:
        "https://img.freepik.com/free-psd/collection-sunflower-seeds-petals-variety-shapes-colors-textures_191095-85555.jpg?semt=ais_hybrid&w=740&q=80",
      title: "Assorted Sunflower Seeds & Seed Mix",
      price: 12.99,
      imgs: [
        "https://assets.heartfoundation.org.nz/images/nutrition/page-heros/seeds-page-hero.webp?mtime=1669000908",
        "https://www.kanzandmuhul.com/cdn/shop/products/packof5seeds.png?v=1637936532",
        "https://www.kanzandmuhul.com/cdn/shop/products/packof5seeds.png?v=1637936532",
        "https://www.kanzandmuhul.com/cdn/shop/products/packof5seeds.png?v=1637936532   ",
      ],
      desc: "Assorted Sunflower Seeds & Seed Mix — turli shakl, rang va teksturadagi quyoshguli urug‘lari aralashmasi. Ushbu urug‘lar bog‘da ekish, balkon yoki terasta o‘sadigan gullar uchun juda mos bo‘lib, o‘sishga qulay va foydali.",
      size: ["S", "M", "L", "XL"],
      category: "Seeds",
    },
    {
      id: 9,
      mainImg:
        "https://arrowheadmills.com/wp-content/uploads/2022/10/DSC08737-1024x684.jpg",
      title: "Assorted Sunflower Seeds & Seed Mix",
      price: 8.99,
      imgs: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQOfrL7rhLQt9oYfLxPZzdstBUxWexWciW8g&s",
        "https://arrowheadmills.com/wp-content/uploads/2022/10/DSC08737-1024x684.jpg",
        "https://images.squarespace-cdn.com/content/v1/5b35b18af93fd4d75e591f4a/1543985750553-I04QXF6GJ02X1UWC316A/HS-Website---Seeds%2C-Grains%2C-Paste-%26-Beans.jpg?format=2500w",
        "https://www.grocery.coop/wp-content/uploads/2015/12/The_Benefits_of_Seeds_0-1200x900.jpg",
      ],
      desc: "Turli shakl, rang va teksturadagi quyoshguli urug‘lari aralashmasi. Bog‘da ekish, balkon yoki terasta o‘sadigan gullar uchun juda mos. O‘sishga qulay va foydali.",
      size: ["S", "M", "L", "XL"],
      category: "Seeds",
    },
    {
      id: 11,
      mainImg:
        "https://cdn.shopify.com/s/files/1/0600/0712/1036/files/Gemini_Generated_Image_pi816kpi816kpi81_480x480.jpg",
      title: "Lush Indoor Palm Plant",
      price: 59.99,
      imgs: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxIgcd6dYqc-l76LQZuZZHIEXC0huPkYY5g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxIgcd6dYqc-l76LQZuZZHIEXC0huPkYY5g&s",
        "https://images.thdstatic.com/productImages/f9e1c415-75de-4e63-b9b7-c54b9f13dbf2/svn/nearly-natural-artificial-trees-5642-31_600.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRee50l2gDiltxP-qTgBO5VjtEKCFNKi4HDgA&s",
      ],
      desc: "Stil va tabiat go‘zalligini uyingizga olib kiruvchi Lush Indoor Palm Plant — har qanday xonaga yangi hayot baxsh etadi. Bu bezak o’simlik yorqin yashil barglari bilan interyerga qulaylik va tabiiylik beradi.",
      size: ["S", "M", "L", "XL"],
      category: "Big Plants",
    },
    {
      id: 12,
      mainImg:
        "https://hips.hearstapps.com/hmg-prod/images/caladium-pink-splash-royalty-free-image-1720643818.jpg?crop=0.668xw:1.00xh;0.136xw,0&resize=1120:*",
      title: "Caladium Pink Splash",
      price: 29.99,
      imgs: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKfXy1gOvLlNot2ECelfljusrqmVp-ruKSg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYzB72pGy4R3--PzH_8m77uETT7_asi0hmQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8S7b8S-_S6KP1utjEDolt3hL_0tE2hkyeQ&s",
        "https://hips.hearstapps.com/hmg-prod/images/two-planters-with-caladium-royalty-free-image-1724172103.jpg?crop=1xw:0.91425xh;center,top&resize=980:*",
      ],
      desc: "Caladium Pink Splash — yorqin pushti va yashil barglari bilan bezatilgan dekorativ tropik o‘simlik, uyni yoki bog‘ni rang‑barang qiladi. Bu o‘s­imlik yarim soyada yaxshi rivojlanadi va barglari tufayli interyerga jonli tabiat hissi baxsh etadi.",
      size: ["S", "M", "L", "XL"],
      category: "Big Plants",
    },
    {
      id: 13,
      mainImg:
        "https://www.mydomaine.com/thmb/hMZ1pBjV_evgIOpGacxl1MnJ0QY=/700x0/filters:no_upscale():strip_icc()/plantsinroom-b928ec85020f4d26a4c22fa53dd5030f.jpg",
      title: "Premium Indoor Living Room Plant Set",
      price: 79.99,
      imgs: [
        "https://www.thespruce.com/thmb/tn41fQzitO4OJKzTFQ0oef8yg4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mochagirlplaceplants-8cbd72ead0834047857c703fce5f2eff.jpeg",
        "https://yfdecor.com/wp-content/uploads/2024/07/choosing-indoor-plants.jpg",
        "https://kyari.co/cdn/shop/articles/indoor-plants-studio_1_1_99be9d05-cfb5-4902-815a-ffa80c9737ec.jpg?v=1738661366&width=480",
        "https://hips.hearstapps.com/hmg-prod/images/background-image-of-various-live-plants-indoors-royalty-free-image-1724254213.jpg?crop=0.88847xw:1xh;center,top&resize=1200:*",
      ],
      desc: "Uyingizning yashash xonasiga tabiiy yashillik va qulay muhit qo‘shadigan Premium Indoor Living Room Plant Set — bu yuqori sifatli dekor o‘simliklari to‘plami.",
      size: ["S", "M", "L", "XL"],
      category: "Big Plants",
    },
    {
      id: 14,
      mainImg:
        "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/at%2Fart%2Fphoto%2F2020-02%2Ffake-succulents%2FAT-Succulents-lead",
      title: "Premium Artificial Succulent Decor Set",
      price: 39.99,
      imgs: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhup6yGCiJUw5LHj7Nfd8BAqXB6XJL0KTnA&s",
        "https://images-cdn.ubuy.co.id/6945296f7481b928580359af-funarty-5pcs-artificial-succulent.jpg",
        "https://www.mygift.com/cdn/shop/products/artificial-succulent-plants-with-pots-set-of-4.jpg?v=1593125969",
        "https://images.thdstatic.com/productImages/4a74d6e3-afd3-4932-bb49-287df77949ef/svn/smart-planet-succulent-plants-0881149-66_600.jpg",
      ],
      desc: "Bu Premium Artificial Succulent Decor Set — uyingiz, ofisingiz yoki xonangiz bezagi uchun ideal sun’iy sukkulentlar to‘plami. Har bir o‘simlik haqiqiyga o‘xshash barg tuzilmasiga ega bo‘lib, “tirik” ko‘rinish beradi",
      size: ["S", "M", "L", "XL"],
      category: "Succulents",
    },
    {
      id: 15,
      mainImg:
        "https://shop.pikenursery.com/cdn/shop/products/different-succulents__03818.1677676451.1280.1280.jpg?v=1707912384&width=480",
      title: "Assorted Succulent Plants Set",
      price: 5.99,
      imgs: [
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/identify-and-fix-common-problems-with-succulents-2021-hero.jpg",
        "https://cdn.shopify.com/s/files/1/0269/5689/0193/files/How_to_Keep_Succulents_Alive_in_Your_Home_480x480.jpg?v=1624323543",
        "https://www.santabarbaracompany.com/cdn/shop/products/succulentemersonwhite2_1600x.jpg?v=1693948888",
        "https://www.santabarbaracompany.com/cdn/shop/products/succulentemersonwhite2_1600x.jpg?v=1693948888",
      ],
      desc: "Bu Assorted Succulent Plants Set — turli shakl va rangdagi sukkulent o‘simliklar to‘plami, uyingiz, ofisingiz yoki bog‘ uchun mukammal dekorativ yechimdir.",
      size: ["S", "M", "L", "XL"],
      category: "Succulents",
    },
    {
      id: 16,
      mainImg:
        "https://i.pinimg.com/736x/2f/7b/87/2f7b87073926dc979e7f301724adac0c.jpg",
      title: "Windowsill Succulent Garden Set",
      price: 25.99,
      imgs: [
        "https://debraleebaldwin.com/wp-content/uploads/bb-plugin/cache/Windowsill-Succulents-custom_crop.jpg",
        "https://thesucculentsource.com/cdn/shop/files/Brinley-Succulent-Planter-Succulent-Arrangement-4.jpg?v=1739212150&width=1799",
        "https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/17_31635_30XP_28e_v1x.jpg",
        "https://thepotteryfactory.com/brookfield/wp-content/uploads/Succulent-Box-1024x768.jpg",
      ],
      desc: "Bu Windowsill Succulent Garden Set — deraza usti uchun maxsus tanlangan bir nechta sukkulent o‘simliklar to‘plami. Uyingiz yoki ofisingiz derazasiga tabiiy yashillik qo‘shadi, yorqin quyosh nuri ostida go‘zal va estetik ko‘rinish yaratadi.",
      size: ["S", "M", "L", "XL"],
      category: "Succulents",
    },
    {
      id: 17,
      mainImg:
        "https://www.thespruce.com/thmb/64TKqXY7ZsMY7rU8x4PwvBSlG60=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/terravivadesign_66390229_1089808711230274_4419135553010770292_n-39558a1c0bb14cf297c89ca04963f143.jpg",
      title: "Lush Living Room Plants",
      price: 119.99,
      imgs: [
        "https://www.thespruce.com/thmb/64TKqXY7ZsMY7rU8x4PwvBSlG60=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/terravivadesign_66390229_1089808711230274_4419135553010770292_n-39558a1c0bb14cf297c89ca04963f143.jpg",
        "https://images.squarespace-cdn.com/content/v1/5235b4fee4b03309a8653b2f/1646766833378-TO40OE0ZBBMSXMS5BPU3/IMG_6351.jpg?format=1000w",
        "https://images.squarespace-cdn.com/content/v1/5dacaaa96cd99154a4c9e113/c7314adf-285d-4a67-8574-4cfd5e72557b/Globe.jpg?format=1000w",
        "https://cdn.shopify.com/s/files/1/0524/2893/1225/files/Top_35_68714aa5-026b-404a-a4f9-9570fe1b2b86_480x480.webp?v=1721065832",
      ],
      desc: "Uyingiz yoki ofisingiz ichki makonini jonlantiruvchi Green Indoor Houseplants Decor Set — bu zamonaviy ichki dizayn uchun mo‘ljallangan ko‘p turdagi yashil o‘simliklar to‘plami",
      size: ["S", "M", "L", "XL"],
      category: "Trerrariums",
    },
    {
      id: 18,
      mainImg:
        "https://media.istockphoto.com/id/621240084/photo/beautiful-jar-with-live-forest-with-self-ecosystem.jpg?s=612x612&w=0&k=20&c=IGeob0pcFtgDCFWsU-T9Fm5Oo8-C9e0UeB1QuYldduc=",
      title: "Self‑Sustaining Forest Terrarium in Glass Jar",
      price: 89.99,
      imgs: [
        "https://media.istockphoto.com/id/1310116434/photo/beautiful-jar-with-live-forest-with-self-ecosystem-terrarium-forest-in-a-jar.jpg?s=612x612&w=0&k=20&c=bNhcslWpdvyvXA0pVoJBBNLuq-Nyd1ZH1H6NvjbMXUE=",
        "https://rinkit.com.au/cdn/shop/files/iStock-1215411678.jpg?v=1742212625&width=3840",
        "https://www.theartofsucculents.co.uk/cdn/shop/files/IMG_0672.png?v=1742465891&width=1500",
        "https://www.theartofsucculents.co.uk/cdn/shop/products/IMG_0559-2.jpg",
      ],
      desc: "O‘zingizning xonangiz yoki ofisingiz uchun tabiiy mikro‑ekotizimga ega Self‑Sustaining Forest Terrarium — shisha idish ichida kichik o‘rmon go‘zalligini aks ettiradi.",
      size: ["S", "M", "L", "XL"],
      category: "Trerrariums",
    },
    {
      id: 19,
      mainImg:
        "https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/Plant+Dec+2019-+Dec+2020/best-plants-to-grow-in-terrarium.jpg",
      title: "Decorative Potted Plants Collection",
      price: 49.99,
      imgs: [
        "https://t4.ftcdn.net/jpg/09/05/51/29/360_F_905512941_c6pa8ljBmaD5S9kabZNoo6ZKLlznW0Hn.jpg",
        "https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/Plant+Dec+2019-+Dec+2020/best-plants-to-grow-in-terrarium.jpg",
        "https://cdn.shopify.com/s/files/1/0479/9089/8856/files/t7_480x480.jpg?v=1679747884",
        "https://images.immediate.co.uk/production/volatile/sites/10/2023/10/2048x1365-Terrarium-plants-Terrariumopenc25-8f964dd.jpg?quality=90&fit=700,466",
      ],
      desc: "Bu Decorative Potted Plants Collection — sizning uyingiz, ofisingiz yoki xonangiz uchun ideal ichki dekor o‘simliklar to‘plami. O‘ziga xos barglari va turli shakldagi kichik o‘simliklar bilan bu to‘plam har qanday yuzani jonlantiradi va tabiiy muhit hissini beradi.",
      size: ["S", "M", "L", "XL"],
      category: "Trerrariums",
    },
  ]);

  const addToCart = (id) => {
    const cart = data.find((item) => {
      return item.id == id;
    });

    const obj = {
      id: Math.floor(Math.random() * 9999),
      img: cart.mainImg,
      title: cart.title.slice(0, 18),
      price: cart.price,
      count: 1,
    };
    setCartdata([...cartdata, obj]);
  };

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartdata));
  }, [cartdata]);

  const del = (id) => {
    const filterData = cartdata.filter((item) => item.id !== id);
    setCartdata(filterData);
  };

  return (
    <>
      <BrowserRouter>
        {loginModal ? <LoginModal setLoginModal={setLoginModal} /> : ""}

        {shoppingModal ? (
          <ShoppingModal
            setShoppingModal={setShoppingModal}
            cartdata={cartdata}
            setCartdata={setCartdata}
          />
        ) : (
          ""
        )}

        <Navbar setLoginModal={setLoginModal} cartdata={cartdata} />
        <Routes>
          <Route
            path="/"
            element={<Homepage data={data} addToCart={addToCart} />}
          />
          <Route
            path="/productview/:id"
            element={<ProductView data={data} addToCart={addToCart} />}
          />
          <Route
            path="/productcart"
            element={
              <ProductCart
                cartdata={cartdata}
                del={del}
                setCartdata={setCartdata}
              />
            }
          />
          <Route
            path="/productcheckout"
            element={
              <ProductCheckout
                setShoppingModal={setShoppingModal}
                cartdata={cartdata}
              />
            }
          />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
