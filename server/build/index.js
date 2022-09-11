import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
dotenv.config();
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello world update');
});
const PORT = process.env.PORT || 5000;
function start() {
    try {
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT ${PORT} ....`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
start();
