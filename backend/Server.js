import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";

let starVal=0;
const port = 8081;
const app = express();
app.use(
    cors({
        //origin: [rs],
        methods: ["POST", "GET", "PUT","DELETE"],
        origin: "http://localhost:3000", // Replace with the actual origin of your React app
        credentials: true,
    })
);
app.use(express.json());
app.use(bodyParser.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "software",
});
app.post("/rate/rate_amount",(req,res)=>{
    //let{Rate_amount}=req.body.updateRate;
    console.log("Received rating request:", req.body);
    starVal = req.body.value;
    console.log(starVal);
   //const id = req.params.id;
   //const review = req.params.value;
   //boardingId=1;
    /*const values = [value];
    const valuess = [userId,id];
    let sql="SELECT * from `student_boarding`  WHERE `student_id` = ? and `boarding_id` = ? ";
    let sql1="INSERT INTO `student_boarding` (`student_id`, `boarding_id`,`review`) VALUES (?,?,?)";
    db.query(sql, valuess, (err,result) => {
        console.log(err);
        if (err) return res.json("error");
        if(result.length>0){
            console.log(" You have alredy rated");
        }else{
           db.query(sql1, values, (err) =>{
            console.log(err);
            if (err) return res.json("error");
           });
        }8
       
    });*/
});
app.get('/ratedvalue', (req, res) => {
   res.json(starVal);
  });
app.listen(8081, () => {
    console.log("listening");
});