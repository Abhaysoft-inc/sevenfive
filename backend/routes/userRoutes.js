import express from 'express';
import db from '../config/dbconfig.js'
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/register', async (req, res) => {

    const { name, branch, semester, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 4);

    const insertData = await db.one(`INSERT INTO users (name, branch, semester, email, password) VALUES ('${name}', '${branch}', ${semester}, '${email}', '${hashedPassword}') `).then(() => {

    }).catch((e) => {
        console.log(e);
    });

    console.log(insertData);
    console.log("User Registration Successfull!");





    res.send("User Registered Successfully!");





});

export default router;

