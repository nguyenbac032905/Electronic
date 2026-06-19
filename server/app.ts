import express,{Express} from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/index.route";
import qs from "qs";

const app: Express = express();
const port: number | string = process.env.PORT || 3001;
app.use(cors({origin: 'http://localhost:3000'}));

app.use(express.json());

app.set("query parser", (str: string) => qs.parse(str));

router(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})