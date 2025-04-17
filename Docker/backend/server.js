const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "register"
})

app.post('/register', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    con.query("INSERT INTO users (email, username, password) VALUES (?, ?, ?)", [email, username, password], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    con.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG USERNAME OR PASSWORD!"})
                }
            }
        }
    )
})

app.listen(3000, () => {
    console.log("running backend server");
})




// CREATE TABLE pbooth.users (
//     User_id INT NOT NULL,
//     F_Name VARCHAR(65) NOT NULL,
//     M_Name VARCHAR(65) NOT NULL,
//     L_Name VARCHAR(65) NOT NULL,
//     Mobile INT(10) NOT NULL,
//     Email VARCHAR(100) NOT NULL,
//     Created DATETIME NOT NULL,
//     Created_by VARCHAR(85) NOT NULL,
//     Modified DATETIME NOT NULL,
//     Modified_by VARCHAR(100) NOT NULL,
//     Usertype_id INT NOT NULL,
//     Status VARCHAR(105) NOT NULL,
//     Pincode INT(6) NOT NULL,
//     PRIMARY KEY (User_id),
//     UNIQUE INDEX Email_UNIQUE (Email ASC) VISIBLE);

// CREATE TABLE pbooth.photoshelf (
//     PS_id INT NOT NULL,
//     PS_Name VARCHAR(15) NOT NULL,
//     PS_Size INT NOT NULL,
//     User_id INT NOT NULL,
//     Created VARCHAR(45) NOT NULL,
//     Created_by VARCHAR(45) NOT NULL,
//     Modified VARCHAR(45) NOT NULL,
//     Modified_by VARCHAR(45) NOT NULL,
//     Is_Delete TINYINT NOT NULL,
//     PRIMARY KEY (PS_id));
// CREATE TABLE pbooth.user_type_master (
//     User_Type_Id INT NOT NULL,
//     User_Type_Name VARCHAR(15) NOT NULL,
//     PRIMARY KEY (User_Type_Id));
// CREATE TABLE pbooth.subscription (
//     Subscription_id INT NOT NULL,
//     Subscription_Date DATETIME NOT NULL,
//     Subscription_Duration INT NOT NULL,
//     PS_Id INT NOT NULL,
//     Created VARCHAR(45) NOT NULL,
//     Created_by VARCHAR(45) NOT NULL,
//     Modified VARCHAR(45) NOT NULL,
//     Modified_by VARCHAR(45) NOT NULL,
//     User_Type_Id INT NOT NULL,
//     Grace_period INT NOT NULL,
//     Payment_Mode VARCHAR(245) NOT NULL,
//     Amount INT NOT NULL,
//     Status VARCHAR(445) NOT NULL,
//     PRIMARY KEY (Subscription_id))
