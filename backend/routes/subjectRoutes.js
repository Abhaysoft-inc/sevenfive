import { Router } from "express";
import db from "../config/dbconfig.js";

const subjectRouter = Router();

subjectRouter.get('/:branch/:semester', (async (req, res) => {

    const { branch, semester } = req.params;

    const queryResponse = await db.query(`

        SELECT sub.subject_id, sub.subject_name, sub.code
        FROM Subject sub
        JOIN Semester sem ON sub.semester_id = sem.semester_id
        WHERE sem.branch_id = $1 AND sem.semester_number = $2;`, [branch, semester]).then((data) => {
        res.send(data);
    });


}));

subjectRouter.get('/', (async (req, res) => {
    const query = await db.query(`
        SELECT sub.subject_id, sub.subject_name, sub.code
        FROM Subject sub
        JOIN Semester sem ON sub.semester_id = sem.semester_id
        
        
        `).then((data) => {
        res.send(data);
    })

}))

export default subjectRouter;