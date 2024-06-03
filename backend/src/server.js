import express from 'express'
import { config } from 'dotenv'
import connectToDB from './config/db.js';
import userRouter from './routes/userRoute.js';
import bookRoute from './routes/bookRoute.js';
config();
const port = process.env.PORT || 8080;
const dburl=process.env.DB_URL || null;

const app= express()

app.use(express.json());  

//userRoter
app.use('/user', userRouter)

//books router
app.use('/books', bookRoute)

app.get('/', (req, res) => {
   res.send('Hello World!')
 }) 

 
app.listen(port,async ()=>{

 try {
   await connectToDB(dburl)
   console.log("server is running");
 } catch (error) {
   console.log(console.error());
   console.log("stuck");
 }
 
})