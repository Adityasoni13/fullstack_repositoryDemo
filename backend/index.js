const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');                          // new add
const { request } = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
var multer = require('multer');                          // new add  
var fs = require('fs');                                 // new add
// var dbName = "sampledb"

var mongodb = "projectdata"

 //var client = new MongoClient( 'mongodb://localhost:27017/mypro', {useNewUrlParser:true});
//  var client = new MongoClient( 'mongodb+srv://admin:admin@cluster0-h4v6l.mongodb.net/dbname?retryWrites=true&w=majority', {useNewUrlParser:true});
 var client = new MongoClient( 'mongodb+srv://user_aditya:12345@cluster0-w44oe.mongodb.net/projectdata?retryWrites=true&w=majority', {useNewUrlParser:true});




var connection;
client.connect((err, con)=>{

        if(!err)
        {
                connection = con;
                console.log("database connected successfully");
        }
        else{
            console.log("database could not connect");
        }
})



const app = express();

app.use(cors()); //middleware

app.use(express.json());
app.use(express.static(path.join(__dirname, 'uploads')));

var storage = multer.diskStorage({
    destination:(req, file, next)=> {
        next(null, 'uploads/')
    },
    filename:(req, file, next)=> {
        //console.log("in 35");
       // console.log(file);
      //  const ext=file.mimetype.split('/');
      console.log("->"+file);
      console.log("->"+file.fieldname);
        next(null,file.fieldname+".jpg"); 
    }
    });
    var upload = multer({ storage: storage })
 


app.get('/', (req, res)=>{

    res.send({status:"ok", data:"this is a test api"});
})




app.get('/user', (req, res)=>{
    var id= req.query.id;
    res.send({status:"ok", data:[{name:"X", age:78, id:id},{name:"Y", age:67}]});
})

// forlogin
app.post('/sign-in', bodyParser.json() ,(req,res)=>{
    console.log(req.body)
    

        var collection = connection.db(mongodb).collection('Users');
       if(req.body.email)
       {
        collection.find(req.body).toArray((err,docs)=>{
            if(!err && docs.length>0)
            {
                res.send({ status:"ok", data:docs });

                
            }
            else{
                res.send({status:"failed", data:err});
            }
        })
       }
       else
       {
        res.send({status:"failed", data:err});
       }
       
})


//for signin
app.post('/sign-up', bodyParser.json() ,(req,res)=>{

    var collection = connection.db(mongodb).collection('Users');

collection.find({email:req.body.email}).toArray((err,docs)=>{
    if(!err && docs.length>0)
    {
       res.send({status:"failed", data:"email already Exist"})
       
       
    }
    else{
        
        collection.insert(req.body, (err,result)=>{
            if(!err)
            {
                res.send({ status:"ok", data:"signup success" });

                sendMail("sn.aditya22@gmail.com", "zfpivqquvkqkcdaw" , "sonisahil432@gmail.com", "this is just to Test Node mailer this is subject", `this is content   <h3>Hi</h3><br><h6>Following is the link to rest your password</h6><a href="http://localhost:4200/newpassword">Reset Password</a>` )
            }
            else{
                res.send({status:"failed", data:err});
            }
        })

    }
});


})


//for contact qurrey
app.post('/contact', bodyParser.json(),(req, res)=>{
    // console.log("working")
    console.log(req.body)
    var collection= connection.db(mongodb).collection('contactqurrey'); 
    collection.insert(req.body,(err,result)=>{
        // console.log("working")
        if(!err){
            res.send({status:"success",desc:"student created successfully"});
        }
        else{
            res.send({status:"failed",desc:"some error occured"});
        }
    })
    });

   

// for upload details of logo and banner of all  forms
app.post('/forms', upload.fields([{
    name: 'banner', maxCount: 1
},{
    name: 'logo', maxCount: 1
}]), function (req, res, next) {
    const collection = connection.db(mongodb).collection('tourismform');

    collection.insert(req.body, (err,r) =>{
        console.log("working")
        if(!err)
        {
            
            fs.renameSync('./uploads/banner.jpg', './uploads/banner_'+r.insertedIds["0"] + '.jpg');
            fs.renameSync('./uploads/logo.jpg', './uploads/logo_'+r.insertedIds["0"] + '.jpg');

            res.send({ msg: "tourism form sucessfully inserted", status: 'OK', description: 'course created and file uploaded' });
        }
        else
        {
            res.send({ msg: "form not inserted", status: 'FAIL', description: 'error' });
        }
    });
})



// app.post('/forms', bodyParser.json() ,(req,res)=>{
//     console.log(req.body);
// var collection = connection.db(mongodb).collection('tourismform');

// collection.insert(req.body, (err, r)=>{
// console.log("result of insert is _id -> " + r.insertedId)
//      if (!err) {
//            res.send({ msg: "sucessfully inserted", status: "ok", description: 'all ok'});
//          }
//      else{
//            res.send({ msg: "not inserted", status: "failed", description: 'error in mongo db'});
//           }

// });
// })

   
   //backend event forms
   app.get('/getevent', (req, res) => {
    const collection = connection.db(mongodb).collection('tourismform');

    collection.find().toArray(function (err, docs) {
        console.log("tourismform docs");    
        console.log(docs)
        res.send({status:"ok", desc:docs});
    });
})
   
   


// nodemailer for sending massge to user

var nodemailer = require('nodemailer');


function sendMail(from, appPassword, to, subject,  htmlmsg)
{
    let transporter=nodemailer.createTransport(
        {
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            auth:
            {
             //  user:"weforwomen01@gmail.com",
             //  pass:""
             user:from,
              pass:appPassword
              
    
            }
        }
      );
    let mailOptions=
    {
       from:from ,
       to:to,
       subject:subject,
       html:htmlmsg
    };
    transporter.sendMail(mailOptions ,function(error,info)
    {
      if(error)
      {
        console.log(error);
      }
      else
      {
        console.log('Email sent:'+info.response);
      }
    });
}


    
    







app.listen(3000, ()=>{console.log("server is listining on port 3000")});