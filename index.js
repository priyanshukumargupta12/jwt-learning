const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const seceretKey = "seceretKey";

app.get('/', (req, res)=>{
    res.json({
        message:'A sample Api',
    })
})

app.post("/login", (req, res)=>{
    const user={
        id:1,
        username:'Priyanshu',
        email:'@priyanshukumargupta89@gmail.com'
    }
    jwt.sign({user}, seceretKey, {expiresIn:'300s'}, (err, token)=>{
        res.json({
            token
        })
    })
})   

app.post('/profile',verifyToken, (req, res)=>{
    jwt.verify(req.token, seceretKey, (err, authData)=>{  //yaha hum token or seceret key pass kar rahai jo seceretKey use kiyai hai upar
        //yaha callback function kai andar ril err  and dusra authData pass kiyai agr this rha th authData mil jayga wrna err miilega
        if(err) {
            res.send({result:'Invalid Token'})
        }else{
            res.json({
                message:'Profile accessed',
                authData
            })
        }
    } ); 
})

//middleware function define karegai taki verf=ify kar skai token ko before login
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']; //postman mai check kar rhai authorization kai liyai
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" "); //spliting based on spaces
        const token = bearer[1];  //At index one our token is persent 
        req.token = token;
        next(); // This next() call give control to the '/profle' route api that is post request where verification is happen in jwt.veryfy()
    }else{
        res.send({
            result: 'Token is not valid'
        })
    }
}

app.listen(8000, ()=>{
    console.log("App is listening on port 8000");
})