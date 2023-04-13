let express=require("express");
const { join } = require("path");
const { Model1 } = require("../DataBase/db");

let router=express.Router();

router.use(express.json())
router.use(express.urlencoded({extended:true}))


router.get("/",async (req,res)=>{
    let data=await Model1.find();
    // console.log(data);
    res.render("home",{data})
})

router.get("/form",(req,res)=>{
    // res.sendFile(join(process.cwd(),"views","nav.html"))
    res.render("register",{"name":"shubham"})
})

router.post("/form",(req,res)=>{
    let {name,email}=req.body
    let doc=new Model1({
        name:name,
        email:email,
    })
    doc.save()
    res.redirect("/")
})

router.get("/users/:id",async (req,res)=>{
    let id=req.params.id;
    // console.log(id);
    let data=await Model1.findById(id)
    if(data.boolean===null)
    {
        await Model1.findByIdAndUpdate(id,{$set:{boolean:true}})
    }
    else if(data.boolean===true)
    {
        await Model1.findByIdAndUpdate(id,{$set:{boolean:false}})
    }
    else
    {
        await Model1.findByIdAndUpdate(id,{$set:{boolean:true}})
    }
    // console.log(data);

    res.redirect("/")

})

router.get("/deleteUsers/:id",async (req,res)=>{
    let id=req.params.id;
    await Model1.findByIdAndDelete(id)
    res.redirect("/")

})

module.exports=router;