let express=require("express")
require('./DataBase/db.js')
let router=require("./router/user.js")

let app=express();

app.set("views","views")
app.set("view engine","ejs")

app.use(router)

app.listen(3000,()=>console.log('port is running on 3000'))