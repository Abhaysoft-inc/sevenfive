import express from 'express';
import cors from 'cors'
import router from './routes/userRoutes.js'
import './config/dbconfig.js'

const app = express();
app.use(cors());

app.use(express.json())

app.use('/user', router)


app.listen(3000, () => {
    console.log("backend is running on port: 3000")
})