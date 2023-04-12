import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';

dotenv.config();

const app: Express 	= express();
const port 					= process.env.PORT;
const router 				= express.Router();

app.use(express.json());
app.use(express.static('public'));

// Load Routes
// const indexRoute = require("./routes/index-route");
// const userRoute = require("./routes/user-route");
// const eventRoute = require("./routes/event-route");

// Routes
// app.use("/", indexRoute);
// app.use("/user", userRoute);
// app.use("/events", eventRoute);

// Connect to the DB
const uri = process.env.DB_CONN_STR as string;

mongoose.connect(uri)
	.then(() => console.log("MongoDB Connected…"))
	.catch(err => console.log(err));


app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`));
