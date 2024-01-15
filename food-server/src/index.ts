import express , {Application} from "express";
import Color  from "colors";

const app: Application = express();

app.listen(8080, ()=> console.log(Color.rainbow("server aslaa")));