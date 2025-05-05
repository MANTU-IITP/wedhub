const mongoose=require('mongoose');
const Vendor=require('../models/vendor')


main()
      .then(()=>{
        console.log("connection successful");
      })
      .catch((err)=>console.log(err));


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wedgood');
}


const weddingVenues = [
    {
        name: "The Royal Palace",
        category: "Wedding Venue",
        price: 150000,
        city: "Jaipur",
        image: "https://tse1.mm.bing.net/th?id=OIP.OvDMlncaJOtJ3r1ASMJIBAHaE8&pid=Api&P=0&h=180"
    },
    {
        name: "Ocean View Resort",
        category: "Wedding Venue",
        price: 200000,
        city: "Goa",
        image: "https://tse3.mm.bing.net/th?id=OIP.gq2xA4tkK39osis-p-8N8gHaE8&pid=Api&P=0&h=180"
    },
    {
        name: "Skyline Banquets",
        category: "Wedding Venue",
        price: 120000,
        city: "Mumbai",
        image: "https://tse1.mm.bing.net/th?id=OIP.F_l2MzErpJsIHpzz4YYgXAHaE7&pid=Api&P=0&h=180"
    },
    {
        name: "Green Garden Lawns",
        category: "Wedding Venue",
        price: 100000,
        city: "Lucknow",
        image: "https://tse1.mm.bing.net/th?id=OIP.al_1M8RhsKTs24qRqAD7FgHaE2&pid=Api&P=0&h=180"
    },
    {
        name: "Heritage Haveli",
        category: "Wedding Venue",
        price: 180000,
        city: "Udaipur",
        image: "https://media.weddingz.in/images/df33734420196fcb9db1bc60ffecc507/top-5-outdoor-wedding-venues-in-gurgaon-for-you-to-get-married-in.jpg"
    },
    {
        name: "The Royal Palace",
        category: "Wedding Venue",
        price: 150000,
        city: "Jaipur",
        image: "https://tse1.mm.bing.net/th?id=OIP.OvDMlncaJOtJ3r1ASMJIBAHaE8&pid=Api&P=0&h=180"
    },
    {
        name: "Ocean View Resort",
        category: "Wedding Venue",
        price: 200000,
        city: "Goa",
        image: "https://tse3.mm.bing.net/th?id=OIP.gq2xA4tkK39osis-p-8N8gHaE8&pid=Api&P=0&h=180"
    },
    {
        name: "Skyline Banquets",
        category: "Wedding Venue",
        price: 120000,
        city: "Mumbai",
        image: "https://tse1.mm.bing.net/th?id=OIP.F_l2MzErpJsIHpzz4YYgXAHaE7&pid=Api&P=0&h=180"
    },
    {
        name: "Green Garden Lawns",
        category: "Wedding Venue",
        price: 100000,
        city: "Lucknow",
        image: "https://tse1.mm.bing.net/th?id=OIP.al_1M8RhsKTs24qRqAD7FgHaE2&pid=Api&P=0&h=180"
    },
    {
        name: "Heritage Haveli",
        category: "Wedding Venue",
        price: 180000,
        city: "Udaipur",
        image: "https://media.weddingz.in/images/df33734420196fcb9db1bc60ffecc507/top-5-outdoor-wedding-venues-in-gurgaon-for-you-to-get-married-in.jpg"
    },
];
Vendor.insertMany(weddingVenues);