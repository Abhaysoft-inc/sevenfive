import pgpPromise from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config()


const pgp = pgpPromise()
const db = pgp(process.env.DB_URL)

try {
    const connection = await db.connect()
} catch (error) {
    console.log(error)

}

export default db;







