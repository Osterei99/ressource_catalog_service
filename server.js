import express from 'express';
import resorcesrouter from '../routes/resources.js';
    

const port = 5002;
const app = express();

app.use(express.json());


app.listen(port, () => {        
    console.log(`Server is running at http://localhost:${port}`);
});