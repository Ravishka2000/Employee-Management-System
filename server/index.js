import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import EmployeeRoutes from './routes/EmployeeRoutes.js';

const app = express();
const URI = "mongodb+srv://admin:1234@ems.tifhds0.mongodb.net/employees?retryWrites=true&w=majority";
const PORT = 8090;
const PARAMS = { useNewUrlParser: true, useUnifiedTopology: true}

app.use(express.json());
app.use(cors());
app.use("/", EmployeeRoutes);

mongoose.set("strictQuery", false);
mongoose.connect(URI, PARAMS)
    .then(() => app.listen(PORT, () => console.info(`Server running on PORT ${PORT} 🔥`)))
    .catch((err) => console.error(err.message));

