const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Vendor=require("./models/vendor");
const User=require("./models/User.js");
const path=require("path");
const session = require('express-session');
const authRoutes = require('./routes/auth');


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));


const port =3000;


main()
      .then(()=>{
        console.log("connection successful");
      })
      .catch((err)=>console.log(err));


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wedgood');
}
app.use(session({
    secret: 'wedhub_secret_key',
    resave: false,
    saveUninitialized: false
  }));
  app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
  });

app.use(authRoutes);

// In app.js
function ensureAuth(req, res, next) {
    if (req.session && req.session.user) {
      next(); // user is logged in
    } else {
      res.redirect("/login"); // user is not logged in
    }
  }
app.get("/", (req, res) => {
    res.render("./vendor/index.ejs")
       
});

  
app.get("/vendors/wedding-venues",async(req,res)=>{
    let venuedata=await Vendor.find({});
    // console.log(venuedata);
    res.render("./vendor/vendorlist.ejs",{venuedata});
})
app.get("/vendors/wedding-venues/new", ensureAuth, (req, res) => {
    res.render("./vendor/new.ejs");
  });
  
  app.post("/vendors/wedding-venues", ensureAuth, async (req, res) => {
    const { name, category, price, city, image } = req.body;
    let newvenue = new Vendor({ name, category, price, city, image });
  
    try {
      await newvenue.save();
      res.redirect("/vendors/wedding-venues");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error saving venue");
    }
  });



app.listen(port,(req,res)=>{
    console.log(`server is listining on ${port}`);
})