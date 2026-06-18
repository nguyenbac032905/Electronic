import express,{Express} from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/index.route";

const app: Express = express();
const port: number | string = process.env.PORT || 3001;
app.use(cors({origin: 'http://localhost:3000'}));

app.use(express.json());

router(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})