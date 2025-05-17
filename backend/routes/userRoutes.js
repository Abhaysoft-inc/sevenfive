import express from 'express';
import db from '../config/dbconfig.js'
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/register', async (req, res) => {

    const { name, branchId, semesterId, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 4);

    // vulnerable code

    // const insertData = await db.one(`INSERT INTO users (name, email, password, branch_id, semester_id) VALUES ('${name}', '${email}', ${hashedPassword}, '${branchId}', '${semesterId}') `).then(() => {

    // }).catch((e) => {
    //     console.log(e);
    // });

    const insertData = await db.one(
        `INSERT INTO users (name, email, password, branch_id, semester_id) 
   VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [name, email, hashedPassword, branchId, semesterId]
    ).then(() => {

    }).catch((e) => {
        console.log(e);
    });

    console.log(insertData);
    console.log("User Registration Successfull!");

    res.send("User Registered Successfully!");
});

export default router;

